import AOS from 'aos'
import 'aos/dist/aos.css'

const instance = AOS.init({
  duration: 1000,
  once: true
})

export default instance
