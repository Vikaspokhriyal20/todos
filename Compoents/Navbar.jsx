import React from 'react'

const Navbar = () => {
    return (
        <section>
            <nav className='container flex flex-small'>
            <h4>Todo App</h4>
            <ul className='flex-link'>
                <li>Home</li>
                <li>About</li>
                <li>Product</li>
                <li>Contact</li>
            </ul>
            </nav>
           
        </section>
    )
}

export default Navbar
