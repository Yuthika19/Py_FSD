alert("JavaScript file connected!");

document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("startBtn");
    const message = document.getElementById("message");

    console.log("Button:", button);
    console.log("Message:", message);

    if (button && message) {

        button.addEventListener("click", function () {

            message.innerText =
                "Congratulations! Your Django website is working!";

            message.style.color = "green";
            message.style.fontSize = "22px";

        });

    } else {
        console.error("Button or message element not found!");
    }

});