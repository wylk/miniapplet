var t = getApp(),
  $ = t.requirejs("core"),
  s = t.requirejs("jquery");
Page({
  data: {
    openid : ''
  },
  onShow: function(){
    if (!t.data.webShowed) {
      t.data.webShowed = true;
      wx.navigateTo({
        url: '/pages/public/webview/index'
      })
    } 
    // else {
    //   wx.navigateBack({
    //     data: 1
    //   });
    // }
    var a = getCurrentPages();
    $.alert(a);
    // t.data.webShowed = true;
    this.getUserInfo();
  },
  getUserInfo: function () {
    var pageObj = this;
    wx.login({
      success: function (res) {
        // console.log(res);
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
  // bindViewTap:function(){
  //   // wx.navigateBack({data:1});
  //   // wx.setTabBarItem({
  //   //   index: 0,
  //   //   text: 'text',
  //   //   iconPath: '/path/to/iconPath',
  //   //   selectedIconPath: '/path/to/selectedIconPath'
  //   // })
  // },
  onTabItemTap:function(item){
    wx.setTabBarItem({
      index: 0,
      text: 'text',
      // iconPath: '/path/to/iconPath',
      // selectedIconPath: '/path/to/selectedIconPath'
    });
  }
})