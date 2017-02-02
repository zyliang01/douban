//index.js
//获取应用实例
var api='https://api.douban.com/v2/movie/top250';
Page({
  data:{
      movies:[],
      headerText:"加载中..."
  },
    onLoad:function(){
      var that=this;
      wx.showToast({
          title:"玩命加载中...",
          icon:"loading",
          duration:10000
      });
          wx.request({
            url:'https://api.douban.com/v2/movie/top250',
              data:{},
              header:{ 'Content-type': 'json'},
              success: function(res) {
                  wx.hideToast();
                  console.log(res.data);
                  that.setData({
                      headerText:res.data.title,
                      movies:res.data.subjects
                  })
              }



          })
    }
})
