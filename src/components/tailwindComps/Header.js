import React from 'react'
import { ChevronRightIcon, StarIcon } from '@heroicons/react/solid'
import eclipse from '../../images/eclipseResize.jpg'
export default function Example() {
  return (
    <div className="relative overflow-hidden" style={{gridColumn:"span 5", gridRowStart:"header", gridRowEnd:"main"}}>
    <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div>
              <img
                className="h-11 w-auto"
                src={eclipse}
                alt="Workflow"
              />
            </div>
            <div className="mt-0">
              <div>
                <a href="#" className="inline-flex space-x-4">
                  <span className="rounded bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-orange tracking-wide uppercase">
                    Notify me
                  </span>
                  <span className="inline-flex items-center text-sm font-medium text-blue space-x-1">
                    <span>Coming early 2023</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </a>
              </div>
              <div className="mt-6 sm:max-w-xl">
                <h1 className="text-4xl font-extrabold text-orange tracking-tight sm:text-5xl">
                  Eclipse Builder
                </h1>
                <p className="mt-6 text-xl text-gray-600">
                  Introducing: <span className="text-blue">Eclipse Builder</span> - no code, beautiful components and faster page load times. 0 tech skills needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
