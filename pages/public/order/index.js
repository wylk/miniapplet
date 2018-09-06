var t = getApp(),
  $ = t.requirejs("core"),
  s = t.requirejs("jquery");
Page({
  data:{
    'orderNo' : '',
  },
  onLoad : function(options){
    this.setData({
      orderNo: this.options.orderNo,
    })
  },
  onShareAppMessage: function () {

  },
  bindViewTap: function () {
    wx.navigateBack({ data: 1 });
  }
})
