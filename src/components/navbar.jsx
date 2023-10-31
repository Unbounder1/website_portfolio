import React from 'react';
import navbar from '../styles/navbar.module.css'

function Navbar () {
    return (
        <nav>
            <ul>
                <li><a class="navItems" href="/">Home</a></li>
                <li><a class="navItems" href="/about">About Me</a></li>
                <li><a class="navItems" href="/technical">Technical</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;