import React from 'react'
import Background from '../components/Background'
import LinkArrow from '../components/LinkArrow'

const NotFoundPage = () => (
  <div className="h-screen">
    <div className="grid grid-cols-2 min-h-screen relative z-40">
      <div className="col-span-2 xl:col-span-1 text-white relative flex my-auto z-50">
        <div className="max-w-xl mx-auto relative z-20">
          <div className="p-10">
            <span className="text-6xl font-black style-3d block" data-text="404 error">
              404 Error.
            </span>
            <h1 className="h1 text-wide">Nope, that page can&apos;t be found.</h1>
            <span className="block text-4xl pt-6 font-thin whitespace-nowrap">(╯°□°）╯︵ ┻━┻</span>

            <p className="text-lg font-light pt-6">
              <LinkArrow text="Back to the homepage" url="/" light={true} />
            </p>
          </div>
        </div>
        <div
          className="absolute inset-0 "
          style={{
            backgroundColor: `rgba(0,0,0,0.75)`,
            backdropFilter: `grayscale(100%)`,
          }}
        ></div>
      </div>
    </div>
    <div className="absolute inset-0 z-20">
      <div className="glitch d-none d-md-block">
        <div className="glitch__img"></div>
        <div className="glitch__img"></div>
        <div className="glitch__img"></div>
        <div className="glitch__img"></div>
        <div className="glitch__img"></div>
      </div>

      <Background filename={`background.jpg`} alt={`Background`} />
    </div>
  </div>
)

export default NotFoundPage
