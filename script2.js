(function (window){
    var SayHello = {};
    var greeting= "Hello";
    
    SayHello.speak = function (names) {
      console.log(greeting+ " " + names);
    }
     
     window.SayHello = SayHello;
    })(window);
