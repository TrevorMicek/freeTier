import React from 'react'

import { CodeIcon, GlobeAltIcon,ArrowsExpandIcon,TagIcon, DatabaseIcon,TerminalIcon, UploadIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'


const features = [
  {
    name: 'Expand your brand',
    description:
    "Start marketing now. Most businesses that sign up for our free tier are very small and very new so it's a great way to start your online presence at no cost to you.",
    icon: ArrowsExpandIcon,
  },
  {
    name: 'Offer products and services',
    description:
      "A full website is always ideal for the best user experience but we still focus on allowing you to offer all of your services and products in a user friendly way.",
    icon: ScaleIcon,
  },
  {
    name: 'Get connected',
    description:
      "We will maintain open and consistent communication to help with your new website and allow you access to a wonderful developer.",
    icon: GlobeAltIcon,
  },
  {
    name: 'Get a free full website',
    description:
      "We have a referral system for our normal clients and we extend that to our free tier clients, which allows you a way to get a full website for free with just a handful of referrals if you like our work!",
    icon: TerminalIcon,
  }
]


const metricsImg = require('../../images/metrics.png')
export default function FeatureSection() {
  return (
    <div className="pb-10 pt-16 -mb-8 -mt-20 pr-4 relative overflow-hidden bg-indigo-50" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second"}}>
<div className="absolute z-0 left-52  opacity-40 transform rotate-90 scale-x-125 before:-skew-x-9 before:rounded-sm after:skew-x-9"  id="app"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="mt-4 text-base text-default font-semibold tracking-wide uppercase">websites by trevor</h2>
          <p className="mt-2 relative z-10 max-w-3xl text-3xl leading-8 font-extrabold tracking-tight text-gray-900 lg:mx-auto">
          The benefits of a one page website
          </p>
          <p className="mt-4 relative z-10 max-w-2xl text-xl text-gray-600 lg:mx-auto">
          Many people wonder why we would offer a free one page website and the answer is it helps people, it's a great way to network, grow our portfolio and help with our marketing. Here's how it can help you!
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}