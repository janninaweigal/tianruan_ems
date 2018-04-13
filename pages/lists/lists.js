Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: "0"
  },
  changeActive: function (event) {
    if (this.data.active === event.currentTarget.dataset.activeValue) return
    else {
      wx.showLoading({
        title: '加载中',
        mask: true
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 3000)
      this.setData({
        active: event.currentTarget.dataset.activeValue
      })
    }
  },
  seeAll: function (event) {
    console.log(event.currentTarget.dataset.listPid)
  },
  onPullDownRefresh () {
    wx.startPullDownRefresh()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let lists = [{
      pid: '1',
      title: '预约代取快递',
      time: '2018-03-05 10:00:00',
      content: '收件人：XXX，快递公司：XXX, 收件人：XXX，快递公司：XXX, 收件人：XXX，快递公司：XXX',
      status: '正在进行中'
    }, {
      pid: '2',
      title: '预约代取快递',
      time: '2018-03-05 10:00:00',
      content: '收件人：XXX，快递公司：XXX, 收件人：XXX，快递公司：XXX, 收件人：XXX，快递公司：XXX',
      status: '正在进行中'
    }]
    this.setData({
      'lists': lists
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