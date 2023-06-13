import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='clsFooter   w-full bg-[#000] '>
        <div className='container mx-auto py-[20px] px-[20px] sm:py-[12px] sm:px-[10px]'>
          <div className='clsCopyrights block  md:py-[15px]   text-center leading-6 md:flex md:justify-between items-center '>
            <p className='text-[#ffffff80]'>© 2023 Webstix Rocks - All Rights Reserved.</p>
            <span className='flex items-center my-5 justify-center'>
            <p className='text-[#ffffff80]'>
Webstix 2820 Walton Commons Ln Suite 108 Madison, WI 53718 &nbsp; &nbsp; &nbsp; <a href="www.webstix.com"> www.webstix.com </a> 
</p></span>
            <span className='text-[#ffffff80] flex justify-center items-center ' >
              <a href="https://www.webstix.com/"><img className='relative top-[8px] ml-3' src="./images/webstix.gif"></img></a></span>
          </div>
          <div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer