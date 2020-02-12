export default {
  bind(el, binding){






    el.addEventListener("click", makeWave)
    function makeWave(e){
      const elRect = el.getBoundingClientRect()

      const circle = document.createElement('div')
      circle.classList.add('custom-wave')
      const max = Math.max(el.clientWidth, el.clientHeight)

      circle.style.height = circle.style.width = max + 'px'
      circle.style.backgroundColor = binding.arg

      circle.style.left = e.pageX - elRect.left - max / 2 + "px"
      circle.style.top = e.pageY - elRect.top - max / 2 + "px"

      el.style.position = 'relative'
      el.style.overflow = 'hidden'

      console.log("Y",  e.pageY - elRect.top)
      console.log("X",  e.pageX - elRect.left)
      el.appendChild(circle)
    }
  }
}
