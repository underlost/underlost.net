import React from 'react'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const stats = [
  { value: 100, suffix: `+`, label: `Websites Shipped` },
  { value: 10, suffix: `M+`, label: `Combined Page Views` },
  { value: 20, suffix: `+`, label: `Years Experience` },
  { value: 100, suffix: `+`, label: `Clients Served` },
  { value: 95, suffix: `%`, label: `Repeat Client Engagement` },
]

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation only happens once
    threshold: 0.1, // Triggers when 10% of the element is visible
  })

  return (
    <section className="relative tag-color-scheme-b">
      <div className="lg:px-32 py-11 md:py-20" ref={ref}>
        <div className="grid grid-cols-12 gap-8 lg:gap-20">
          <div className="col-span-6 lg:col-span-12 flex md:block justify-center">
            <h3 className="pl-8 md:pl-0 md:text-center font-mono font-bold uppercase my-auto">Development by the Numbers</h3>
          </div>

          {stats.map((stat, index) => (
            <div key={index} className={`text-center font-mono col-span-6 lg:col-span-${index < 3 ? 4 : 6}`}>
              <span className="block text-5xl font-bold">
                {inView ? <CountUp start={0} end={stat.value} suffix={stat.suffix} duration={3} delay={0.5} /> : `${stat.value}${stat.suffix}`}
              </span>
              <span className="block px-5">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
