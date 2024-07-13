const buttons = document.querySelectorAll(".dot");

const corosel = document.querySelector(".corousel");
console.log(corosel);

const colors = ["green", "red", "blue", "yellow"];

buttons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        buttons.forEach((otherBtns) => {
            otherBtns.classList.remove("active");
        });
        btn.classList.add("active");
        corosel.style.backgroundColor = colors[idx];
    });
});
