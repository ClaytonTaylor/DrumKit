console.log("JS is Connected");

window.addEventListener('keydown', function(event){
    // console.log(event.keyCode);

    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    

    if (!audio) return; //Stopping the function

    audio.currentTime = 0; //Rewind to the start
    audio.play();
});
