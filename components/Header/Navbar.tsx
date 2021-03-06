import Link from 'next/link'
import { useState } from 'react'
import {
  faBrain,
  faPlus,
  faMinus,
  faTimes,
  faDivide,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = (): JSX.Element => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className="flex items-center flex-wrap bg-purple-900 p-3 ">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <FontAwesomeIcon
              icon={faBrain}
              className="fill-current text-white h-8 w-8 mr-2"
            />
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              MATH HELPER
            </span>
          </a>
        </Link>
        <button
          className="inline-flex p-1 bg-purple-700 hover:bg-purple-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <Link href="/">
              {/* eslint-disable-next-line max-len */}
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center bg-purple-700 hover:bg-purple-600 hover:text-white mr-2">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="fill-current text-white h-8 w-8"
                />
              </a>
            </Link>
            <Link href="/">
              {/* eslint-disable-next-line max-len */}
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center bg-purple-700 hover:bg-purple-600 hover:text-white mr-2">
                <FontAwesomeIcon
                  icon={faMinus}
                  className="fill-current text-white h-8 w-8"
                />
              </a>
            </Link>
            <Link href="/multiplication">
              {/* eslint-disable-next-line max-len */}
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center bg-purple-700 hover:bg-purple-600 hover:text-white mr-2">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="fill-current text-white h-8 w-8"
                />
              </a>
            </Link>
            <Link href="/">
              {/* eslint-disable-next-line max-len */}
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center bg-purple-700 hover:bg-purple-600 hover:text-white mr-2">
                <FontAwesomeIcon
                  icon={faDivide}
                  className="fill-current text-white h-8 w-8"
                />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
