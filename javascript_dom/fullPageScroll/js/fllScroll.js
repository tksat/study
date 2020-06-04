//
const scllorY = window.pageYOffset
const sections = document.querySelectorAll(".section")
const dotButtonWrap = document.querySelector(".scrollDot ul")
const dotButton = document.querySelectorAll(".scrollDot")
const prevButton = document.querySelector(".prevButton")
const nextButton = document.querySelector(".nextButton")

let index = 0

//dotボタン
sections.forEach((i) => {
  const dotItem = document.createElement("li")
  dotItem.classList.add("dotButton")
  dotButtonWrap.appendChild(dotItem)
})

const dotItems = document.querySelectorAll(".dotButton")
const activeDot = (index) => {
  dotItems.forEach((dotItem, i) => {
    if (index === i) {
      dotItem.classList.add("dotButton-active")
    } else {
      dotItem.classList.remove("dotButton-active")
    }

    //dotボタンを押したらページ遷移
    dotItem.addEventListener("click", () => {
      index = i
      getSection(index)
    })
  })
}
activeDot(0)

//テキストアニメーション
const showText = (index, state) => {
  sections.forEach((section, i) => {
    if (index === i) {
      if (state === "show") {
        section.querySelector(".text").classList.add("show")
        activeDot(i)
      } else if (state === "hide") {
        section.querySelector(".text").classList.remove("show")
      }
    }
  })
}

showText(0, "show")

//ボタン押したら移動
const getSection = (index) => {
  sections.forEach((section, i) => {
    showText(i, "hide")
    if (i === index) {
      section.scrollIntoView({
        behavior: "smooth",
      })
      setTimeout(() => {
        showText(i, "show")
      }, 500)
    } else {
      setTimeout(() => {
        showText(i, "hide")
      }, 1000)
    }
  })
}

nextButton.addEventListener("click", (e) => {
  e.preventDefault()

  if (index < sections.length - 1) {
    index++
    getSection(index)
  } else if (index === sections.length - 1) {
    index = 0
    getSection(index)
  }
})

prevButton.addEventListener("click", (e) => {
  e.preventDefault()

  if (index === 0) {
    index = sections.length - 1
    getSection(index)
  } else {
    index--
    getSection(index)
  }
})

//スクロールした時のアニメーション
const animationDuration = 1000
let lastTime = 0

window.addEventListener("wheel", (e) => {
  const delta = e.wheelDelta
  const currentTime = new Date().getTime()

  if (currentTime - lastTime < animationDuration) {
    e.preventDefault()
    return
  }

  if (delta < 0) {
    const nextButonClick = new Event("click")
    nextButton.dispatchEvent(nextButonClick)
  } else {
    const prevButonClick = new Event("click")
    prevButton.dispatchEvent(prevButonClick)
  }
  lastTime = currentTime
})
