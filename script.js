function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return; // if no audio element selected get out of function
    audio.currentTime = 0; // we play from beginning of audio clip
    audio.play();
    key.setAttribute("class","key playing");
}
function removeTransition(e){
        if(e.propertyName !== "transform") return;
        this.classList.remove("playing");
}
 
//transition end fires after a certain number of seconds whose value is given in the transition property in stylesheet file
window.addEventListener('keydown',playSound);
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend",removeTransition));



