window.addEventListener("keydown", e => {
    const keyCode = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

    if(!audio) return;

    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    key.classList.add("playing");

    audio.currentTime = 0;
    audio.play()
})

function removeTransition(e){
    if(e.propertyName !== "transform") return;

    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition)
})