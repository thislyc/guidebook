// pages/startlocation/startlocation.js
let app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      list:app.globalData.startLocation
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  selectTap:function(e){
    app.globalData.startDefault=e.currentTarget.dataset.index
    wx.navigateBack({
      delta: 0
    })
  }
})