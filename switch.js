// var public;
// var private;
// var protected;
var access = "public";
var level;

switch(access){
    case "public":
        if(level < 5){
            console.log("Public dibawah 5");
        }else if (level > 5){
            console.log("Public diatas 5");
        }else if  (level == 5){
            console.log("Public Five");
        }else {
            console.log("Akses is not defined");
        }
        break;
    case private  :
        if(level < 5){
            console.log("Private dibawah 5");
        }else if (level > 5){
            console.log("Private diatas 5");
        }else if  (level == 5){
            console.log("Private Five");
        }else {
            console.log("Akses is not defined");
        }
        break;
    case protected :
        if(level < 5){
            console.log("Protected dibawah 5");
        }else if (level > 5){
            console.log("Protected diatas 5");
        }else if  (level == 5){
            console.log("Protected Five");
        }else {
            console.log("Akses is not defined");
        }
        break;
    default :
        console.log("Input access");
        break;
    }