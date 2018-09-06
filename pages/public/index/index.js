var t = getApp(),
  $ = t.requirejs("core"),
  s = t.requirejs("jquery");
Page({
  data: {
    openid : ''
  },
onShow: function(){
  // $.alert(t.data.webShowed);
  // console.log(t.data.webShowed);
  if(!t.data.webShowed){
    wx.navigateTo({
      url:'/pages/public/webview/index'
    })
  }else{
    // $.alert("dff");
    wx.navigateBack({
      delta : -1
    });
  }
}
})