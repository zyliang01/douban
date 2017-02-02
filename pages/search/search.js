/**
 * Created by zhuyunliang on 2017/1/26.
 */
 var API_URL="https://api.douban.com/v2/movie/search";
Page({
    data:{
        movies:[]
    },
    search:function(e){
       if(!e.detail.value){
           return
       }
       wx.showToast({
           title:"玩命加载中",
           icon:"loading",
           duration:10000
       });
        var that=this;
        wx.request({
            url:API_URL+"?q="+e.detail.value,
            data:{},
           header:{
                "content-type":"json"
           },
            success:function(res){
               wx.hideToast();
               console.log(res.data);
                that.setData({
                    movies:res.data.subjects
                })
            }
        })
    }
})