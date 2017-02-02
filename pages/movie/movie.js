/**
 * Created by zhuyunliang on 2017/1/26.
 */
var api='https://api.douban.com/v2/movie/subject/';
Page({
    data:{
        movie:[]
    },
    onLoad:function(parame){
        var that=this;
        wx.showToast({
            title:"玩命加载中...",
            icon:"loading",
            duration:10000
        });
        wx.request({
            url: api+parame.id,
            data: {},
            header: {
                'content-type': 'json'
            },
            success: function(res) {
                wx.hideToast();
               console.log(res.data);
                that.setData({
                    movie:res.data
                })

            }
        })
    }
})