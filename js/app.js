

// Hamburger menu stuff

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigator-design")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

})

// Menu item interactions on portfolio pick

const photography_button = document.querySelector("#port-photography")
const videography_button = document.querySelector("#port-video")
const design_button = document.querySelector("#port-web")
const art_button = document.querySelector("#port-art")

const photo_folder = document.querySelector("#photography-folder")
const video_folder = document.querySelector("#video-folder")
const design_folder = document.querySelector("#web-folder")
const art_folder = document.querySelector("#art-folder")


photography_button.addEventListener("click", () => {
  photo_folder.classList.remove("hidden")
  video_folder.classList.add("hidden")
  design_folder.classList.add("hidden")
  art_folder.classList.add("hidden")
})
videography_button.addEventListener("click", () => {
  video_folder.classList.remove("hidden")
  photo_folder.classList.add("hidden")
  design_folder.classList.add("hidden")
  art_folder.classList.add("hidden")
})
design_button.addEventListener("click", () => {
  design_folder.classList.remove("hidden")
  photo_folder.classList.add("hidden")
  video_folder.classList.add("hidden")
  art_folder.classList.add("hidden")
})
art_button.addEventListener("click", () => {
  art_folder.classList.remove("hidden")
  photo_folder.classList.add("hidden")
  video_folder.classList.add("hidden")
  design_folder.classList.add("hidden")
})


// On document read make preparations
addEventListener("DOMContentLoaded", () => {
  design_folder.classList.remove("hidden");
})

