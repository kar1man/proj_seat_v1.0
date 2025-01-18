// const UIopen = document.getElementById("openUI");
// const UIclose = document.getElementById("closeUI");
// const popupContent = document.getElementById("popup");


// UIopen.addEventListener("click", () => {
//     popupContent.classList.add("open");
// });

// UIclose.addEventListener("click", () => {
//     popupContent.classList.remove("open");
// });


document.addEventListener("click", (event) => {
    if (event.target.classList.contains("pop-toggle")) {
        const targetID = event.target.getAttribute("data-target");
        const popup = document.getElementById(targetID);
        popup.classList.add("open");
    }

    if (event.target.classList.contains("closeBtn")) {
        const popup = event.target.closest(".popup-content")
        popup.classList.remove("open");
    }

});