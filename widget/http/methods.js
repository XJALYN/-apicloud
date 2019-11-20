
(function(window){
 let baseUrl = "https://s.xiaozihui.cn"

 let post = (api,params={},success,fail)=>{
   window.api.ajax({
       url: baseUrl + api,
       method: 'post',
       header:{
         'Content-Type':'application/json'
       },
       data: {
         values:params
       }
   }, function(ret, err){
       if (ret) {
          if(ret.status==200){
              success(ret)
          }else{
            window.api.toast({
                msg: ret.msg,
                duration: 1500,
                location: 'middle'
            });
          }

          } else {
            alert(JSON.stringify(err))
            fail(err)
          }
      });
 }
 let authorGet = (api,params={},success,fail)=>{
   let token = window.api.getPrefs({
       sync: true,
       key: 'token'
   })

   if(!token){
     window.api.openWin({
                  name: 'login',
                  url: './html/login/login.html',
                  slidBackEnabled:false,
                  animation:{
                   type:"movein",                //动画类型（详见动画类型常量）
                   subType:'from_bottom',       //动画子类型（详见动画子类型常量）
                   duration:300                //动画过渡时间，默认300毫秒
                },
                  pageParam: {
                      name: 'test'
                  }
              });
              return
   }

   window.api.ajax({
       url: baseUrl + api,
       method: 'get',
       headers:{
         'Content-Type':'application/json',
         'Authori-zation':'Bearer ' + token
       },
       data: {
         values:params
       }
   }, function(ret, err){
       if (ret) {
          if(ret.status==200){
              success(ret)
          }else{
            window.api.toast({
                msg: ret.msg,
                duration: 1500,
                location: 'middle'
            });
          }
         } else {
            fail(err)

         }
      });
 }


 let methods = {}

 // 1.获取验证码
 methods.getVerifyCode = function(params){
   return new Promise(function(resolve, reject) {
      post('/api/register/verify',params,resolve,reject)

   });
 }

 // 2.登录接口
 methods.login = function(params){
   return new Promise(function(resolve,reject){
     post('/api/login/mobile',params,resolve,reject)
   });
 }

 // 3.登出
 methods.logout = function(params){
   return new Promise(function(resolve,reject){
     authorPost('/api/logout',params,resolve,reject)
   });
 }
 // 4.用户信息
 methods.userInfo = function(params){
   return new Promise(function(resolve,reject){
     authorGet('/api/userinfo',params,resolve,reject)
   });
 }

 window.$methods = methods


})(window)
