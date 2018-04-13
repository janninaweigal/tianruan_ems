const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var sliderDatas = [
      {
        url: '',
        src: '../../img/b.png'
      },
      {
        url: '',
        src: '../../img/a.png'
      },
      {
        url: '',
        src: '../../img/c.png'
      }
    ]
    this.setData({'sliderDatas': sliderDatas})
    var moudles = [
      {
        url: '/pages/ems/ems',
        src: '/img/service.png',
        text:'代取服务'
      },
      {
        url: '/pages/lists/lists',
        src: '/img/service1.png',
        text: '我的订单'
      },
      {
        url: '/pages/lists/lists',
        src: '/img/service2.png',
        text: '待开发'
      },
      {
        url: '/pages/lists/lists',
        src: '/img/more.png',
        text: '更多'
      }
    ]
    this.setData({ 'moudles': moudles })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  toown:function(){
    wx.navigateTo({
      url: '../own/own'
    })
  },
  tolists: function () {
    wx.navigateTo({
      url: '../lists/lists'
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})