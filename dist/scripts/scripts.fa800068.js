"use strict";!function(){var a=angular.module("ogreApp",["ngRoute","ngAnimate","ngResource","ngSanitize","ngTouch","ngFileUpload"]);a.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/welcome.html"}).when("/login",{templateUrl:"views/login.html",controller:"loginController",controllerAs:"loginCtrl"}).when("/register",{templateUrl:"views/register.html",controller:"registerController",controllerAs:"regCtrl"}).when("/main",{templateUrl:"views/main.html",controller:"mainController",controllerAs:"mainCtrl"}).when("/viewgear/:gear_id",{templateUrl:"views/viewgear.html",controller:"viewGearController",controllerAs:"viewGearCtrl"}).when("/mygear",{templateUrl:"views/mygear.html",controller:"myGearController",controllerAs:"myGearCtrl"}).when("/mygearrentals/:gear_id",{templateUrl:"views/mygearrentals.html",controller:"myGearRentalsController",controllerAs:"myGearRentalsCtrl"}).when("/createnewgear",{templateUrl:"views/createnewgear.html",controller:"createNewGearController",controllerAs:"createNewGearCtrl"}).when("/myrentals",{templateUrl:"views/myrentals.html",controller:"myRentalsController",controllerAs:"myRentalsCtrl"}).otherwise({redirectTo:"/"})}])}(),angular.module("ogreApp").value("appSettings",{title:"Ogre Buddies Application",version:"1.0",railsURI:"https://ogre-buddies.herokuapp.com"}),function(){var a=function(a,b){var c={};return c.appSettings=b,c.authenticateUser=function(b){return a.post(this.appSettings.railsURI+"/login",b,{processData:!1})},c};a.$inject=["$http","appSettings"],angular.module("ogreApp").factory("loginFactory",a)}(),function(){var a=function(a,b){var c={};return c.appSettings=b,c.createUser=function(b){return a.post(this.appSettings.railsURI+"/register",b,{headers:void 0})},c.stateOptions=["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"],c};a.$inject=["$http","appSettings"],angular.module("ogreApp").factory("registerFactory",a)}(),function(){var a=function(a,b,c){var d={};return d.appSettings=b,d.getMyGear=function(){return a.get(this.appSettings.railsURI+"/myproducts",{headers:{Authorization:"Token token="+localStorage.getItem("token")}})},d.getMyGearItem=function(b){return a.get(this.appSettings.railsURI+"/myproducts/"+b,{headers:{Authorization:"Token token="+localStorage.getItem("token")}})},d.editMyGearItem=function(a,b,d){return c.upload({url:this.appSettings.railsURI+"/myproducts/"+b,headers:{Authorization:"Token token="+localStorage.getItem("token")},method:"PUT",fields:{"product[title]":d.title,"product[description]":d.description,"product[daily_cost]":d.daily_cost,"product[category]":d.category},file:a,fileFormDataName:"product[image]"})},d.deleteMyGearItem=function(b){return a["delete"](this.appSettings.railsURI+"/myproducts/"+b,{headers:{Authorization:"Token token="+localStorage.getItem("token")}})},d};a.$inject=["$http","appSettings","Upload"],angular.module("ogreApp").factory("myGearFactory",a)}(),function(){var a=function(a,b){var c={};return c.appSettings=b,c.getAllGear=function(){return a.get(this.appSettings.railsURI+"/allproducts",{headers:{Authorization:"Token token="+localStorage.getItem("token")}})},c.getGearItem=function(b){return a.get(this.appSettings.railsURI+"/allproducts/"+b,{headers:{Authorization:"Token token="+localStorage.getItem("token")}})},c};a.$inject=["$http","appSettings"],angular.module("ogreApp").factory("allGearFactory",a)}(),function(){var a=function(a,b,c){var d={};return d.appSettings=b,d.createNewGear=function(a,b){return c.upload({url:this.appSettings.railsURI+"/myproducts",headers:{Authorization:"Token token="+localStorage.getItem("token")},method:"POST",fields:{"product[title]":b.title,"product[description]":b.description,"product[daily_cost]":b.daily_cost,"product[category]":b.category},file:a,fileFormDataName:"product[image]"})},d.gearCategories=[{id:"default",name:"Select a Category"},{id:"Camping",name:"Camping",type:"Land"},{id:"Hiking",name:"Hiking",type:"Land"},{id:"Climbing",name:"Climbing",type:"Extreme"},{id:"Skiing",name:"Skiing",type:"Winter"},{id:"Snowboarding",name:"Snowboarding",type:"Winter"},{id:"Snowshoeing",name:"Snowshoeing",type:"Winter"},{id:"Rafting",name:"Rafting",type:"Water"},{id:"Surfing",name:"Surfing",type:"Water"},{id:"Paddleboarding",name:"Paddleboarding",type:"Water"},{id:"Base Jumping",name:"Base Jumping",type:"Extreme"},{id:"Spalunking",name:"Spalunking",type:"Extreme"},{id:"Fishing",name:"Fishing",type:"Land"},{id:"Wind Surfing",name:"Wind Surfing",type:"Water"},{id:"Kayaking",name:"Kayaking",type:"Water"},{id:"Canoeing",name:"Canoeing",type:"Water"},{id:"Wakeboarding",name:"Wakeboarding",type:"Water"},{id:"Water Skiing",name:"Water Skiing",type:"Water"},{id:"Biking",name:"Biking",type:"Land"},{id:"Other",name:"Other",type:"Other"}],d};a.$inject=["$http","appSettings","Upload"],angular.module("ogreApp").factory("createNewGearFactory",a)}(),function(){var a=function(a,b){var c={};return c.appSettings=b,c.editMyGearRental=function(b,c,d){return a.put(this.appSettings.railsURI+"/myproducts/"+b+"/myproductrentals/"+c,d,{headers:{Authorization:"Token token="+localStorage.getItem("token")}})},c};a.$inject=["$http","appSettings"],angular.module("ogreApp").factory("myGearRentalFactory",a)}(),function(){var a=function(a,b){var c={};return c.appSettings=b,c.getMyRentals=function(){return a.get(this.appSettings.railsURI+"/myrentals",{headers:{Authorization:"Token token="+localStorage.getItem("token")}})},c.getMyRental=function(b){return a.get(this.appSettings.railsURI+"/myrentals/"+b,{headers:{Authorization:"Token token="+localStorage.getItem("token")}})},c.editMyRental=function(b,c){return a.put(this.appSettings.railsURI+"/myrentals/"+b,c,{headers:{Authorization:"Token token="+localStorage.getItem("token")}})},c.deleteMyRental=function(b){return a["delete"](this.appSettings.railsURI+"/myrentals/"+b,{headers:{Authorization:"Token token="+localStorage.getItem("token")}})},c.createRental=function(b,c){return a.post(this.appSettings.railsURI+"/allproducts/"+b+"/allproductrentals",c,{headers:{Authorization:"Token token="+localStorage.getItem("token")}})},c};a.$inject=["$http","appSettings"],angular.module("ogreApp").factory("myRentalsFactory",a)}(),function(){var a=function(a,b){var c={};return c.appSettings=b,c.getUser=function(){return a.get(this.appSettings.railsURI+"/getuser",{headers:{Authorization:"Token token="+localStorage.getItem("token")}})},c.searchGear=function(b){return a.get(this.appSettings.railsURI+"/searchproducts?title="+b,{headers:{Authorization:"Token token="+localStorage.getItem("token")}})},c.searchFriends=function(b,c){return a.get(this.appSettings.railsURI+"/searchmeetup/?radius=25&page=25&zip="+b+"&text="+c)},c};a.$inject=["$http","appSettings"],angular.module("ogreApp").factory("searchFactory",a)}(),function(){var a=function(a,b,c){var d=this;d.appSettings=a,d.loginForm={},d.loginForm.email="",d.loginForm.password="",d.authenticateUser=function(){console.log(d.loginForm),b.authenticateUser({credentials:d.loginForm}).success(function(a,b){localStorage.setItem("token",a.token),localStorage.getItem("token"),console.log("success logging in"),c.path("/main")}).error(function(a,b,c,d){console.log("Error logging in"),alert("error logging in")})}};a.$inject=["appSettings","loginFactory","$location"],angular.module("ogreApp").controller("loginController",a)}(),function(){var a=function(a,b,c){var d=this;d.appSettings=a,d.regForm={},d.regForm.first_name="",d.regForm.last_name="",d.regForm.email="",d.regForm.password="",d.confirmPassword="",d.regForm.city="",d.regForm.state="",d.regForm.zip="",d.createUser=function(){b.createUser({user:d.regForm}).success(function(a,b){console.log("success creating user"),c.path("/login")}).error(function(a,b,c,d){console.log("Error creating user"),alert("error creating new user")})},d.passwordVerify=function(){return d.regForm.password===d.confirmPassword},d.stateOptions=b.stateOptions};a.$inject=["appSettings","registerFactory","$location"],angular.module("ogreApp").controller("registerController",a)}(),function(){var a=function(a,b,c){function d(){b.getUser().success(function(a){console.log("success getting user"),e.userZip=a.zip}).error(function(a,b,c,d){console.log("Error getting stuff from the remote api"),alert("Error getting stuff from the remote api")})}var e=this;e.appSettings=a,e.searchQuery="",e.userZip="",e.gearResults=[],e.friendResults=[],d(),e.searchGear=function(){e.gearResults=[],e.friendResults=[],b.searchGear(e.searchQuery).success(function(a){console.log("success finding relevant gear"),e.gearResults=a}).error(function(){console.log("error finding relevant gear")})},e.searchFriends=function(){e.gearResults=[],e.friendResults=[],b.searchFriends(e.userZip,e.searchQuery).success(function(a){console.log("success finding relevant meetups"),a.forEach(function(a){a.group_photo||(a.group_photo={},a.group_photo.photo_link="images/ogre1.3190848a.png")}),e.friendResults=a}).error(function(){console.log("error finding relevant meetups")})}};a.$inject=["appSettings","searchFactory","createNewGearFactory"],angular.module("ogreApp").controller("mainController",a)}(),function(){var a=function(a,b){function c(){a.getMyGear().success(function(a){console.log("success getting my gear"),console.log(a),d.myGear=a}).error(function(a,b,c,d){console.log("Error getting my gear from the remote api")})}var d=this;d.appSettings=b,d.myGear=[],d.noGear=function(){return d.myGear.length>=1},c()};a.$inject=["myGearFactory","appSettings"],angular.module("ogreApp").controller("myGearController",a)}(),function(){var a=function(a,b,c,d){function e(){a.getMyRentals().success(function(a){console.log("success getting my rentals"),console.log(a),f.myRentals=a}).error(function(a,b,c,d){console.log("Error getting my gear from the remote api")})}var f=this;f.appSettings=b,f.myRentals=[],f.showDeleteToast=function(){Materialize.toast("Rental Deleted",2e3)},f.noRentals=function(){return f.myRentals.length>=1},e(),f.rentalStatusApproved=function(a){return"approved"===a},f.deleteMyRental=function(b,c){a.deleteMyRental(b).success(function(){console.log("success deleting rental"),f.myRentals.splice(c,1),f.showDeleteToast()}).error(function(){console.log("error deleting gear item")})}};a.$inject=["myRentalsFactory","appSettings","$location","$route"],angular.module("ogreApp").controller("myRentalsController",a)}(),function(){var a=function(a,b,c,d,e,f,g){function h(){b.getMyGearItem(i).success(function(a){j.myGearItem=a,console.log("success getting this gears rentals from remote api")}).error(function(a,b,c,d){console.log("Error getting a this gear's rentals from the remote api")})}var i=a.gear_id,j=this;j.appSettings=c,j.myGearItem={},j.showStatusToast=function(a){"success"===a?Materialize.toast("Status Updated!",2e3):Materialize.toast("Error updating status",2e3)},j.showEditGearToast=function(a){"success"===a?Materialize.toast("Gear Updated!",2e3):Materialize.toast("Error Updating Gear",2e3)},j.noRentals=function(){return j.myGearItem.rentals.length>=1},h(),this.otherStatusOption=function(a){return"pending"===a?"approved":"approved"===a?"pending":void 0},j.editMyGearItem=function(){var a=j.myGearItem.image;b.editMyGearItem(a,i,j.myGearItem).success(function(){console.log("success updating item"),j.showEditGearToast("success"),g.reload()}).error(function(a,b,c,d){console.log("error updating item"),j.showEditGearToast("error")})},j.deleteMyGearItem=function(){b.deleteMyGearItem(i).success(function(){console.log("success deleting gear item"),f.path("/mygear")}).error(function(){console.log("error deleting gear item")})},j.editMyGearRental=function(a,b){e.editMyGearRental(i,b,a).success(function(){console.log("success updating rental on my product"),j.showStatusToast("success")}).error(function(){console.log("error updating rental on my product, but you were so close"),j.showStatusToast("error")})},j.categoryOptions=d.gearCategories};a.$inject=["$routeParams","myGearFactory","appSettings","createNewGearFactory","myGearRentalFactory","$location","$route"],angular.module("ogreApp").controller("myGearRentalsController",a)}(),function(){var a=function(a,b,c,d){var e=this;e.appSettings=b,e.newGearItem={},e.newGearItem.title="",e.newGearItem.description="",e.newGearItem.daily_cost="",e.newGearItem.category="default",e.imageMessage=function(){return!e.newGearItem.image},e.createGearToast=function(){Materialize.toast("Gear being created, you will be redirected back to your gear page.",3e3)},e.createNewGear=function(){var b=e.newGearItem.image;a.createNewGear(b,e.newGearItem).success(function(){console.log("successfully create new gear item!"),c.path("/mygear")}).error(function(a,b,c,d){console.log("error creating new gear item: "+b)})},e.categoryOptions=a.gearCategories};a.$inject=["createNewGearFactory","appSettings","$location","Upload"],angular.module("ogreApp").controller("createNewGearController",a)}(),function(){var a=function(a,b,c,d,e,f){function g(){b.getGearItem(h).success(function(a){i.gearItem=a,console.log("success getting this gear and its rentals from remote api")}).error(function(a,b,c,d){console.log("Error getting a this gear and its rentals from the remote api")})}var h=a.gear_id,i=this;i.appSettings=c,i.newRental={},i.newRental.status="pending",i.gearItem={},i.showRentalSave=function(){Materialize.toast("Rental Submitted!",2e3)},i.noRentals=function(){return console.log(i.gearItem.rentals),i.gearItem.rentals.length>=1},g(),i.totalCost=function(a,b){var c=Date.parse(a),d=Date.parse(b),e=Math.floor(d-c)/864e5,f=e*i.gearItem.daily_cost;return i.newRental.total_cost=f.toString(),f},i.createRental=function(){e.createRental(h,{rental:i.newRental}).success(function(){console.log("success adding new gear"),f.reload()}).error(function(a,b,c,d){console.log("Error creating new gear item")})}};a.$inject=["$routeParams","allGearFactory","appSettings","$location","myRentalsFactory","$route"],angular.module("ogreApp").controller("viewGearController",a)}(),angular.module("ogreApp").run(["$templateCache",function(a){a.put("views/createnewgear.html",'<header ng-include="src=\'views/navbar-user.html\'"></header> <!-- page container --> <div class="container"> <div class="row"> <div class="col s12 m10 offset-m1"> <h2>Create New Gear</h2> <form name="newGearFormNg"> <div class="row"> <!-- Title --> <div class="input-field col s6"> <input id="title" type="text" name="title" class="validate" ng-model="createNewGearCtrl.newGearItem.title"> <label for="title">Title</label> </div> <!-- Daily Cost --> <div class="input-field col s3"> <i class="material-icons prefix tiny">attach_money</i> <input id="daily_cost" type="text" name="daily_cost" ng-model="createNewGearCtrl.newGearItem.daily_cost" ng-pattern="/^[1-9]\\d*(?:\\.\\d{0,2})?$/"> <label for="daily_cost">Daily Cost</label> <div ng-show="newGearFormNg.daily_cost.$invalid"> You must enter a valid price. </div> </div> <!-- Category --> <div class="input-field col s3"> <select class="browser-default" material-select ng-model="createNewGearCtrl.newGearItem.category" ng-options="obj.id as obj.name group by obj.type for obj in createNewGearCtrl.categoryOptions"> <option value="default" disabled selected>Select a Category</option> </select> </div> </div> <div class="row"> <!-- Description --> <div class="input-field col s6"> <textarea id="description" name="description" class="materialize-textarea" ng-model="createNewGearCtrl.newGearItem.description"></textarea> <label for="description">Description</label> </div> <!-- Image Upload --> <div class="col s6"> <div class="form-group"> <label>Gear Photo</label> <input type="file" accept="image/*" ng-file-select ngf-select="true" ng-model="createNewGearCtrl.newGearItem.image"> </div> <div ng-show="createNewGearCtrl.imageMessage()"> You must upload a photo of your item. </div> </div> </div> </form> <div class="row"> <a id="" class="btn-large waves-effect waves-light orange" ng-click="createNewGearCtrl.createNewGear(); createNewGearCtrl.createGearToast();">Submit</a> </div> </div> </div> </div>'),a.put("views/login.html",'<header ng-include="src=\'views/navbar-welcome.html\'"></header> <div class="container"> <div class="row"> <div class="col s12"> <h2>Login</h2> <form name="loginFormNg"> <div class="row"> <div class="input-field col s6"> <input id="email" type="email" name="email" class="validate" ng-maxlength="20" ng-model="loginCtrl.loginForm.email"> <label for="email">Email</label> <div ng-show="loginFormNg.email.$invalid"> You must enter a valid email address. </div> </div> </div> <div class="row"> <div class="input-field col s6"> <input id="password" type="password" class="validate" ng-model="loginCtrl.loginForm.password"> <label for="password">Password</label> </div> </div> </form> </div> </div> <div class="row"> <a id="" class="btn-large waves-effect waves-light orange" ng-click="loginCtrl.authenticateUser()">Submit</a> </div> </div>'),a.put("views/main.html",'<header ng-include="src=\'views/navbar-user.html\'"></header> <div class="container main-page"> <div class="row"> <div class="col s12"> <img id="main-page-ogre" src="images/ogre1.3190848a.png" alt=""> </div> </div> <div class="row"> <div class="col s12"> <h2>Find Gear, Find Friends, Get Outside</h2> </div> </div> <div class="row"> <div class="col s12 m10 offset-m1"> <div class="input-field"> <input id="search" type="search" name="search" id="search" ng-model="mainCtrl.searchQuery" ng-minlength="1" ng-maxlength="30" class="validate"> <label for="search">This is where the expedition begins...</label> </div> <a class="waves-effect waves-light btn-large orange darken-1" ng-click="mainCtrl.searchGear()">Search Gear</a> <a class="waves-effect waves-light btn-large orange darken-1" ng-click="mainCtrl.searchFriends()">Search Friends</a> <p>Friend Search is powered by <a href="http://meetup.com" target="_blank">meetup</a>.</p> </div> </div> <!-- Results Row --> <div class="row"> <!-- Gear Results --> <div class="col s12 m6" ng-repeat="gear in mainCtrl.gearResults | orderBy: gear.title"> <div class="card medium"> <div class="card-image"> <img src="{{gear.image_src}}"> <span class="card-title" id="gear-title">{{gear.title}}</span> </div> <div class="card-content"> <p>{{gear.description}}</p> <p>{{gear.daily_cost | currency}}/day | {{gear.owner_city}}, {{gear.owner_state}}</p> </div> <div class="card-action"> <a href="#/viewgear/{{gear.id}}">View Gear</a> </div> </div> </div> <!-- Friend Results --> <div class="col s12 m6" ng-repeat="group in mainCtrl.friendResults | orderBy: group.name"> <div class="card medium"> <div class="card-image"> <img src="{{group.group_photo.photo_link}}"> <span class="card-title" id="group-name">{{group.name}}</span> </div> <div class="card-content"> <p><strong>{{group.name}}</strong><br> {{group.city}}, {{group.state}} | {{group.members}} members </p></div> <div class="card-action"> <a href="{{group.link}}" target="_blank">View Group</a> </div> </div> </div> </div> <!--/Results Row --> </div> <!--/container -->'),a.put("views/mygear.html",'<header ng-include="src=\'views/navbar-user.html\'"></header> <!-- page container --> <div class="container"> <div class="row"> <div class="col s12 m10 offset-m1"> <h2>My Gear</h2> <a id="create-new-gear-btn" class="btn waves-effect waves-light orange" href="#/createnewgear">Add New Gear</a> <ul class="collection"> <!-- gear collection-item repeat --> <a ng-repeat="gear in myGearCtrl.myGear" href="#/mygearrentals/{{gear.id}}"> <li class="collection-item avatar"> <img src="{{gear.image_src}}" alt="" class="circle"> <span class="title" id="{{gear.id}}">{{gear.title}}</span> <p>{{gear.description}} <br> {{gear.daily_cost | currency}} / day </p> </li> </a> <li class="collection-item" ng-show="!myGearCtrl.noGear()"> <h5>You don\'t have any gear listed.</h5> </li> </ul> </div> </div> </div>'),a.put("views/mygearrentals.html",'<header ng-include="src=\'views/navbar-user.html\'"></header> <div class="container"> <!-- page container --> <!-- product panel --> <div class="row" id="my-gear-rentals-panel"> <div class="col s12 m10 offset-m1"> <div class="card-panel grey lighten-5 z-depth-1"> <div class="row valign-wrapper"> <!-- edit icon --> <div class="col s2"> <div id="edit-product" ng-click="showEditForm = !showEditForm"> <i class="material-icons medium">mode_edit</i> </div> </div> <!-- product image --> <div class="col s4"> <img src="{{myGearRentalsCtrl.myGearItem.image_src}}" alt="" class="responsive-img"> </div> <!-- product title and description --> <div class="col s6"> <span class="black-text"> <h3>{{myGearRentalsCtrl.myGearItem.title}}</h3> <h6>{{myGearRentalsCtrl.myGearItem.description}}</h6> <p>{{myGearRentalsCtrl.myGearItem.daily_cost | currency }} / day</p> <p>{{myGearRentalsCtrl.myGearItem.category}}</p> </span> </div> </div> </div> </div> </div> <!-- Edit Item Form --> <div class="row" ng-show="showEditForm"> <div class="card-panel grey lighten-5 z-depth-1"> <div class="row valign-wrapper"> <div class="col s12 m10 offset-m1"> <h4>Edit Item</h4> <form name="newGearFormNg"> <div class="row"> <!-- Title --> <div class="input-field col s6"> <input id="title" type="text" name="title" class="validate" ng-model="myGearRentalsCtrl.myGearItem.title"> <label for="title" class="active">Title</label> </div> <!-- Daily Cost --> <div class="input-field col s3"> <i class="material-icons prefix tiny">attach_money</i> <input id="daily_cost" type="text" name="daily_cost" ng-model="myGearRentalsCtrl.myGearItem.daily_cost" ng-pattern="/^[1-9]\\d*(?:\\.\\d{0,2})?$/"> <label for="daily_cost" class="active">Daily Cost</label> <div ng-show="newGearFormNg.daily_cost.$invalid"> You must enter a valid price. </div> </div> <!-- Category --> <div class="input-field col s3"> <select id="daily_cost" class="browser-default" material-select ng-model="myGearRentalsCtrl.myGearItem.category" ng-options="obj.id as obj.name group by obj.type for obj in myGearRentalsCtrl.categoryOptions"> </select> <label for="daily_cost" class="active">Category</label> </div> </div> <div class="row"> <!-- Description --> <div class="input-field col s6"> <textarea id="description" name="description" class="materialize-textarea" ng-model="myGearRentalsCtrl.myGearItem.description"></textarea> <label for="description" class="active">Description</label> </div> <!-- Image Upload --> <div class="col s6"> <div class="form-group"> <label>Update Gear Photo</label> <input type="file" accept="image/*" ng-file-select ngf-select="true" ng-model="myGearRentalsCtrl.myGearItem.image"> </div> </div> </div> </form> <a class="waves-effect waves-light btn btn-small orange" ng-click="showEditForm = !showEditForm; myGearRentalsCtrl.editMyGearItem()">Save Changes</a> <a class="waves-effect waves-light btn btn-small red" ng-click="myGearRentalsCtrl.deleteMyGearItem()">Delete Item</a> </div> </div> </div> </div> <!-- /Edit Item Form --> <!-- collection of products\' rentals --> <div class="row"> <div class="col s12 m10 offset-m1"> <h4>Rentals</h4> <ul class="collection"> <!-- rental collection item repeat --> <li class="collection-item" ng-repeat="rental in myGearRentalsCtrl.myGearItem.rentals"> <div class="row"> <!-- rental information --> <div class="col s8"> <span class="title" id="{{rental.id}}"><strong>Renter:</strong> {{ rental.renter_name }}</span> <p><strong>From:</strong> {{ rental.start_date | date }} <br><strong>To:</strong> {{ rental.end_date | date }}<br> <strong>Total Cost:</strong> {{ rental.total_cost | currency }} </p> <p><strong>Status:</strong> {{rental.status}}</p> <p><strong>Message from Renter:</strong> {{rental.message}}</p> </div> <!-- rental status update --> <div class="col s4"> <h6><strong>Update Rental Status</strong></h6> <div class="input-field" ng-click="myGearRentalsCtrl.showSavedMessage = false"> <select class="browser-default" material-select ng-model="rental.status"> <option>{{rental.status}}</option> <option>{{myGearRentalsCtrl.otherStatusOption(rental.status)}}</option> </select> </div> <a class="waves-effect waves-light btn btn-small" ng-click="myGearRentalsCtrl.editMyGearRental({status: rental.status}, rental.id)">Save</a> </div> </div> </li> <!-- /rental collection item repeat --> <li class="collection-item" ng-show="!myGearRentalsCtrl.noRentals()"> <h5>No rentals on this gear.</h5> </li> </ul> </div> </div> </div>'),a.put("views/myrentals.html",'<header ng-include="src=\'views/navbar-user.html\'"></header> <!-- page container --> <div class="container"> <div class="row"> <div class="col s12 m10 offset-m1"> <h2>My Rentals</h2> <ul class="collection"> <!-- rental collection item repeat --> <li class="collection-item" ng-repeat="rental in myRentalsCtrl.myRentals"> <div class="row"> <!-- rental information --> <div class="col s8"> <span class="title" id="{{rental.id}}"><strong>Gear:</strong> {{ rental.product_name }}</span> <p><strong>From:</strong> {{ rental.start_date | date }} <br><strong>To:</strong> {{ rental.end_date | date }}<br> <strong>Total Cost:</strong> {{ rental.total_cost | currency }} </p> <p><strong>Status:</strong> {{rental.status}}</p> <p><strong>Message from You:</strong> {{rental.message}}</p> <a id="" class="btn waves-effect waves-light orange" href="#/viewgear/{{rental.product_id}}">View Gear</a> <a id="" class="btn waves-effect waves-light red" ng-click="myRentalsCtrl.deleteMyRental(rental.id, $index)">Delete Rental</a> </div> <!-- /col --> <!-- owner information for contact --> <div class="col s4"> <!-- rental approved by owner --> <div ng-show="myRentalsCtrl.rentalStatusApproved(rental.status)"> <h6><strong>{{rental.owner_name}} has approved this rental!</strong></h6> <p>Click below to send {{rental.owner_name}} an email to coordinate pick-up:</p> <a href="mailto:{{rental.owner_email}}?subject={{rental.product_name}}&body=Hi {{rental.owner_name}}, Thanks for approving my rental! When would be best for us to meet? -{{rental.renter_name}}"><i class="material-icons small">email</i></a> </div> <!-- rental still pending --> <div ng-show="!myRentalsCtrl.rentalStatusApproved(rental.status)"> <h6><strong>{{rental.owner_name}} has not yet approved this rental.</strong></h6> <p>Check back soon to see if it has been approved.</p> </div> </div><!-- /col --> </div><!-- /row --> </li> <!-- /rental collection item repeat --> <li class="collection-item" ng-show="!myRentalsCtrl.noRentals()"> <h5>You don\'t have any rentals. Search for rentals <a href="#/main">here</a>.</h5> </li> </ul> <!-- /collection --> </div> </div> </div>'),a.put("views/navbar-user.html",'<div class="navbar-fixed"> <nav> <div class="nav-wrapper orange darken-1"> <a href="#/main" class="brand-logo left" id="brand-logo">OGRE Buddies</a> <ul class="right hide-on-small-and-down"> <li><a href="#/mygear">My Gear</a></li> <li><a href="#/myrentals">My Rentals</a></li> <li><a href="#/main">Search</a></li> </ul> </div> </nav> </div>'),a.put("views/navbar-welcome.html",'<div class="navbar-fixed"> <nav> <div class="nav-wrapper orange"> <a href="#/" class="brand-logo left" id="brand-logo">OGRE Buddies</a> <ul class="right hide-on-small-and-down"> <li><a href="#/login">Login</a></li> <li><a href="#/register">Register</a></li> </ul> </div> </nav> </div>'),a.put("views/register.html",'<header ng-include="src=\'views/navbar-welcome.html\'"></header> <div class="container"> <div class="row"> <div class="col s12"> <h2>Register</h2> <form name="regFormNg"> <!-- First and Last Names --> <div class="row"> <div class="input-field col s6"> <input id="first_name" type="text" name="first_name" class="validate" ng-model="regCtrl.regForm.first_name"> <label for="first_name">First Name</label> </div> <div class="input-field col s6"> <input id="last_name" type="text" name="last_name" class="validate" ng-model="regCtrl.regForm.last_name"> <label for="last_name">Last Name</label> </div> </div> <!-- City, State, Zip --> <div class="row"> <div class="input-field col s4"> <input id="city" type="text" class="validate" ng-model="regCtrl.regForm.city"> <label for="city">City</label> </div> <div class="input-field col s4"> <select class="browser-default" material-select ng-model="regCtrl.regForm.state"> <option value="" disabled selected>State</option> <option ng-repeat="state in regCtrl.stateOptions">{{state}}</option> </select> </div> <div class="input-field col s4"> <input id="zip" type="text" name="zip" class="validate" ng-model="regCtrl.regForm.zip" ng-minlength="5" ng-maxlength="5" ng-pattern="/^\\d{1,6}$/"> <label for="zip">Zip Code</label> <div ng-show="regFormNg.zip.$invalid"> You must enter a valid zip code. </div> </div> </div> <!-- Email --> <div class="row"> <div class="input-field col s6"> <input id="email" type="email" name="email" class="validate" ng-maxlength="20" ng-model="regCtrl.regForm.email"> <label for="email">Email</label> <div ng-show="regFormNg.email.$invalid"> You must enter a valid email address. </div> </div> </div> <!-- Password --> <div class="row"> <div class="input-field col s6"> <input id="password" type="password" class="validate" ng-model="regCtrl.regForm.password"> <label for="password">Password</label> </div> </div> <!-- Confirm Password --> <div class="row"> <div class="input-field col s6"> <input id="confirmPassword" type="password" name="confirmPassword" class="validate" ng-model="regCtrl.confirmPassword" required> <label for="confirmPassword">Please confirm your password.</label> </div> </div> <!--  Password Match Message--> <div ng-show="!regCtrl.passwordVerify()"> Passwords must match </div> </form> <div class="row"> <a id="" class="btn-large waves-effect waves-light orange" ng-click="regCtrl.createUser()">Submit</a> </div> </div> </div> </div>'),a.put("views/viewgear.html",'<header ng-include="src=\'views/navbar-user.html\'"></header> <div class="container"> <!-- page container --> <!-- product panel --> <div class="row"> <div class="col s12 m8 offset-m2 l6 offset-l3"> <div class="card"> <div class="card-image"> <img src="{{viewGearCtrl.gearItem.image_src}}"> <span class="card-title" id="gear-title">{{viewGearCtrl.gearItem.title}}</span> </div> <div class="card-content"> <p><strong>Description:</strong> {{viewGearCtrl.gearItem.description}}</p> <p><strong>Cost:</strong> {{viewGearCtrl.gearItem.daily_cost | currency}}/day</p> <p><strong>Owner:</strong> {{viewGearCtrl.gearItem.owner_name}} | {{viewGearCtrl.gearItem.owner_city}}, {{viewGearCtrl.gearItem.owner_state}}</p> </div> <div class="card-action"> <a ng-click="showRentalForm = !showRentalForm">Rent This Gear</a> </div> </div> </div> </div> <!-- Rental Request Form --> <div class="row" ng-show="showRentalForm" id="rental-form"> <div class="card-panel grey lighten-5 z-depth-1"> <div class="row valign-wrapper"> <div class="col s12 m10 offset-m1"> <h4>Rental Form</h4> <form name="newGearFormNg"> <!-- Rental Form Row 1 --> <div class="row"> <!-- Start Date --> <div class="input-field col s4"> <input id="start_date" type="date" name="start_date" class="validate datepicker" ng-model="viewGearCtrl.newRental.start_date"> <label for="start_date" class="active">Start Date</label> </div> <!-- End Date --> <div class="input-field col s4"> <input id="end_date" type="date" name="end_date" class="validate" ng-model="viewGearCtrl.newRental.end_date"> <label for="end_date" class="active">End Date</label> </div> <!-- Total Cost --> <div class="input-field col s4"> <p>{{viewGearCtrl.totalCost(viewGearCtrl.newRental.start_date, viewGearCtrl.newRental.end_date) | currency }}</p> <label for="total_cost" class="active">Total Cost</label> <div ng-show="newGearFormNg.total_cost.$invalid"> You must enter a valid price. </div> </div> </div> <div class="row"> <!-- Message --> <div class="input-field col s12"> <textarea id="message" name="message" class="materialize-textarea" ng-model="viewGearCtrl.newRental.message"></textarea> <label for="message" class="active">Send {{viewGearCtrl.gearItem.owner_name}} a Message:</label> </div> </div> </form> <a class="waves-effect waves-light btn btn-small" ng-click="viewGearCtrl.createRental(); viewGearCtrl.showRentalSave();">Submit</a> <a class="waves-effect waves-light btn btn-small red" ng-click="showRentalForm = !showRentalForm">Cancel</a> </div> </div> </div> </div> <!-- /Rental Request Form --> <!-- collection of products\' rentals --> <div class="row"> <div class="col s12 m10 offset-m1"> <h4>Current Rentals on this Product</h4> <ul class="collection"> <!-- rental collection item repeat --> <li class="collection-item" ng-repeat="rental in viewGearCtrl.gearItem.rentals"> <p>Renter: {{ rental.renter_first_name }}</p> <strong>From:</strong> {{ rental.start_date | date }} <br> <strong>To:</strong> {{ rental.end_date | date }} </li> <!-- /rental collection item repeat --> <li class="collection-item" ng-show="!viewGearCtrl.noRentals()"> <h5>No rentals on this gear.</h5> </li> </ul> </div> <!-- /column in product rentals row --> </div> <!-- /product rentals row --> </div> <!--/page container -->'),
a.put("views/welcome.html",'<header ng-include="src=\'views/navbar-welcome.html\'"></header> <div class="section no-pad-bot" id="index-banner"> <div class="container"> <h1 class="header center orange-text">OGRE Buddies</h1> <div class="row center" id="welcome-page-banner"> <div class="col s12"> <img id="main-page-ogre" src="images/ogre1.3190848a.png" alt=""> </div> </div> <div class="row center"> <h4 class="header col s12 light"><strong>O</strong>utdoor <strong>G</strong>ear <strong>RE</strong>ntal</h4> <h5 class="header col s12 light">Enjoy the outdoors with friends</h5> </div> <div class="row center"> <a href="#/register" class="btn-large waves-effect waves-light orange">Get Started</a> </div> <br><br> </div> </div> <div class="container"> <div class="section"> <!--   Icon Section   --> <div class="row"> <div class="col s12 m4"> <div class="icon-block"> <h2 class="center light-blue-text"><i class="material-icons large">person</i></h2> <h5 class="center">Login or Register to Start OGREing</h5> <p class="light center">Sign Up with your email, and put in your town, state, and zip.</p> </div> </div> <div class="col s12 m4"> <div class="icon-block"> <h2 class="center light-blue-text"><i class="material-icons large">search</i></h2> <h5 class="center">Find an OGRE or list your own OGRE</h5> <p class="light center">We\'re not talking big filthy monsters, we mean <strong>O</strong>utdoor <strong>G</strong>ear <strong>RE</strong>ntals.</p> </div> </div> <div class="col s12 m4"> <div class="icon-block"> <h2 class="center light-blue-text"><i class="material-icons large">terrain</i></h2> <h5 class="center">Find an OGRE buddy and get outside!</h5> <p class="light center">OGRE Buddies allows you to search for meetups relevant to gear your renting, so what are you waiting for?!.</p> </div> </div> </div> </div> <br><br> <div class="section"> </div> </div>')}]);