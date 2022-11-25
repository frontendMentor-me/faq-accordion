let accordion = document.getElementsByClassName("accordion")
Array.prototype.forEach.call(accordion, function (e) {
    e.addEventListener("click", () => {
        if (e.classList.contains("open")) {
            e.classList.remove("open")
        } else {
            e.classList.add("open")
        }
    })
})