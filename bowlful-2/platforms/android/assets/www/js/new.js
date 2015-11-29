(function() {
  $(document).on("pageinit", "#home", function(e) {
		//prevent any bound defaults
		e.preventDefault();
		//loader function after deviceready event returns
		function onDeviceReady() {

      $('#test').on('tap', function(e) {
        //e.preventDefault();
        //hide popup options for camera
        $('#test').hide();
      })

    }

    		//as deviceready returns load onDeviceReady()
    $(document).on("deviceready", onDeviceReady);
  });

})();
