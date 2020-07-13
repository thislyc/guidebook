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
    modalName: null,
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
    isLixian: false,
    activeFujin: {},
    markers: [],
    polyline: [],
    fixed: false,
    fixed2: false,
    mySelect: {},
    scanInfo: null
  },

  //滚动条监听
  onPageScroll: function (e) {
    this.setData({
      scrollTop: e.scrollTop
    })
    if (e.scrollTop > this.data.mySelect.top - this.data.CustomBar) {
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
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id) {

      this.setData({
        id: options.id
      })

      if (options.source && options.token) {
        this.setData({
          scanInfo: options
        })
        let data = wx.getStorageSync(this.data.id) || null
        let ids = wx.getStorageSync('ids') || null
        if (ids && ids.length >= 2||data) {
          this.setData({
            isLixian: true
          })
        }
        this.getData()
        console.log('扫码进')
        return;
      }

      let data = wx.getStorageSync(this.data.id) || null
      if (data) {
        console.log("读缓存")
        this.setData({
          info: data.info,
          polyline: data.polyline,
          markers: data.markers,
          isLixian: true
        })
      } else {
        let ids = wx.getStorageSync('ids') || null
        if (ids && ids.length >= 2) {
          this.setData({
            isLixian: true
          })
        }
        this.getData()
      }
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

    query.select('#mySelect').boundingClientRect(function (rect) {
      that.setData({
        mySelect: rect
      })
    }).exec();

    query.select('.place-desc').boundingClientRect(function (rect) {
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
    let data = {}
    if (this.data.scanInfo) {
      data = {
        source: this.data.scanInfo.source,
        token: this.data.scanInfo.token
      }
    }
    wx.request({
      url: app.globalData.apiUrl + '/api/v1/trips/' + this.data.id + '.json',
      data: data,
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        let scanInfo = this.data.scanInfo
        if (scanInfo) {
          let data = []
          scanInfo.title = res.data.trip.title
          data.push(scanInfo)
          wx.setStorageSync('scanCode', data)
        }

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
        let info = this.data.info
        info.routes.forEach(e => {
          e.isDetail = false
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

        info.introduce.daily.forEach(e => {
          e.places.forEach(e => {
            e.ellipsis = true
          })
        })

        this.setData({
          info: info,
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
    } else if (data.arr == 'introduce') {
      info.introduce.daily[data.index].isDetail = !info.introduce.daily[data.index].isDetail
    } else if (data.arr == 'budget') {
      info.budget.daily[data.index].isDetail = !info.budget.daily[data.index].isDetail
    }
    this.setData({
      info: info
    })
  },

  //点击去这里
  openLocation(e) {
    let item = e.currentTarget.dataset.item
    wx.openLocation({
      latitude: Number(item.latitude),
      longitude: Number(item.longitude),
      name: item.name,
    })
  },

  //点击附近
  fujinTap(e) {
    let item = e.currentTarget.dataset.item
    this.setData({
      activeFujin: {
        title: item.name,
        nearby: item.nearby
      },
      modalName: 'typeModal'
    })
  },

  //关闭弹窗
  hideModal() {
    this.setData({
      modalName: null
    })
  },

  //介绍详情折叠
  ellipsisTap(e) {
    let index = e.currentTarget.dataset.index
    let innerIndex = e.currentTarget.dataset.innerindex
    console.log(e)
    console.log(innerIndex)
    let info = this.data.info
    info.introduce.daily[index].places[innerIndex].ellipsis = !info.introduce.daily[index].places[innerIndex].ellipsis
    this.setData({
      info: info
    })
  },

  //点击离线
  lixianTap() {
    wx.setStorageSync(this.data.id, this.data)
    let ids = wx.getStorageSync('ids') || null
    if (!ids) {
      ids = []
    }
    ids.push(this.data.id)
    wx.setStorageSync('ids', ids)
    wx.setStorageSync(this.data.id, this.data)

    wx.showToast({
      title: '缓存成功',
      duration: 1000,
      icon: "success",
      mask: true,
    })
    this.setData({
      isLixian: true
    })
  },

  //点击显示图片
  showPic(e) {
    let url = e.currentTarget.dataset.url
    wx.previewImage({
      current: url,
      urls: [url]
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: this.data.info.title,
      path: '/pages/info/info?id=' + this.data.id,
      imageUrl: this.data.info.pictures[0]
    }
  }
})