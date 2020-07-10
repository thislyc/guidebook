//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    info: {
      startLocation: [{
        id: 1,
        name: "成都"
      }, {
        id: 2,
        name: "北京"
      }],
      fenlei: [{
          name: '主题',
          chirdTabCur: 0,
          chird: [{
              id: 1,
              name: '全部'
            }, {
              id: 2,
              name: '测试1'
            },
            {
              id: 3,
              name: '测试2'
            }
          ]
        },
        {
          name: '行程天数',
          chirdTabCur: 0,
          chird: [{
              id: 1,
              name: '不限'
            }, {
              id: 2,
              name: '测试1'
            },
            {
              id: 3,
              name: '测试2'
            }
          ]
        },


      ]
    },
    list: [{
      id: '12',
      title: '稻城亚丁色达7天6晚',
      start: '成都市',
      end: '稻城县',
      day: 7,
      km: 2122,
      images: ["http://lxzcdn.itzjj.cn/uploads/userfiles/182/images/pageimg/20200424/182-2004241924254-2.jpg",
        "http://lxzcdn.itzjj.cn/uploads/userfiles/182/images/pageimg/20200424/182-2004241924254-2.jpg",
        "http://lxzcdn.itzjj.cn/uploads/userfiles/182/images/pageimg/20200424/182-2004241924254-2.jpg"
      ]
    }, {
      id: '122',
      title: '稻城亚丁色达7天6晚',
      start: '成都市',
      end: '稻城县',
      day: 7,
      km: 2122,
      images: ["http://lxzcdn.itzjj.cn/uploads/userfiles/182/images/pageimg/20200424/182-2004241924254-2.jpg",
        "http://lxzcdn.itzjj.cn/uploads/userfiles/182/images/pageimg/20200424/182-2004241924254-2.jpg",
        "http://lxzcdn.itzjj.cn/uploads/userfiles/182/images/pageimg/20200424/182-2004241924254-2.jpg"
      ]
    }, {
      id: '122',
      title: '稻城亚丁色达7天6晚',
      start: '成都市',
      end: '稻城县',
      day: 7,
      km: 2122,
      images: ["http://lxzcdn.itzjj.cn/uploads/userfiles/182/images/pageimg/20200424/182-2004241924254-2.jpg",
        "http://lxzcdn.itzjj.cn/uploads/userfiles/182/images/pageimg/20200424/182-2004241924254-2.jpg",
        "http://lxzcdn.itzjj.cn/uploads/userfiles/182/images/pageimg/20200424/182-2004241924254-2.jpg"
      ]
    }],
    TabCur: 0,
    startDefault: 0, //出发地
    object: '', //目的地
  },
  onLoad: function () {
    this.getInfo()
  },
  onShow: function () {
    this.setData({
      startDefault: app.globalData.startDefault
    })
  },

  getInfo() {
    app.globalData.startLocation = this.data.info.startLocation
  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id
    })

  },
  tabSelect2(e) {
    console.log(e.currentTarget.dataset.id)
    let info = this.data.info
    info.fenlei[this.data.TabCur].chirdTabCur = e.currentTarget.dataset.index
    this.setData({
      info: info
    })
  },

  search() {
    console.log("搜索")
    console.log(this.data.object)
  },

  restTap() {
    let info = this.data.info
    info.fenlei.forEach(e => {
      e.chirdTabCur = 0
    })
    this.setData({
      info: info
    })
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

  locationTap() {
    wx.navigateTo({
      url: '../startlocation/startlocation',
    })
  },

  gotoInfo(e){
    wx.navigateTo({
      url: '../info/info?id='+e.currentTarget.dataset.id,
    })
  }

})