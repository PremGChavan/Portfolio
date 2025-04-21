import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'> 
      <div className='footer-container'>
        <div className='flex flex-col justify-center md:items-start items-center'>
          <a href="/">Visit my blog</a>
        </div>
        <div className='socials'>
          {socialImgs.map((img) => (
            <a className='icon' target='_blank' href={img.url} key={img.url}>
              <img src={img.imgPath} alt={img.name} />
            </a>
          ))}
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-center md:text-end'>© {new Date().getFullYear} Prem Chavan  |  All rights reserved.</p>
          <p className=' font-bold text-center md:text-end'>Currently the details in this portfolio are just for Demo</p>
          <p className=' font-bold text-center md:text-end'> I will be updating my details soon</p>

        </div>
      </div>
    </footer>
  )
}

export default Footer