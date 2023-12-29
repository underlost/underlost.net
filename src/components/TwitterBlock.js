import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const TwitterBlock = () => (
  <div className="px-8">
    <div className="max-w-5xl lg:mx-auto lg:mt-16 mb-32">
      <Link to="/twitter/" className="grid grid-cols-12 lg:gap-16">
        <div className="col-span-12 lg:col-span-7 flex order-2 lg:order-1">
          <div className="lg:my-auto">
            <p className="subtitle mb-1">A Timeline of Sorts</p>
            <h3 className="text-3xl font-black lg:pr-12">
              <span className="line-through">Twitter</span> X is doing just Great
            </h3>
            <p className="text-lg mb-3">
              I love the trainwreck that is formerly Twitter (now X). This is my attempt to archive and document all the major changes since Elon Musk took over, and effectivly ruined the
              platform.
            </p>
            <p className="text-right">
              <span className="btn-underline">View Timeline</span>
            </p>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
          <div className="relative aspect-square rounded-xl overflow-hidden my-4">
            <StaticImage
              src="../../static/images/twitter_x.jpg"
              alt="The twitter bird in front of a giant X"
              className="!absolute inset-0 w-full h-full object-cover bg-vanilla"
              placeholder="blurred"
              layout="fullWidth"
              quality={100}
              imgStyle={{ objectFit: `cover` }}
            />
          </div>
        </div>
      </Link>
    </div>
  </div>
)

export default TwitterBlock
