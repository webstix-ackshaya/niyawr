import React from 'react';
import WebstixLogo from '../images/WebstixLogo.png'
import headerbtn from '../images/graphic_btn1.png'
import headerbtn2 from '../images/graphic_btn2.png'
import headerbtn3 from '../images/graphic_btn3.png'
import headerbtn4 from '../images/graphic_btn4.png'
import headerbtn5 from '../images/graphic_btn5.png'
import onbutton from '../images/on_off_btn.png'

const Navbar = () => {
  return (

<nav class="bg-cover bg-top-center pt-[20px] h-auto block text-center   md:h-[170px]   w-full border-b-[7px] border-[#3d3d3d]' ..." style={{ backgroundImage: 'url(/images/headerbg.jpg)' }}>
        <div className='container mx-auto px-4 block sm:flex sm:justify-between'>
          <div>
            <img className='logo block mx-auto' src={WebstixLogo} alt="webstixrocks" />
          </div>
          <div className=' clsButtons flex mt-5 nd:mt-[1px] justify-evenly md:ml-5 '>
            <ul className='flex flex-wrap  '>
              <li className=' p-[4px] '><img src={headerbtn} alt="" /></li>
              <li className=' p-[4px]'><img src={headerbtn2} alt="" /></li>
              <li className=' p-[4px]'><img src={headerbtn3} alt="" /></li>
              <li className=' p-[4px]'><img src={headerbtn4} alt="" /></li>
              <li className=' p-[4px]'><img src={headerbtn5} alt="" /></li>
              <li className=' p-[4px]'><img src={onbutton} alt="" /></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar


