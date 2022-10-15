
const reveal = document.querySelector(".reveal");
const message = document.querySelector(".message");

function ShowHide() {
    if(message.classList.contains("show")) {
        message.classList.remove("show");
    }else {
        message.classList.add("show");
    }
}

reveal.addEventListener("click", ShowHide)









































