const imgUrl = [
  "./images/01.jpg",
  "./images/02.jpg",
  "./images/03.jpg",
  "./images/04.jpg",
  "./images/04.jpg",
]
let sliderIndex = 0

const sliderElement = document.querySelector(".slider")
const dotArea = document.querySelector(".dot")
const dotItem = document.querySelector(".dot_item")
const prevButton = document.querySelector(".button_arrow-prev")
const nextButton = document.querySelector(".button_arrow-next")

//slide imges
const slideWrapPercent = imgUrl.length * 100
sliderElement.style.width = `${slideWrapPercent}%`
for (const url of imgUrl) {
  const sliderListTag = document.createElement("li")
  const sliderImg = document.createElement("img")
  sliderImg.src = url
  sliderListTag.appendChild(sliderImg)
  sliderElement.appendChild(sliderListTag)
}

//dot element
for (let i = 0; i < imgUrl.length; i++) {
  const divTag = document.createElement("div")
  divTag.classList.add("dot_item")
  dotArea.appendChild(divTag)
}

//slider imageとdotの連携
const activeDot = () => {
  dotArea.children[sliderIndex].classList.add("dot_item-active")
}
activeDot()

//remmove active class
const removeActiveDot = () => {
  const dotActive = document.getElementsByClassName("dot_item-active")
  dotActive[0].classList.remove("dot_item-active")
}

//slider image position
const sliderImgPosition = () => {
  const val = sliderIndex * 100
  sliderElement.style.marginLeft = `-${val}%`
  removeActiveDot()
  activeDot()
}
sliderImgPosition()

//dot click event
dotArea.addEventListener("click", (e) => {
  const dotWrap = event.target.parentNode
  const dotItems = dotWrap.querySelectorAll(".dot_item")
  const dotItemIndex = Array.prototype.indexOf.call(dotItems, e.target)
  sliderIndex = dotItemIndex
  sliderImgPosition()
})

//slide button
prevButton.addEventListener("click", () => {
  sliderIndex === 0 ? (sliderIndex = imgUrl.length - 1) : (sliderIndex -= 1)
  sliderImgPosition()
})

nextButton.addEventListener("click", () => {
  sliderIndex < imgUrl.length - 1 ? (sliderIndex += 1) : (sliderIndex = 0)
  sliderImgPosition()
})
