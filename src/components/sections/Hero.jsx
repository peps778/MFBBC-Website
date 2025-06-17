'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Missions', href: '#' },
  { name: 'Officers', href: '#' },
  { name: 'Service', href: '#' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <main
        className="relative isolate px-6 pt-32 pb-24 sm:pt-40 lg:px-8 bg-[url('./images/hero-bg.png')] bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center backdrop-blur-smp-6 rounded-xl">
          <div className="relative z-10">
            <img src="/images/Church.png" alt="Church Building" className="rounded-xl shadow-lg" />
          </div>
          <div className="text-gray-800">
            <h1 className="text-4xl sm:text-5xl font-bold leading-snug">
              Welcome to MAAO <br />
              <span className="text-gray-700">Fellowship Baptist Bible Church</span>
            </h1>
            <p className="mt-6 italic text-gray-600 text-lg">
              "Rooted in the Word. Growing in Faith. Serving with Love."
            </p>
            <p className="mt-4 text-base text-gray-700 leading-relaxed">
              “But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ. To him be glory both now
              and for ever. Amen.”
              <br />
              <span className="mt-1 block font-medium">— 2 Peter 3:18, KJV</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
