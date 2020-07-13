// pages/scanhistory/scanhistory.js
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
   let list= wx.getStorageSync('scanCode')||[]
   this.setData({
     list:list
   })
  },

  onShow:function(){
    
  },

  //跳转到详情页面
  gotoInfo(e){
    let data=e.currentTarget.dataset.item
    wx.navigateTo({
      url: '../info/info?id=' + data.id + '&source=' + data.source + '&token=' + data.token,
    })
  }
})