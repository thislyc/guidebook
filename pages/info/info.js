// pages/info/info.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList:['行程','介绍','预算'],
    TabCur: 0,
    scrollLeft:0,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    scrollTop: null,
    // swiperList: ["http://lxzcdn.itzjj.cn/uploads/userfiles/182/images/pageimg/20200424/182-2004241924254-2.jpg",
    //   "http://lxzcdn.itzjj.cn/uploads/userfiles/182/images/pageimg/20200424/182-2004241924254-2.jpg",
    //   "http://lxzcdn.itzjj.cn/uploads/userfiles/182/images/pageimg/20200424/182-2004241924254-2.jpg"
    // ],
    id: null,
    info:{
      title:'',
      days:0,
      visits_count:0,
      distance:'',
      unit_price:0,
      themes:[],
      pictures_count:0,
      pictures:[]
    }
  },

  //滚动条监听
  scroll: function (e) {
    this.setData({
      scrollTop: e.detail.scrollTop
    })
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


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },


  getData() {
    wx.request({
      url: app.globalData.apiUrl + '/api/v1/trips/'+this.data.id+'.json',
      data: {
      },
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        this.setData({
          info:res.data.trip
        })
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})