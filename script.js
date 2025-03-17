document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("notifyBtn").addEventListener("click", function () {
        let video = document.getElementById("myVideo");

        // Show the video
        video.style.display = "block";

        // Play the video
        video.play();

        // Change button text to 🤡
        this.innerHTML = "🤡 Playing...";
    });
});
