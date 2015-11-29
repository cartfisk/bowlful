$(document).on("pageinit","#login", function(){
  document.addEventListener('deviceready',onDeviceReady,false);
});

function onDeviceReady(){
  //code goes here
  console.log('success - js call');
  alert(" Events have been bound");
}
