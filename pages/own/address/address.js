// pages/own/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodAddress:[{
      gid:0,
      name:'林斌',
      phone:'13602113797',
      province:'天津市西青区',
      address:'天津天津市西青区精武镇天津市大学软件学院',
      defaultAddress:true
    },{
      gid: 1,
      name: '林斌',
      phone: '13602113797',
      province: '福建省平潭县',
      address: '福建省平潭县美丽园后两栋',
      defaultAddress: false
    },{
        gid: 2,
        name: '林丽丽',
        phone: 'xxxxxxxxxxx',
        province: '福建省平潭县',
        address: 'xxxxxxxxxxxxxxxxx',
        defaultAddress: false
    },{
      gid: 3,
      name: '许文杰',
      phone: 'xxxxxxxxxxx',
      province: '福建省平潭县',
      address: 'xxxxxxxxxxxxxxxxxxx',
      defaultAddress: false
    }]
  },
  addNew: function () {
    wx.navigateTo({
      url: 'new/new'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
// 编辑收货地址
editAddress:function(e){
  var editgood = e.currentTarget.dataset.editgood;
  var good = JSON.stringify(editgood);
  wx.navigateTo({
    url: 'edit/edit?good='+good
  })
},
//删除收货地址
deleteAddress:function(){
  wx.showModal({
    title: '提示',
    content: '确定删除这个收货地址吗？',
    success: function (res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
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