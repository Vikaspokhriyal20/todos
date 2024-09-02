import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <section>
            <nav className='container flex flex-small'>
                <h4>Todo App</h4>
                <ul className='flex-link'>
                    <li><Link href={'/'} >Home</Link></li>
                    <li> <Link href={'/about'} >About</Link></li>
                    <li><Link href={'/product'} >Product</Link></li>
                    <li><Link href={'/contact'} >Contact</Link></li>
                </ul>
            </nav>

        </section>
    )
}

export default Navbar
