var t = getApp(),
  $ = t.requirejs("core"),
  s = t.requirejs("jquery");
Page({
  data: {
    openid : ''
  },
  onShow: function(){
    var a = getCurrentPages();
    if (a.length == 1) {
      wx.navigateTo({
        url: '/pages/public/webview/index'
      })
    } 
    this.getUserInfo();
  },
  getUserInfo: function () {
    var pageObj = this;
    wx.login({
      success: function (res) {
        var data = { code: res.code, store_id: 2 };
        $.post('wxapp/login', data, function (res) {
          // console.log(res);
          pageObj.setData({
            openid: res.msg.openid
          })
        });
      },
      fail: function (r) {
        console.log(r);
      }
    })
  },
  onShareAppMessage: function () {

  },

  onTabItemTap:function(item){
    wx.setTabBarItem({
      index: 0,
      text: 'text',
      // iconPath: '/path/to/iconPath',
      // selectedIconPath: '/path/to/selectedIconPath'
    });
  }
})