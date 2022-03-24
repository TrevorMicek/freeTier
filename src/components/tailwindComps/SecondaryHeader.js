import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


import { Link } from "gatsby"
import Logo from '../../images/logo.png'
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Product', href: '/product' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Partnerships', href: 'https://partners.websitesbytrevor.com/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
]

export default function Header(props) {
  const Title = () => {
    switch(props.title) {
      case 'Product':
        return ['Personalized websites', 'for your business']
      case 'Pricing':
        return ['Pricing plans for', 'businesses of all sizes']
      case 'About':
        return ['Learn more about me', 'and my small business']
      case 'Blog':
        return ['Tips & Tricks', 'For a Better Website']
      case 'Contact':
        return ['Contact', 'Websites By Trevor']
      case 'Store':
        return ['Custom', 'Ecommerce Store']
    }
  }
  return (
    <div className="relative bg-bg overflow-hidden" style={{gridColumn:"span 5", gridRowStart:"header", gridRowEnd:"main"}}>
      <div className="absolute -top-6 w-full flex items-center justify-center lg:m-0 ">
                <div className="mx-auto px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className="w-full  mx-auto  lg:inset-y-0 lg:left-0 lg:h-10/12 lg:w-auto lg:max-w-none"
                    src="https://res.cloudinary.com/websites-by-trevor/image/upload/v1647045203/techBG_vuer11.webp"
                    alt="blue technical background image"
                    width="200px"
                    height="100px"
                  />
                </div>
              </div>

      <div className="relative pb-16 sm:pb-24">
      <Popover as="header" className="">
        <div className="pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="h-20 w-auto  flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-28 w-auto"
                    src={Logo}
                    alt=""
                    width="50px"
                    height="50px"
                  />
                </a>

              </div>

            </div>

          </nav>
        </div>


      </Popover>

        <main className="mt-10 mb-20 pb-2  mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">{props.title}</span>{' '}
              <span className="block mx-auto w-max bg-bg text-indigo-500 xl:inline">{props.text}</span>
            </h1>


          </div>
        </main>
      </div>
    </div>
  )
}