document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("notifyBtn").addEventListener("click", function () {
        let sound = document.getElementById("notifySound");

        // Try to play the audio
        sound.play().then(() => {
            this.innerHTML = "🤡"; // Change button text
        }).catch(error => {
            console.log("Audio Play Error:", error);
        });
    });
});
