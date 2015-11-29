(function () {
  $(document).on("pageinit", "#home", function(e) {
		//prevent any bound defaults
		e.preventDefault();
		//loader function after deviceready event returns
		function onDeviceReady() {

      $('.pet').on('tap', function(e) {
        //e.preventDefault();
        //hide popup options for camera
        $(this).hide();
      })

      var petQuantity = -1;
      var pets = [];
      //use indexedDB to retrieve this value on launch

      function Pet(name, photo, id){
        this.name = name;
        this.photo = photo;
        this.id = id;
      }

      function addPet() {
        petQuantity += 1;
        var id = petQuantity;
        var name = $("#newPetName").val();
        var photo = "";
        pets[id] = new Pet(name,photo,id);
        $("#insert").append("<div class='pet' id='petShell" + id + "'><div class='circle'><div class='pet-icon'><a href='#confirm' id='pet" + id + "' data-rel='popup' data-position-to='window' data-transition='pop'><img class='img-circle' src='img/images-2.jpg' /></a></div></div></div>");
        $("#insert").append($("#pet0").attr("id"));
        $("#addPet").popup("close");
      }

      $("#addPetConfirm").on("tap", function(e){
        addPet();
      })

      $(".pet>div>div>a").on("tap", function(e){
        e.preventDefault();
        var test = "party";
        //var id = parseInt($(this).attr("id").substring(3));
        $("#insert").append(test);
        //$("#confirmHeader h1").append(pets[id].name);
      })

      $("#tester").on("tap", function(e){
        var id = $("#pet0").attr("id").substring(3);
        $("#insert").append(id);
        $("#insert").append(pets[id].name);
      })


    }

    		//as deviceready returns load onDeviceReady()
    $(document).on("deviceready", onDeviceReady);
  });

})();
