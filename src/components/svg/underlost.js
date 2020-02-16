import React from "react"
import { Link } from "gatsby"
import { TweenMax, Circ, gsap } from "gsap"
import DrawSVGPlugin from "../../lib/DrawSVGPlugin"
gsap.registerPlugin(DrawSVGPlugin)

const duration = 3.75
const delay = 1
const ease = Circ.easeOut


class UnderlostSVG extends React.Component  {

  componentDidMount(){
    // use the node ref to create the animation
    TweenMax.set(this.svgAnimated, { visibility: `visible` })
    //this.myTween = TweenLite.to(this.svgAnimated, 1, {x: 100, y: 100});
    var tl = new gsap.timeline({ repeat: 0, yoyo: false })
	  tl.staggerFrom(`.st0`, duration, { drawSVG: `50% 50%`, ease: ease }, 3.20)
  }

  render() {
    return (
      <Link className={`d-block`} to="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.29 42.4">
          <path ref={(ref)=>this.svgAnimated=ref} className={`st0`} fill="rgba(0,0,0,0)" stroke="#f0b" strokeWidth="1" d="M20.3 41.9c13.5 0 19.74-7.26 19.74-17.22V1.16h-12.3v23.16c0 3.84-2.52 6.9-7.44 6.9-4.98 0-7.5-3.06-7.5-6.9V1.16H.5v23.58c0 9.9 6.3 17.16 19.8 17.16zm66.721-.72V1.16h-12.12v18.96L60.981 1.16h-12.48v40.02h12.12V20.9l14.76 20.28zm26.4 0c12.54 0 21.9-7.26 21.9-20.04S125.96 1.16 113.36 1.16H95.482v40.02zm-.06-10.56h-5.76v-18.9h5.82c6.48 0 9.6 4.02 9.6 9.42a9.247 9.247 0 01-9.661 9.48zm58.622 10.56V30.62h-18.24v-4.38h17.817V15.68h-17.82v-3.96h18.24V1.16h-30.36v40.02zm43.2 0l-7.26-14.16a12.9 12.9 0 007.2-12.12c0-7.5-5.04-13.74-14.4-13.74H179.36v40.02h12.12v-12.6h4.38l5.52 12.6zM198.86 18.02h-7.38v-6.3h7.38c2.04 0 3.96.96 3.96 3.12.005 2.22-1.915 3.18-3.96 3.18zm50.466 23.16V30.62h-15.18V1.16h-12.12v40.02zm25.381.72c12.36 0 21.9-8.4 21.9-20.7S287.067.5 274.707.5s-21.9 8.4-21.9 20.7 9.54 20.7 21.9 20.7zm0-10.68c-5.82 0-9.6-4.44-9.6-10.02s3.78-10.02 9.6-10.02 9.6 4.44 9.6 10.02-3.78 10.02-9.6 10.02zm43.741 10.68c10.74 0 17.28-5.1 17.28-13.92 0-14.88-22.26-11.64-22.26-15.42 0-1.02.66-1.8 3.06-1.8a20.224 20.224 0 0111.76 3.96l6.48-8.58a26.4 26.4 0 00-16.98-5.58c-10.98 0-16.62 6.48-16.62 13.26 0 15.78 22.32 11.88 22.32 15.72 0 1.56-2.16 2.16-4.44 2.16a18.65 18.65 0 01-12.9-5.16l-6.3 9c4.26 3.84 10.08 6.36 18.6 6.36zm42.721-.72V11.72h10.68V1.16h-33.54v10.56h10.74v29.46zm16.2.72a6.42 6.42 0 10-6.42-6.42 6.506 6.506 0 006.421 6.42z"/>
        </svg>
      </Link>
    )
  }
}

export default UnderlostSVG
