
(function(window){
  function initGetTui (){
    api.setAppIconBadge({
    badge: 0
    });
    var uzgetuisdk = api.require('pushGeTui');
    uzgetuisdk.initialize(function(ret) {
    var value = "";
    switch (ret.type) {
    case 'cid':
       value = 'cid:' + ret.cid;
       break;
    case 'payload':
       value = 'payload:' + ret.payload;
       payload(JSON.parse(ret.payload))
       break;
    case 'occurError':
       value = 'occurError';
       break;
    case'onNotificationMessageClicked':
     value = 'onNotificationMessageClicked' + ret.onNotificationMessageClicked
     break;
    case'onNotificationMessageArrived':
     value = 'onNotificationMessageArrived' + ret.onNotificationMessageArrived
     break;
    }
    });
  }
  // 处理返回的数据
  function payload(data){
     if(data.path){
        api.openWin({
            name: 'page1',
            url: data.path,
            pageParam: {
                name: 'test'
            }
        });
     }
  }

  window.initGetTui = initGetTui
})(window)

// 处理数据
