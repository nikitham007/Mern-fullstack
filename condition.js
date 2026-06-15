console.log("CONDITIONAL STATE")
var light="green"
 if(light == "red")
 { 
    console.log("stop")
}

else if(light=="white")
{
     console.log("ready")
}
else if (light=="green"){
     console.log("go")
}
else{
     console.log("invalid light colour")
}
 console.log("outside if")

//switch
console.log("SWITCH STATEMENT")
var signal = "white"
switch(signal)
{
     case"green":
     console.log("go!");
     break;

     case"yellow":
     console.log("wait");
     break;

     case"red":
     console.log("stop..");
     break;

     default:
          console.log("invalid signal..");
          break;
}

