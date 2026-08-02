import React from 'react'
import { FaFacebook, FaPinterest, FaRegCopyright } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io'

export default function Footer() {
  return (
    <div className='p-4 '>
      <h4 className='text-2xl font-semibold mb-4'>Remote Shop</h4>
      <div className='grid grid-cols-5 gap-4 border-b-2 mb-2 pb-4'>
        <div>
          <h6 className='text-lg font-semibold mb-2'>Shop</h6>
          <div className='space-y-1'>
            <p>New Arrivals</p>
            <p>Best Sellers</p>
            <p>Sale</p>
          </div>
        </div>
        <div>
          <h6 className='text-lg font-semibold mb-2'>Customer Service</h6>
          <div className='space-y-1'>
            <p>Contact Us</p>
            <p>Shipping Info</p>
            <p>FAQ</p>
          </div>
        </div>
        <div>
          <h6 className='text-lg font-semibold mb-2'>About</h6>
          <div className='space-y-1'>
            <p>Our Story</p>
            <p>Career</p>
            <p>Blog</p>
          </div>
        </div>
        <div>
          <h6 className='text-lg font-semibold mb-2'>Legal</h6>
          <div className='space-y-1'>
            <p>Privacy Policy</p>
            <p>Terms of Services</p>
            <p>Accessbility</p>
          </div>
        </div>
        <div>
          <h6 className='text-lg font-semibold mb-2'>Follow Us: </h6>
          <div className='space-y-1 flex space-x-4 text-2xl'>
            <FaFacebook />
            <IoLogoInstagram />
            <FaPinterest />
            <FaXTwitter />
          </div>
        </div>

      </div>
      <div className='flex justify-center space-x-4 items-center text-center'>
        <FaRegCopyright />
        <p>2026 Remote Shop . All Rights Reserved</p>
      </div>
    </div>
  )
}
