//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    info: {
      startLocation: {
        list: [{
          id: 1,
          name: "成都"
        }, {
          id: 2,
          name: "北京"
        }]
      },
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
          name: '行程天数'
        },
        {
          name: '行程天数'
        },

        {
          name: '行程天数'
        },
        {
          name: '行程天数'
        },
        {
          name: '行程天数'
        },
        {
          name: '行程天数'
        },

      ]
    },
    TabCur: 0,
    startDefault: 0, //出发地
    object: '', //目的地
  },
  onLoad: function () {},
  onShow: function () {
    this.setData({
      startDefault: app.globalData.startDefault
    })
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
  },

  scan() {
    wx.showActionSheet({
      itemList: ["扫码", "扫码历史"],
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

        }
      },
    })
  }
})