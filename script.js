document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("notifyBtn").addEventListener("click", function () {
        let sound = document.getElementById("notifySound");

        // Play the audio
        sound.play();

        // Change button text to 🤡
        this.innerHTML = "🤡";
    });
});
