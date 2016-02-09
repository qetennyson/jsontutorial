"use strict";angular.module("jsontutorialApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("jsontutorialApp").controller("MainCtrl",["$http","$scope",function(a,b){var c=this;c.tutorials=[],a.get("http://qetennyson.github.io/jsontutorial/#//tutorials.json").then(function(a){b.myData=a.data.tutorials})}]),angular.module("jsontutorialApp").controller("AboutCtrl",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()}}]),angular.module("jsontutorialApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="container" ng-controller="AboutCtrl"> <h1>About Angular, This Site, and Historical Facts</h1> <blockquote> <p>"Angular literally ended World War II."</p> <footer>Scientists</footer> </blockquote> <br> <h3>But Seriously</h3> <p> So maybe it didn\'t World War II, but over the last couple of weeks I have discovered Angular for the first time, and man it is fantastic! I want to tell you more about it, but let\'s make sure you know a few things, at least at a <i>basic</i> level. Because let\'s be honest, I\'m as basic as it gets.</p> <br> <h3>So, Do You Know?</h3> <ul class="list-group" id="prereqs" style="width:50%"> <li class="list-group-item">HTML/CSS</li> <li class="list-group-item">JavaScript/JQuery</li> <li class="list-group-item">JSON</li> </ul> <p>If you were able to check all of those items off, or are feeling especially daring, read on. If you don\'t know what those things are, go figure it out! Otherwise this will all be gobbledygook, or as my wife would say "nerd shit"</p> <br> <h3>How It\'s Made</h3> <p>Let\'s breakdown how this site was made so that you can have a greater understanding of how it all comes together in the end.</p> <h4>A Quick Note about Yeoman</h4> <p> As Web Architecture students, we went into all this knowing very little. Prior to this class I could probably stumble through basic HTML/CSS, but didn\'t even know what Bootstrap was!</p> <p>Four weeks later, enter <a href="http://www.yeoman.io">Yeoman</a>. I won\'t get into it too much, because to achieve the functionality we\'ll be talking about here, you don\'t really need Yeoman...it just makes things an order of magnitude easier, and more organized. Check it out once you can navigate those earlier requirements on an elementary level.</p> <h3>The Framework of Great Success</h3> <p>In order to achieve this well-known look and feel that you\'re experiencing on the site, we begin with a framework of HTML/CSS using <a href="http://www.getbootstrap.com">Bootstrap</a>. Look and feel is all well and good - in fact it\'s my favorite thing - but the site has to do something. That requires logic, and that\'s where JavaScript, and its buddies Angular and JSON come in.</p> <h4>What\'s JSON?</h4> <p>JSON, or JavaScript Object Notation, is a data-interchange format. Basically, it\'s human readable text that we\'re going to draw some kind of data from. That\'s how I\'d explain it based solely on my knowledge, and given that you, dear reader, probably know as much as me about this stuff, we\'ll keep it that way. Obviously, it\'s probably got myriad capabilities, but no need to get into all that mumbo-jumbo if we\'re just learning for the first time.</p><p> <h4>Here\'s some JSON</h4> <br> <div class="codecontainer"> <pre>\n        <code>	\n{\n    "tutorials":[\n        {\n            "url": "https://www.youtube.com/watch?v=tnXO-i7944M",\n            "title": "AngularJS in 20ish Minutes ",\n            "image": "http://blog.guinatal.com/wp-content/uploads/2015/01/angularjs.png",\n            "author": "Dan Wahlin",\n            "description": "AngularJS in 20 minutes!  What!  If you like videos, this is the Angular guide for you, folks."\n        }\n    ]\n}\n\n        </code>\n'+"        </pre> </div> </p><p>So that looks a little strange, because I don't have fancy code formatters for this site, but you can tell that's an array right? It's an array. A JSON file will hold any variety of objects we want to put into our site. In the case of our site, it's the list of Angular Tutorials we display on the main page.</p> </div>"),a.put("views/main.html",'<div class="jumbotron"> <h1>Find Your Inner Angular</h1> <p class="lead"> <img src="images/badge5.3253bba9.png" alt="I\'m Yeoman"><br> Search classes (using Angular, duh.) </p> <form class="form-inline"> <div class="form-group"> <input type="text" ng-model="search" class="form-control" placeholder="Search"> </div> </form> <det>brought to you by #gemStore industries</det> </div> <div class="container" ng-controller="MainCtrl" ng-repeat="tutorial in myData|filter:search"> <div class="panel panel-default"> <div class="panel-heading"> <h3>{{ tutorial.title }}</h3> </div> <div class="panel-body"> <div class="col-sm-4"> <figure class="figure pull-left"> <img class="img-thumbnail" src="{{ tutorial.image }}"> <figcaption class="figure-caption">{{ tutorial.author }}</figcaption> </figure></div> <div class="col-sm-8"> <p>{{tutorial.description}}</p> <a href="{{ tutorial.url }}" class="btn btn-primary" role="button"> Learn More Here! </a> </div> </div> </div></div>')}]);