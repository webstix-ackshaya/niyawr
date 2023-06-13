import React from 'react'


const Navbar = () => {
  return (
    <>
      <nav class="bg-cover bg-top-center pt-[20px] h-auto block text-center   md:h-[170px]   w-full border-b-[7px] border-[#3d3d3d]' ..." style={{ backgroundImage: 'url(/images/headerbg.jpg)' }}>
        <div className='container mx-auto px-4 block sm:flex sm:justify-between'>
          <div>
            <img className='logo block mx-auto' src="./images/WebstixLogo.png" alt="webstixrocks" />
          </div>
          <div className=' clsButtons flex mt-5 nd:mt-[1px] justify-evenly md:ml-5 '>
            <ul className='flex flex-wrap  '>
              <li className=' p-[4px] '><img src="./images/graphic_btn1.png" alt="" /></li>
              <li className=' p-[4px]'><img src="./images/graphic_btn2.png" alt="" /></li>
              <li className=' p-[4px]'><img src="./images/graphic_btn3.png" alt="" /></li>
              <li className=' p-[4px]'><img src="./images/graphic_btn4.png" alt="" /></li>
              <li className=' p-[4px]'><img src="./images/graphic_btn5.png" alt="" /></li>
              <li className=' p-[4px]'><img src="./images/on_off_btn.png" alt="" /></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar