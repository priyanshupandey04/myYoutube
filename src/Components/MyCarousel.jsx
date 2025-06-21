import React from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"

const MyCarousel = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 10,
      spacing: 15,
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="p-4 bg-blue-200 rounded keen-slider__slide">Slide 1</div>
      <div className="p-4 bg-green-200 rounded keen-slider__slide">Slide 2</div>
      <div className="p-4 bg-red-200 rounded keen-slider__slide">Slide 3</div>
      <div className="p-4 bg-yellow-200 rounded keen-slider__slide">Slide 4</div>
    </div>
  )
}

export default MyCarousel
