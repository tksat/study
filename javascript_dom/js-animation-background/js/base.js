const parallaxes = document.querySelectorAll(".parallax")

const calculateRangeValue = (oldMin, oldMax, newMin, newMax, oldValue) => {
  const oldRange = oldMax - oldMin
  const newRange = newMax - newMin
  const a = oldValue - oldMin
  const b = newRange / oldRange
  return a * b + newMin
}

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY
  parallaxes.forEach((parallax) => {
    const windowH = window.innerHeight
    if (scrollTop + windowH / 2 > parallax.offsetTop) {
      const oldMin =
        parallax.offsetTop < windowH / 2
          ? parallax.offsetTop
          : parallax.offsetTop - windowH / 2
      const oldMax = oldMin + parallax.offsetHeight
      const yPosition = calculateRangeValue(oldMin, oldMax, 0, -50, scrollTop)
      parallax.style.backgroundPosition = `center ${yPosition - 3}px`
    }
  })
})
