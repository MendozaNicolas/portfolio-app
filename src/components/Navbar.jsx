import React, { useRef, useState } from 'react'

export default function Navbar() {

    const navbarRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 56) {
            setIsScrolling(true);
        } else {
            setIsScrolling(false);
        }

    });

    return (
        <div>
            <nav ref={navbarRef} className={`navbar fixed-top ${isScrolling && 'navbar-scroll'}`}>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 ms-2 h1 text-primary fw-bold">nM.</span>
                    <a href="./MendozaCV.pdf" target='_blank' rel='noopener noreferrer' className='btn btn-outline-primary'><span className='text-white fw-bold'>Curriculum </span></a>
                </div>
            </nav>
        </div >
    );
}
