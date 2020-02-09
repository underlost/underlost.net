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
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 683 77">
          <path ref={(ref)=>this.svgAnimated=ref} className={`st0`} fill="none" d="M37.24 76.32C12.49 76.32.94 63.01.94 44.86V1.63h22.55v42.46c0 7.04 4.62 12.65 13.75 12.65 9.02 0 13.64-5.61 13.64-12.65V1.63h22.55v43.12c0 18.26-11.44 31.57-36.19 31.57zM159.597 75h-21.34l-27.06-37.18V75h-22.22V1.63h22.88l25.52 34.76V1.63h22.22V75zm48.436 0h-32.89V1.63h32.78c23.1 0 40.26 13.2 40.26 36.63 0 23.43-17.16 36.74-40.15 36.74zm-.11-19.36c11.11 0 17.71-8.14 17.71-17.38 0-9.9-5.72-17.27-17.6-17.27h-10.67v34.65h10.56zM315.43 75h-55.66V1.63h55.66v19.36h-33.44v7.26h32.67v19.36h-32.67v8.03h33.44V75zm79.237 0h-25.3l-10.12-23.1h-8.03V75h-22.22V1.63h39.16c17.16 0 26.4 11.44 26.4 25.19 0 12.65-7.37 19.36-13.2 22.22L394.667 75zm-29.92-42.46c3.74 0 7.26-1.76 7.26-5.83 0-3.96-3.52-5.72-7.26-5.72h-13.53v11.55h13.53zM457.293 75h-50.05V1.63h22.22v54.01h27.83V75zm46.567 1.32c-22.66 0-40.15-15.4-40.15-37.95 0-22.55 17.49-37.95 40.15-37.95s40.15 15.4 40.15 37.95c0 22.55-17.49 37.95-40.15 37.95zm0-19.58c10.67 0 17.6-8.14 17.6-18.37S514.53 20 503.86 20c-10.67 0-17.6 8.14-17.6 18.37s6.93 18.37 17.6 18.37zm80.227 19.58c-15.62 0-26.29-4.62-34.1-11.66l11.55-16.5c5.5 5.28 13.75 9.46 23.65 9.46 4.18 0 8.14-1.1 8.14-3.96 0-7.04-40.92.11-40.92-28.82 0-12.43 10.34-24.31 30.47-24.31 11.99 0 22.77 3.41 31.13 10.23l-11.88 15.73c-6.38-4.84-14.63-7.26-21.56-7.26-4.4 0-5.61 1.43-5.61 3.3 0 6.93 40.81.99 40.81 28.27 0 16.17-11.99 25.52-31.68 25.52zM662.443 75h-22.22V20.99h-19.69V1.63h61.49v19.36h-19.58V75z"/>
        </svg>
      </Link>
    )
  }
}

export default UnderlostSVG
