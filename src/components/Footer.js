import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />
                        <div>
                            <p>Jl. Teuku Umar No. 85</p>
                            <h4>Denpasar, Bali. Indonesia</h4>
                        </div>
                    </div>
                        <div className='phone'>
                            <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}} />(0361) 257566</h4>
                        </div>
                        <div className='email'>
                            <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}} />vacater@official.com</h4>
                        </div>
                </div>
                    <div className='right'>
                        <h4>About the company</h4>
                        <p>Vacater is a property developer exclusively focused on creating high-end luxury holiday resorts in carefully selected tourism hotspots</p>
                        <div className='social'>
                            <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                            <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                            <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                        </div>
                    </div>
            </div>
        </div>
    )
    }

export default Footer