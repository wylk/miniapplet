var t = getApp(),
  $ = t.requirejs("core"),
  s = t.requirejs("jquery");
Page({
  data:{
    orderNo : '',
  },
  onLoad : function(options){
    this.setData({
      orderNo : options.orderNo,
    });
    wx.showLoading({
      title: '加载中',
    })
    this.payinfo();
  },
  payinfo: function () {
    var pageObj = this;
    var payData = { 'orderNo': pageObj.data.orderNo.substring(2)};
    $.post("wxapp/getPayinfo", payData, function (result) {
        if(result.res == 0){
          $.pay(result.orderinfo, function (res) {
            if (res.errMsg == 'requestPayment:ok') {
              $.post('/user.php?c=chrome&a=pash_message', { order_no: pageObj.data.orderNo}, function () { });
              wx.navigateTo({
                url: "/pages/public/order/index?orderNo=" + pageObj.data.orderNo
              })
            } else {
              // $.alert("error alert");
              $.alert(e.error);
              // wx.navigateBack({
              //   delta: 1
              // })
            }
          },function(i){
            wx.navigateBack({
              delta: 1
            })
          });
        }
    });
  },
  onShareAppMessage: function () {

  },
  bindViewTap: function () {
    wx.navigateBack({ data: 1 });
  }
})
