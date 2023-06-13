import React from 'react'
import {one} from "../../public/images/A.png"
const CTA = () => {
return (
<>
<div>
<section class=" lg:py-12 lg:flex lg:justify-center">
<div class="overflow-hidden container mx-auto bg-white  lg:mx-8 lg:flex  lg:w-full ">
<div class="lg:w-1/2">
<div class=" h-30 bg-cover lg:h-full" >
<img className='h-30' src='./images/A.png'  />
</div>
</div>
<div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
<span class="text-xl font-semibold text-gray-800 dark:text-white md:text-xl">You can also say</span>
<h2 class="text-2xl py-2 font-semibold text-[#ef3232;] dark:text-white md:text-3xl">
"Webstix <span class="text-black">Rocks!</span>" 
</h2>
<span class="text-xl font-semibold text-gray-800 dark:text-white md:text-xl">when we complete a website design project for you.</span>
<div></div>
<p class="mt-4 text-gray-500 dark:text-gray-300">
Lorem, ipsum dolor sit amet consectetur adipisicing elit.
Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam
mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
</p>
<div class="inline-flex w-full mt-6 sm:w-auto">
<a href="#" class="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
Start Now
</a>
</div>
</div>
</div>
</section>
</div>
</>
    )
}

export default CTA