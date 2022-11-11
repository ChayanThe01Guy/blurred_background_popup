const containerEl = document.querySelector(".container");
const joinBtnEl = containerEl.querySelector(".joinBtn");

const popupContainerEl = document.querySelector(".popup_container");
const inputEl = popupContainerEl.querySelector(".input");
const popupBtnEl = popupContainerEl.querySelector(".popup_btn");
const crossIconEl = popupContainerEl.querySelector(".cross_icon");


joinBtnEl.addEventListener("click", () => {
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("hidden");
});

crossIconEl.addEventListener("click", () => {
    popupContainerEl.classList.add("hidden");
    containerEl.classList.remove("active");
});