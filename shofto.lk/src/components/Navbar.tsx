import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="hidden lg:block">
        <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                <Link className="navbar__link relative" href="#">
                    HOME
                </Link>
                <Link className="navbar__link relative" href="#">
                    CATEGORIES
                </Link>
                <Link className="navbar__link relative" href="#">
                    MEN
                </Link>
                <Link className="navbar__link relative" href="#">
                    WOMEN
                </Link>
                <Link className="navbar__link relative" href="#">
                    JEWALERY
                </Link>
                <Link className="navbar__link relative" href="#">
                    PERFUME
                </Link>
                <Link className="navbar__link relative" href="#">
                    BLOG
                </Link>
                <Link className="navbar__link relative" href="#">
                    HOT OFFERS
                </Link>
                
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
