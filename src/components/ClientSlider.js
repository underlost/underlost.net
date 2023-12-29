import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Marquee from 'react-fast-marquee'

const ClientSlider = () => (
  <section className="py-16" id="clients">
    <div className="my-8 gh-content gh-canvas">
      <h2 className="text-6xl font-black">
        Some of the clients <br /> I&apos;ve worked with
      </h2>
    </div>
    <Marquee className="flex bg-almost-black py-16">
      <div className="flex px-8 my-auto">
        <StaticImage src="../../static/images/logos/frs-clipper.png" alt="FRS Clipper" className="my-auto" width={200} />
      </div>
      <div className="flex px-8 my-auto">
        <StaticImage src="../../static/images/logos/gettyimages.webp" alt="Getty Images" className="my-auto" width={200} />
      </div>
      <div className="flex px-8 my-auto">
        <StaticImage src="../../static/images/logos/graham-and-walker.png" alt="Graham & Walker" className="my-auto" width={200} />
      </div>
      <div className="flex px-8 my-auto">
        <StaticImage src="../../static/images/logos/meta.png" alt="Meta" className="my-auto" width={200} />
      </div>
      <div className="flex px-8 my-auto">
        <StaticImage src="../../static/images/logos/modernden.png" alt="Modern Den Real Estate & Development" className="my-auto" width={200} />
      </div>
      <div className="flex px-8 my-auto">
        <StaticImage src="../../static/images/logos/parks-rec.webp" alt="Seattle Parks & Recreation" className="my-auto" width={200} />
      </div>
      <div className="flex px-8 my-auto">
        <StaticImage src="../../static/images/logos/pinterest.webp" alt="Pinterest" className="my-auto" width={200} />
      </div>
      <div className="flex px-8 my-auto">
        <StaticImage src="../../static/images/logos/puget-sound-clean-air-agency.png" alt="Puget Sound Clean Air Agency" className="my-auto" width={100} />
      </div>
      <div className="flex px-8 my-auto">
        <StaticImage src="../../static/images/logos/watson-adventures.png" alt="Watson Adventures" className="my-auto" width={200} />
      </div>
      <div className="flex px-8 my-auto">
        <StaticImage src="../../static/images/logos/williams_kastner.png" alt="Williams Kastner" className="my-auto" width={200} />
      </div>
    </Marquee>
  </section>
)

export default ClientSlider
