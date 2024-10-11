import React from 'react';
import logo from '../images/logo.png';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" text-black py-4 ">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="hidden sm:flex items-center mb-4 md:mb-0 sm:w-1/3">
          <img src={logo} alt="Logo" className="h-44 mr-2" />
        </div>

        <div className="text-center mb-4 md:mb-0 sm:w-1/3">
          <h3 className="font-semibold mb-4">Follow us on our socials:</h3>
          <div className="flex justify-center gap-5 mb-5">
            <a href='https://www.linkedin.com/company/mlsa-miet/' className='text-3xl text-primary'><FaLinkedin /></a>
            <a href='https://www.instagram.com/mlsamiet' className='text-3xl text-primary'><FaInstagram /></a>
            <a href='https://x.com/MlsaMiet' className='text-3xl text-primary'><FaXTwitter /></a>
            <a href='https://chat.whatsapp.com/DXjoWMoEPsfBeCrVtBJNqc' className='text-3xl text-primary'><FaWhatsappSquare /></a>
            <a href='https://linktr.ee/mlsamiet' className='text-3xl text-primary'><SiLinktree /></a>
          </div>
          <div className='font-semibold'>
            Contact: <a href="mailto:mlsa.community@miet.ac.in">mlsa.community@miet.ac.in</a>
          </div>
        </div>

        <div className='sm:w-1/3 flex justify-end'>
          <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.483276503301!2d77.6410032!3d28.973046999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c668fdea4d87f%3A0x8795def814a486e7!2sMeerut%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1728559964538!5m2!1sen!2sin" ></iframe>
        </div>
      </div>

      <div className="text-center mt-4 flex justify-evenly text-md text-primary font-semibold">
        <p>Rights Reserved : MLSA MIET</p>
        <p className='flex gap-1 items-center'><FaCopyright /> MLSA MIET</p>
      </div>
    </footer>
  );
};

export default Footer;
