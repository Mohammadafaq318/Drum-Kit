
for (var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handle_click);
    
}


function handle_click(){
    play_sound(this.innerHTML);
    button_animation(this.innerHTML);
}

function play_sound(char){
    if(char=="w"){
        var audio = new Audio('sounds/tom-1.mp3');
    }
    else if(char=="a"){
        var audio = new Audio('sounds/tom-2.mp3');
    }
    else if(char=="s"){
        var audio = new Audio('sounds/tom-3.mp3');
    }
    else if(char=="d"){
        var audio = new Audio('sounds/tom-4.mp3');
    }
    else if(char=="j"){
        var audio = new Audio('sounds/snare.mp3');
    }
    else if(char=="k"){
        var audio = new Audio('sounds/crash.mp3');
    }
    else if(char=="l"){
        var audio = new Audio('sounds/kick-bass.mp3');
    }
    audio.play();
}
document.addEventListener('keypress', (event) => {
    var name = event.key;
    button_animation(name);
    play_sound(name)
  }, false);


function button_animation(currentkey){
    document.querySelector("."+currentkey).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("."+currentkey).classList.remove("pressed");
    }, 1000);
}