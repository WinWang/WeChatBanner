//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banner: ["http://pic.90sjimg.com/design/00/07/76/10/55db042dadd80.jpg", "http://www.tianyue.com.cn/repository/image/K4EBlCrbSbSjSNEUpM9guA.png", "http://img.zcool.cn/community/0118cf5837d75ea801219c77f35e67.jpg","http://picapi.zhituad.com/photo/61/85/24FCE.jpg"],
    
    xindex: 0,
  },

  onLoad: function () {
   
  },

  //banner切换时候替换角标
  onChange: function (e) {
    this.setData({
      xindex: e.detail.current
    });
  },


})
