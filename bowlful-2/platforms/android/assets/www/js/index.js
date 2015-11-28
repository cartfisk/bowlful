var app = {
  initialize: function(){
    this.bindEvents();
  }


  bindEvents:function(){
    document.addEventListener('deviceready',this.onDeviceReady,false);
  },

  onDeviceReady: function(){
    app.recievedEvent('deviceready');
  },

  recievedEvent:function(id){
    var parentElement = document.getElementsById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var recievedElement = parentElement.querySelector('.recieved')
    listeningElement.setAttribute('style','display:none;');
    recievedElement.setAttribute('style','display:block;');

    console.log('Recieved Event: ' + id);
  }
};
app.initialize();
