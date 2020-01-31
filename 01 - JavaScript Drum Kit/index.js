//getting all the class keys into an array
const keys = Array.from(document.querySelectorAll(".key"))

// iterate through the keys & for each key, add an event listener
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener("keypress", playSound)

function playSound(event){
    let sound = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    let divKey = document.querySelector(`div[data-key="${event.keyCode}"]`)

    sound.currentTime = 0
    sound.play()
    divKey.classList.add("playing")
    //debugger
    //setTimeout(event =>  divKey.classList.remove("playing"), 500)
}

//not original solution below, followed along with video for this

function removeTransition(event){
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
}