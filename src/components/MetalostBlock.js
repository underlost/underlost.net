import React, { useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useInView } from 'react-intersection-observer'

const MetalostBlock = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the component comes into view
    threshold: 0.1, // Percentage of the component that should be visible to trigger
  });

  return (
    <div className="grid grid-cols-12 gap-0 mt-20 lg:mt-5 mb-20 lg:h-[550px]" ref={ref}>
      <div className="col-span-12 lg:col-span-6 relative order-2 lg:order-1">
        <div className="relative z-30 text-white h-full pb-12 w-full flex">
          <div className="mx-auto max-w-lg mt-auto">
            <div className="px-8 pt-16 lg:pt-0">
              <div className="opacity-90 pb-2">
                <svg width="162" height="48" viewBox="0 0 81 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.62 23.4h.77V.72h-.77V23.4Zm47.14 0h.77V.72h-.77V23.4Zm-20.86 0h.77V.72h-.77V23.4Zm17.49 0h2.16V.72h-2.16V23.4Zm-26.01 0h.77V.72h-.77V23.4Zm-3.08 0h2.16V.72H20.3V23.4Zm-2.45 0h.77V.72h-.77V23.4Zm19.71 0h.77V.72h-.77V23.4Zm21.84 0h.78V.72h-.78V23.4Zm-1.8 0h.78V.72h-.78V23.4Zm-32.23 0h2.16V.72h-2.16V23.4Zm3.34 0h2.16V.72h-2.16V23.4Zm35.74 0h2.15V.72h-2.15V23.4Zm-3.35 0h2.16V.72H61.1V23.4Zm6.53 0h.78V.72h-.78V23.4Zm-24.67 0h.77V.72h-.77V23.4Zm-30.85 0h4.17V.72h-4.17V23.4Zm67.14 0h.78V.72h-.78V23.4Zm-4.93 0h.78V.72h-.78V23.4Zm2.02 0h2.16V.72h-2.16V23.4Zm-30.03 0h2.16V.72h-2.16V23.4Zm8.06 0h2.16V.72h-2.16V23.4Zm-20.41 0h2.16V.72h-2.16V23.4Zm5.92 0h2.16V.72h-2.16V23.4Zm-32.62 0h4.17V.72H7.26V23.4Zm-6.6 0h4.17V.72H.66V23.4Zm68.81 0h4.17V.72h-4.17V23.4Z"
                    fill="#fff"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-wide text-3xl font-black mb-5">Project MetaLost Version 0.6.1</h2>
              <p className="text-lg mb-4">
                A completely free Unreal Engine Metahuman model and set of assets you can use in your next Unreal project, with animation rigging support for Mixamo and other popular
                libraries.
              </p>
              <p className="text-lg mb-4">Coming Summer 2023.</p>
            </div>
          </div>
        </div>

        <div className="absolute z-30 left-8 top-5 lg:top-10">
          <span className="bg-white/20 text-white text-xs px-1.5 py-1 rounded">Connecting...</span>
        </div>

        <div className="bg-black/50 absolute inset-0 z-20 lg:border-r lg:border-r-black" />
        <StaticImage src="../../static/images/metalost_v1_background.jpg" alt="MetaLost background" className="!absolute inset-0 z-0" imgStyle={{ objectFit: `cover` }} />
      </div>
      <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
        {inView && (
          <video className="w-full lg:h-[550px] object-cover" autoPlay loop muted playsInline>
            <source src="/video/metalost_v1.mp4" type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  )
}

export default MetalostBlock
