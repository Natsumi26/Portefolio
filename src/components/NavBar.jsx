'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
         <header className=" fixed top-0 left-0 w-full">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-stone-50"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">

          <a href="#profil" className="text-sm/6 font-semibold text-stone-50">
            Mon profil
          </a>
          <a href="#competences" className="text-sm/6 font-semibold text-stone-50">
            Mes compétences
          </a>
          <a href="#projets" className="text-sm/6 font-semibold text-stone-50">
            Mes projets
          </a>
          <a href="#cv" className="text-sm/6 font-semibold text-stone-50">
            Mon CV
          </a>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 " />
        <DialogPanel className="fixed top-0 left-0 w-full shadow-md overflow-y-auto bg-white p-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-stone-50"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          
              <div className="flex flex-row space-x-6">
                <a
                  href="#profil"
                  className=" inline-block rounded-lg px-3 py-2 text-base/7 font-semibold text-stone-50 hover:bg-gray-50"
                >
                  Mon profil
                </a>
                <a
                  href="#competences"
                  className=" inline-block rounded-lg px-3 py-2 text-base/7 font-semibold text-stone-50 hover:bg-gray-50"
                >
                  Mes compétences
                </a>
                <a
                  href="#projets"
                  className=" inline-block rounded-lg px-3 py-2 text-base/7 font-semibold text-stone-50 hover:bg-gray-50"
                >
                  Mes projets
                </a>
                <a
                  href="#cv"
                  className=" inline-block rounded-lg px-3 py-2 text-base/7 font-semibold text-stone-50 hover:bg-gray-50"
                >
                  Mon CV
                </a>
              </div>
              </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}