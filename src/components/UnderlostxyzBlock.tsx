import React from 'react'
import Image from 'next/image'

const UnderlostxyzBlock = () => (
  <div className="container lg:mx-auto shadow-md">
    <div className="relative rounded-xl overflow-hidden bg-black">
      <div className="relative z-40 bg-black/20">
        <div className="px-8 lg:px-16 py-16 lg:py-52 text-white text-shadow shadow-black">
          <p className="text-lg lg:text-4xl font-light mb-1 lg:mb-0 leading-base font-grotesk">
            Say{` `}
            <span className="font-black style-3d inline-block pr-3" data-text="hello">
              hello
            </span>
            {` `}
            to <strong className="font-black">underlost XYZ</strong>
          </p>
          <h2 className="text-2xl lg:text-2xl font-light mb-4">
            <span className="pr-3 inline">A development lab that builds innovative web and mobile experiences.</span>
            <span className="blinker"></span>
          </h2>
          <p className="mb-8 text-lg max-w-md">With two decades of experienace, I help businesses and startups bring their visions to life.</p>
          <a href="https://www.underlost.xyz" target="_blank" className="uppercase border px-4 py-2 inline-block hover:bg-black hover:text-white" rel="noreferrer">
            <span>Learn More about underlost XYZ</span>
          </a>
        </div>
      </div>

      <Image src="/images/xyz.jpg" alt="Underlost" className="!absolute inset-0 w-full h-full object-cover" width={2688} height={1536} />
    </div>
  </div>
)

export default UnderlostxyzBlock
