(function (window){
    var sayGOODBYE = {};
    var greeting= "Good Bye";
    
    sayGOODBYE.speak = function (names) {
      console.log(greeting+ " " + names);
    }
     
     window.sayGOODBYE = sayGOODBYE;
    })(window);
