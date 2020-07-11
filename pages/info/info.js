// pages/info/info.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: ['行程', '介绍', '预算'],
    TabCur: 0,
    scrollLeft: 0,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    scrollTop: null,
    // swiperList: ["http://lxzcdn.itzjj.cn/uploads/userfiles/182/images/pageimg/20200424/182-2004241924254-2.jpg",
    //   "http://lxzcdn.itzjj.cn/uploads/userfiles/182/images/pageimg/20200424/182-2004241924254-2.jpg",
    //   "http://lxzcdn.itzjj.cn/uploads/userfiles/182/images/pageimg/20200424/182-2004241924254-2.jpg"
    // ],
    id: null,
    info: {
      title: '',
      days: 0,
      visits_count: 0,
      distance: '',
      unit_price: 0,
      themes: [],
      pictures_count: 0,
      pictures: [],
      routes: [],
      introduce: {},
      budget: {}
    },
    markers: [],
    polyline: [],
    fixed: false,
    fixed2: false,
    myDay: 0,
    mySelect: {}
  },

  //滚动条监听
  scroll: function (e) {
    this.setData({
      scrollTop: e.detail.scrollTop
    })
    if (e.detail.scrollTop > this.data.mySelect.top - this.data.CustomBar) {
      if (!this.data.fixed2)
        this.setData({
          fixed2: true
        })
    } else {
      if (this.data.fixed2)
        this.setData({
          fixed2: false
        })
    }

    if (e.detail.scrollTop > this.data.myDay - this.data.CustomBar) {

      //创建节点选择器
      let query = wx.createSelectorQuery();
      //选择id
      let that = this;
      for (let i = 0; i < that.data.info.routes.length; i++) {
        query.select('#myDay' + i).boundingClientRect(function (rect) {
          if (e.detail.scrollTop > rect.bottom - that.data.CustomBar) {
            if (!that.data.info.routes[i].fixed) {
              let info = that.data.info
              info.routes[i].fixed = true
              that.setData({
                info: info
              })
            }
          } else {
            if (that.data.info.routes[i].fixed) {
              let info = that.data.info
              info.routes[i].fixed = false
              that.setData({
                info: info
              })
            }
          }
        }).exec();
      }

    } else {
      //创建节点选择器
      let query = wx.createSelectorQuery();
      //选择id
      let that = this;
      for (let i = 0; i < that.data.info.routes.length; i++) {
        query.select('#myDay' + i).boundingClientRect(function (rect) {
          console.log(rect.bottom)
          if (e.detail.scrollTop > rect.bottom - that.data.CustomBar) {
            if (!that.data.info.routes[i].fixed) {
              let info = that.data.info
              info.routes[i].fixed = true
              that.setData({
                info: info
              })
            }
          } else {
            if (that.data.info.routes[i].fixed) {
              let info = that.data.info
              info.routes[i].fixed = false
              that.setData({
                info: info
              })
            }
          }
        }).exec();
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id) {
      this.setData({
        id: options.id
      })
      this.getData()
    } else {
      wx.navigateBack({
        delta: 0,
      })
    }

  },

  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap'); //创建初始地图

    //创建节点选择器
    var query = wx.createSelectorQuery();
    //选择id
    var that = this;
    query.select('#myDay0').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      that.setData({
        myDay: res[1].scrollHeight
      })
      console.log(res)
    })

    query.select('#mySelect').boundingClientRect(function (rect) {
      that.setData({
        mySelect: rect
      })
      console.log(rect)
    }).exec();
  },


  //坐标点出现在一个视野范围
  includePoints: function () {
    let that = this;
    that.mapCtx.includePoints({
      padding: [100, 80, 100, 80],
      points: that.data.polyline[0].points //放入所有坐标轴的数组   并引用此方法
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },


  getData() {
    wx.request({
      url: app.globalData.apiUrl + '/api/v1/trips/' + this.data.id + '.json',
      data: {},
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        this.setData({
          info: res.data.trip
        })
        console.log(this.data.info)
        let markers = []
        let polyline = [{
          points: [],
          color: "#FF0000DD",
          width: 2,
          dottedLine: true
        }]
        let routes = this.data.info.routes
        routes.forEach(e => {
          e.isDetail = true
          e.waypoints.forEach(i => {
            // i.callout = {
            //   content: i.name,
            //   padding: 10,
            //   display: 'ALWAYS',
            //   textAlign: 'center',
            //   borderRadius: 10,
            //   borderWidth: 1,
            // }

            polyline[0].points.push({
              latitude: i.latitude,
              longitude: i.longitude,
            })
            markers.push(i)
          })
        })

        this.setData({
          polyline: polyline,
          markers: markers
        })
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  },


  selectMarket: function (e) {
    console.log(e)
    var id = e.markerId
    console.log(id)
    wx.openLocation({
      latitude: this.data.markers[id].latitude,
      longitude: this.data.markers[id].longitude,
      name: this.data.markers[id].name,
    })
  },

  detailTap(e) {
    let data = e.currentTarget.dataset
    let info = this.data.info
    if (data.arr == 'routes') {
      info.routes[data.index].isDetail = !info.routes[data.index].isDetail
    }
    this.setData({
      info: info
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})