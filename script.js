window.onload = function () {
    let greeting = document.getElementById("greeting");
    let hour = new Date().getHours();

    if (hour < 12) {
        greeting.innerText = "Good Morning!";
    } else if (hour < 18) {
        greeting.innerText = "Good Afternoon!";
    } else {
        greeting.innerText = "Good Evening!";
    }
};
