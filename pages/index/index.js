//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    info: {
      startLocation: [
        //   {
        //   id: 1,
        //   name: "成都"
        // }
      ],
      fenlei: [
        // {
        //   name: '行程天数',
        //   chirdTabCur: 0,
        //   chird: [{
        //       id: 1,
        //       name: '不限'
        //     }, {
        //       id: 2,
        //       name: '测试1'
        //     },
        //     {
        //       id: 3,
        //       name: '测试2'
        //     }
        //   ]
        // },


      ]
    },
    list: [
      //   {
      //   id: '12',
      //   title: '稻城亚丁色达7天6晚',
      //   start: '成都市',
      //   end: '稻城县',
      //   day: 7,
      //   view: 10,
      //   imageNum: 99,
      //   km: 2122,
      //   images: ["http://lxzcdn.itzjj.cn/uploads/userfiles/182/images/pageimg/20200424/182-2004241924254-2.jpg",
      //     "http://lxzcdn.itzjj.cn/uploads/userfiles/182/images/pageimg/20200424/182-2004241924254-2.jpg",
      //     "http://lxzcdn.itzjj.cn/uploads/userfiles/182/images/pageimg/20200424/182-2004241924254-2.jpg"
      //   ]
      // }
    ],
    TabCur: 0,
    startDefault: 0, //出发地
    object: '', //目的地
    pageNum: 0,
    pageSize: 10,
    isTip: true
  },
  onLoad: function () {
    let info = wx.getStorageSync('info') || null
    let list = wx.getStorageSync('list') || null
    if (info && list) {
      this.setData({
        info: info,
        list: list
      })
      app.globalData.startLocation = this.data.info.startLocation
    } else {
      this.getInfo()
    }
  },
  onShow: function () {
    this.setData({
      startDefault: app.globalData.startDefault
    })
  },

  onPullDownRefresh: function () {
    this.restTap()
    wx.showLoading({
      title: '加载中'
    })
    this.getInfo()


  },

  getInfo() {
    wx.request({
      url: app.globalData.apiUrl + '/api/v1/trips.json',
      data: {
        page: this.data.pageNum,
        page_size: this.data.pageSize
      },
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (result) => {
        wx.hideLoading()
        wx.stopPullDownRefresh()
        this.setData({
          info: result.data.info,
          list: result.data.list,
          isTip: false
        })
        wx.setStorageSync('info', result.data.info)
        wx.setStorageSync('list', result.data.list)
        app.globalData.startLocation = this.data.info.startLocation
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  },

  getSearch() {
    this.setData({
      pageNum: 0,
      pageSize: 10
    })
    let data = {
      departure_id: this.data.info.startLocation[this.data.startDefault],
      place_keyword: this.data.object,
      only_trip: true,
      page: this.data.pageNum,
      page_size: this.data.pageSize
    }
    this.data.info.fenlei.forEach(e => {
      if (e.chird[e.chirdTabCur].id) {
        data[e.key] = e.chird[e.chirdTabCur].id
      }
    })

    wx.request({
      url: app.globalData.apiUrl + '/api/v1/trips.json',
      data: data,
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (result) => {
        this.setData({
          list: result.data.list
        })
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id
    })

  },
  tabSelect2(e) {
    let info = this.data.info
    info.fenlei[this.data.TabCur].chirdTabCur = e.currentTarget.dataset.index
    this.setData({
      info: info
    })
    this.getSearch()
  },

  search() {
    this.getSearch()
  },

  restTap() {
    let info = this.data.info
    info.fenlei.forEach(e => {
      e.chirdTabCur = 0
    })
    this.setData({
      object: '',
      info: info
    })
    this.getSearch()
  },

  addList() {
    if (this.data.list.length % 10 != 0) {
      return;
    }
    this.setData({
      pageNum: this.data.pageNum + 1
    })
    let data = {
      departure_id: this.data.info.startLocation[this.data.startDefault],
      place_keyword: this.data.object,
      only_trip: true,
      page: this.data.pageNum,
      page_size: this.data.pageSize
    }
    wx.request({
      url: app.globalData.apiUrl + '/api/v1/trips.json',
      method: 'post',
      data: data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        res.data.list.forEach(e => {
          this.data.list.push(e)
        })
      }
    });
  },

  scan() {
    wx.showActionSheet({
      itemList: ["扫码", "扫码记录"],
      complete: (res) => {},
      fail: (res) => {},
      success: (result) => {
        if (result.tapIndex == 0) {
          wx.scanCode({
            complete: (res) => {},
            fail: (res) => {},
            onlyFromCamera: false,
            scanType: [],
            success: (result) => {},
          })
        } else if (result.tapIndex == 1) {
          wx.navigateTo({
            url: '../scanhistory/scanhistory',
          })
        }
      },
    })
  },

  onReachBottom: function () {
    this.addList()
  },


  locationTap() {
    wx.navigateTo({
      url: '../startlocation/startlocation',
    })
  },

  gotoInfo(e) {
    wx.navigateTo({
      url: '../info/info?id=' + e.currentTarget.dataset.id,
    })
  }

})