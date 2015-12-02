(function () {
  $(document).on("pageinit", "#home", function(e) {
		//prevent any bound defaults
		e.preventDefault();
		//loader function after deviceready event returns
		function onDeviceReady() {

      var pets = [];
      var petQuantity = -1; //make this = pets.length or appt. array method
      var lastUpdate;
      var feedTimes = { //user changeable feeding times throughout the day, stored as integer minutes since 12:00am
        morning: 540, //9am
        evening: 1020 //5pm
      };

      //use indexedDB to retrieve these values on launch
      var currentPet = -1;
      //var tick = setInterval(onTick, 10000);

      /*function onLaunch(){ //maybe try putting things in backwards order if it doesn't work
        var date;
        addPet("Jack");
        date = new Date(2015, 11, 1, 20, 0, 0, 0);
        Feed(0, date);
        addPet("Goob");
        date = new Date(2015, 11, 1, 9, 0, 0, 0);
        Feed(1, date);
      }

      function onTick(){
        var currentDate = new Date();
        UpdatePets(currentDate);
      }*/

      function LastFed(){
        this.date = "";
        this.year = "";
        this.month = "";
        this.date = "";
        this.day = "";
        this.hour = "";
        this.minute = "";
        this.morning = "";
        this.status = -1;   //integer value 0 for good, 1 for neutral, 2 for missed action
      }

      function Pet(name, photo, id){
        this.name = name;
        this.photo = photo;
        this.id = id;
        this.lastFed = new LastFed();
      }

      Pet.prototype.needsAction = function() {
        this.lastFed.status = 2;
        $("#pet" + this.id).removeClass("green");
        $("#pet" + this.id).removeClass("yellow");
        $("#pet" + this.id).addClass("red");
      };
      Pet.prototype.neutral = function() {
        this.lastFed.status = 1;
        $("#pet" + this.id).removeClass("red");
        $("#pet" + this.id).removeClass("green");
        $("#pet" + this.id).addClass("yellow");
      };
      Pet.prototype.fed = function() {
        this.lastFed.status = 0;
        $("#pet" + this.id).removeClass("red");
        $("#pet" + this.id).removeClass("yellow");
        $("#pet" + this.id).addClass("green");
      };

      /*function UpdatePetStatus(currentDate) {
          var currentTime = 60*currentDate.getHours() + currentDate.getMinutes();
          var morning;
          if ((Math.abs(currentTime-feedTimes.morning)) < (Math.abs(currentTime-feedTimes.evening)) {
            morning = true;
          }
          else if ((Math.abs(currentTime-feedTimes.morning)) > (Math.abs(currentTime-feedTimes.evening)){
            morning = false;
          }
          var pastFeedTime;
          switch (morning){
            case true: //if it's morning
              if (currentTime > feedTimes.morning){ //if it's past morning feed time
                pastFeedTime = true;
              }
              else if (currentTime < feedTimes.morning){ //if it's before morning feed time
                pastFeedTime = false;
              }
              for (i=0;i<pets.length;i++) {  //for each pet
                if (pastFeedTime && (pets[i].lastFed.date != currentDate.getDate())) { //if past feed time and pet has not been fed today
                  pets[i].needsAction(); //pet needs to be fed
                }
                else if (pets[i].lastFed.date == currentDate.getDate()) { //if pet has been fed today and it's morning the pet is okay
                  pets[i].fed();
                }
                else if (!pastFeedTime && !pets[i]lastFed.morning) { //if it's not past feed time and it hasn't been fed this morning
                  pets[i].neutral();
                }
              }
            case false: //if it's evening
              if (currentTime > feedTimes.evening) { //if it's past evening feed time
                pastFeedTime = true;
              }
              else if (currentTime < feedTimes.evening) { //if it's before evening feed time
                pastFeedTime = false;
              }
              for (i=0;i<pets.length;i++) {
                if (pastFeedTime && (pets[i].lastFed.date == currentDate.getDate())) { //if past feed time and pet has been fed today
                  if (pets[i].lastFed.morning) { //if pet hasn't been fed this evening
                    pets[i].needsAction();  //pet needs to be fed
                  }
                  else { //if pet was fed this evening
                    pets[i].fed();
                  }
                }
                else if (pets[i].lastFed.date != currentDate.getDate()) { //if pet was not fed today
                  pets[i].needsAction();
                }
                else if (!pastFeedTime && (pets[i].lastFed.date == currentDate.getDate()) && pets[i].lastFed.morning {
                  pets[i].neutral();
                }
              }
          }
      }*/

      function addPet() {
        $("#addPet").popup("close");
        petQuantity += 1;
        var id = petQuantity;
        var name = $("#newPetName").val();
        var photo = "";
        pets[id] = new Pet(name,photo,id);
        $("#insert").append("<div class='pet green' id='pet" + id + "'> <img src='img/images-2.jpg' /> </div>");
      }

      /*function addPet(name) {
        petQuantity += 1;
        var id = petQuantity;
        var photo = "";
        pets[id] = new Pet(name,photo,id);
        $("#insert").append("<div class='pet green' id='pet" + id + "'> <img src='img/images-2.jpg' /> </div>");
        $("#addPet").popup("close");
      }*/

      function FeedDialog(id) {
        $("#confirmHeader h1").html(pets[id].name);
        $("#lastfed").html("Last fed: " + pets[id].lastFed.day);
        $("#confirm").popup("open");
      }

      function Feed(id) {
        pets[id].lastFed = UpdateLastFed();
        $("#lastfed").html("Last fed: just now");
      }

      /*function Feed(id, date) {
        pets[id].lastFed = UpdateLastFed();
        $("#lastfed").html("Last fed: just now");
      }*/

      function UpdateLastFed() {
        var date = new Date();
        var currentTime = 60 * date.getHours() + date.getMinutes();
        var newLastFed = new LastFed();
        newLastFed.date = date;
        newLastFed.year = date.getFullYear();
        newLastFed.month = date.getMonth();
        switch(newLastFed.month) {
          case 0:
            newLastFed.month = "January";
            break;
          case 1:
            newLastFed.month = "February";
            break;
          case 2:
            newLastFed.month = "March";
            break;
          case 3:
            newLastFed.month = "April";
            break;
          case 4:
            newLastFed.month = "May";
            break;
          case 5:
            newLastFed.month = "June";
            break;
          case 6:
            newLastFed.month = "July";
            break;
          case 7:
            newLastFed.month = "August";
            break;
          case 8:
            newLastFed.month = "September";
            break;
          case 9:
            newLastFed.month = "October";
            break;
          case 10:
            newLastFed.month = "November";
            break;
          case 11:
            newLastFed.month = "December";
            break;
        }
        newLastFed.date = date.getDate();
        newLastFed.day = date.getDay();
        switch(newLastFed.day) {
          case 0:
            newLastFed.day = "Sun";
            break;
          case 1:
            newLastFed.day = "Mon";
            break;
          case 2:
            newLastFed.day = "Tues";
            break;
          case 3:
            newLastFed.day = "Wed";
            break;
          case 4:
            newLastFed.day = "Thur";
            break;
          case 5:
            newLastFed.day = "Fri";
            break;
          case 6:
            newLastFed.day = "Sat";
            break;
        }
        newLastFed.hour = date.getHours();
        newLastFed.minute = date.getMinutes();
        if ((Math.abs(currentTime-feedTimes.morning)) < (Math.abs(currentTime-feedTimes.evening))) {
          newLastFed.morning = true;
        }
        else if ((Math.abs(currentTime-feedTimes.morning)) > (Math.abs(currentTime-feedTimes.evening))){
          newLastFed.morning = false;
        }
        return newLastFed;
      }

      $("#addPetConfirm").on("tap", function(e){
        addPet();
      });

      $(".pets").on("tap", ".pet", function(e){
        e.preventDefault();
        currentPet = parseInt($(this).attr("id").substring(3));
        FeedDialog(currentPet);
      });

      $("#feed").on("tap", function(e){
        var id = parseInt($(this).attr("id").substring(3));
        Feed(currentPet);
      });

      //onLaunch();
    }
    		//as deviceready returns load onDeviceReady()
    $(document).on("deviceready", onDeviceReady);
  });

})();
