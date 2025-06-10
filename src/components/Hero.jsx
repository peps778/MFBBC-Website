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
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
          <div className="flex items-center gap-2 lg:flex-1">
            <img src="src/assets/Logo.png" alt="Church Logo" className="w-10 h-10 rounded-full" />
            <span className="font-semibold text-sm sm:text-base">
              MAAO Fellowship <br className="hidden sm:block" />
              Baptist Bible Church
            </span>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold text-gray-900">
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-500"
            >
              Worship
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6">
            <div className="flex items-center justify-between">
              <img src="/logo.png" alt="Church Logo" className="h-8 w-8 rounded-full" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#"
                  className="block rounded-md bg-yellow-400 px-3 py-2 text-base font-semibold text-black hover:bg-yellow-500"
                >
                  Worship
                </a>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <main className="relative isolate px-6 pt-32 pb-24 sm:pt-40 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <img src="src/assets/Church.png" alt="Church Building" className="rounded-xl shadow-lg" />
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
