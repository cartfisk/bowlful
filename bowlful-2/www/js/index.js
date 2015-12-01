(function () {
  $(document).on("pageinit", "#login", function(e) {
		//prevent any bound defaults
		e.preventDefault();
		//loader function after deviceready event returns
		function onDeviceReady() {

      function onConfirm(buttonIndex){
        alert("You have selected button"+ buttonIndex);
      }
      navigator.notification.confirm(
        "You win",
        onConfirm,
        "Game over",
        ["Restart","Exit"]
      )
        //Week 9 slide 11
      $("#takePhoto").on("tap",function(e){
        e.preventDefault();
        $("#photoSelector").popup("open");
      })

      $("#cameraPhoto").on("tap",function(e){
          e.preventDefault();
          $("#photoSelector").popup("close");
          navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            sourceType: Camera.PictureSourceType.CAMERA,
            destinationType: Camera.DestinationType.FILE_URI
          });
        })

    function onSuccess(imageData){
      var image = document.getElementById('imageView');
      image.src = imageData;
    }
    function onFail(message){
      navigator.notification.alert("Failed because: " + message);
    }
    $("#galleryPhoto").on("tap",function(e){
      e.preventDefault();
      $("#photoSelector").popup("close");
      navigator.camera.getPicture(onSuccess,onFail,{
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: Camera.DestinationType.FILE_URI
      });
    })




}
//On device ready function closes


    		//as deviceready returns load onDeviceReady()
    $(document).on("deviceready", onDeviceReady);
  });

})();
