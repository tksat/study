const parallaxes = document.querySelectorAll(".parallax")

const calculateRangeValue = (oldMin, oldMax, newMin, newMax, oldValue) => {}

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY
  parallaxes.forEach((parallax) => {
    const windowH = window.innerHeight
    if (scrollTop + windowH / 2 > parallax.offsetTop) {
      const yPosition = 0
      const oldMin =
        parallax.offsetTop < windowH / 2
          ? parallax.offsetTop
          : parallax.offsetTop - windowH / 2
      const oldMax = oldMin + parallax.offsetHeight
      parallax.style.backgroundPosition = `center ${yPosition}px`
    }
  })
})
