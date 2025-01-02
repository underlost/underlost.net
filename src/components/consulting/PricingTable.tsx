import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const svgCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mt-0.5 h-4 w-4 mr-3 flex-none bg-wisteriabloom-blue fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
    <path className="fill-white!" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
  </svg>
)

const svgCheckInverted = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" className="mt-0.5 h-4 w-4 mr-3 flex-none bg-white fill-wisteriabloom-blue rounded-full p-[3px]" viewBox="0 0 24 24">
    <path className="fill-wisteriabloom-blue!" d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
  </svg>
)

export const PricingTable = () => (
  <div className="max-w-7xl mx-auto mb-24 md:px-8 relative z-10">

    <div className="grid lg:grid-cols-4 md:grid-cols-2 max-lg:gap-8 mt-8 max-md:max-w-sm max-md:mx-auto gap-x-5">

      <div className="bg-transparent rounded-3xl overflow-hidden p-8 border">
        <div className="text-left">
          <h4 className=" font-black text-2xl">Indie Advice</h4>
          <h3 className=" font-semibold text-2xl mt-4">$99</h3>
          <p className="text-sm mt-2">Ideal for gaining insight on how you can start refining your brand or idea.</p>
          <Link href="/consulting/indie-advice/" type="button" className="block btn text-center w-full mt-8 px-5 py-2.5 text-sm rounded-full">Book Now</Link>
        </div>

        <div className="mt-8">
          <h4 className=" font-semibold text-lg mb-4">Includes:</h4>
          <ul className="space-y-4">
            <li className="flex text-sm">
              {svgCheck()}
                Video Q & A (1 hour)
            </li>
            <li className="flex text-sm">
              {svgCheck()}
                Portfolio / web app critique
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-transparent rounded-3xl overflow-hidden p-8 border">
        <div className="text-left">
          <h4 className=" font-black text-2xl">Small Sprint</h4>
          <h3 className=" font-semibold text-2xl mt-4">$299</h3>
          <p className="text-sm mt-2">Ideal for helping troubleshoot site issues such as speed problems or user acquisition</p>
            
          <Link href="/consulting/small-sprint/" type="button" className="block btn text-center w-full mt-8 px-5 py-2.5 text-sm rounded-full">Book Now</Link>
        </div>

        <div className="mt-8">
          <h4 className=" font-semibold text-lg mb-4">Includes:</h4>
          <ul className="space-y-4">
            <li className="flex text-sm">
              {svgCheck()}
                Video Q & A (up to 2 hours)
            </li>
            <li className="flex text-sm">
              {svgCheck()}
                Website/Web app Critique
            </li>
            <li className="flex text-sm">
              {svgCheck()}
                Full website audit and reccomendations
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-wisteriabloom-blue text-white lg:scale-[1.05] shadow-[0_2px_40px_-4px_rgba(93,96,127,0.2)] rounded-3xl overflow-hidden p-8">
        <div className="text-left">
          <h4 className=" font-black text-2xl">Essentials</h4>
          <h3 className=" font-semibold text-2xl mt-4 flex">$670<sub className="text-xs font-medium ml-1">/ Month</sub></h3>
          <p className="text-sm mt-2">Ideal for helping with basic site additions and content updates</p>            
          <Link href="/consulting/essentials-package/" type="button" className="block btn btn-inverted text-center w-full mt-8 px-5 py-2.5 text-sm rounded-full">Book Now</Link>
        </div>

        <div className="mt-8">
          <h4 className=" font-semibold text-lg mb-4">Includes:</h4>
          <ul className="space-y-4">
            <li className="flex text-sm">
              {svgCheckInverted()}
                Weekly video call check-ins & email support
            </li>
            <li className="flex text-sm">
              {svgCheckInverted()}
                Help with new features and optimizing website speed and functionality, including SEO
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-transparent rounded-3xl overflow-hidden p-8 border">
        <div className="text-left">
          <h4 className=" font-black text-2xl">Accelerator</h4>
          <h3 className=" font-semibold text-2xl mt-4 flex">$1995<sub className="text-xs font-black ml-1">/ Month</sub></h3>
          <p className="text-sm mt-2">Ideal for helping ship your SAAS, web app, blog or portfolio and larger feature requests</p>
          <Link href="/consulting/accelerator-package/" type="button" className="block btn btn-inverse text-center w-full mt-8 px-5 py-2.5 text-sm rounded-full">Book Now</Link>            
        </div>

        <div className="mt-8">
          <h4 className=" font-semibold text-lg mb-4">Includes:</h4>
          <ul className="space-y-4">
            <li className="flex text-sm">
              {svgCheck()}
                Everything in Essentials, plus:
            </li>
            <li className="flex text-sm">
              {svgCheck()}
                Live Slack/Discord chat support
            </li>
            <li className="flex text-sm">
              {svgCheck()}
                Unlimited website development and feature requests
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)
