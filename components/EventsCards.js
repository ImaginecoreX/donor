import React from 'react'
import seemore from "@/public/seemore.png"
import Image from 'next/image'

const EventsCards = () => {
    return (
        <div className='h-auto flex  justify-center mb-10'>
            <div className='w-auto ss:w-[350px] ns:w-[200px] overflow-x-scroll  box-border py-9 px-5 gap-2'>
                <div className="min-w-[800px] flex gap-3">
                    <div class="max-w-sm border rounded overflow-hidden shadow-lg flex-shrink-0 bg-d">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 color-yellow-300 font-family-Roboto-Serif">Boold Donation Camp</div>
                            <p class="text text-base mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                            <div className='flex items-center color-blue-700'>
                                <a className='mr-3' href='#' name="seemore">View More </a>
                                <label for="seemore"><Image src={seemore} className='w-[16px] h-[16px]'/></label>
                            </div>
                        </div>
                    </div>
                    <div class="max-w-sm border rounded overflow-hidden shadow-lg flex-shrink-0 bg-d">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2  color-yellow-300 font-family-Roboto-Serif">Dental Care Event</div>
                            <p class="text text-base mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                            <div className='flex items-center color-blue-700'>
                                <a className='mr-3' href='#' name="seemore">View More </a>
                                <label for="seemore"><Image src={seemore} className='w-[16px] h-[16px]'/></label>
                            </div>
                        </div>
                    </div>
                    <div class="max-w-sm border rounded overflow-hidden shadow-lg flex-shrink-0 bg-d">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 color-yellow-300 font-family-Roboto-Serif">Hair Donation Event</div>
                            <p class="text text-base mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                            <div className='flex items-center color-blue-700'>
                                <a className='mr-3' href='#' name="seemore">View More </a>
                                <label for="seemore"><Image src={seemore} className='w-[16px] h-[16px]'/></label>
                            </div>
                        </div>
                    </div>
                    <div class="max-w-sm border rounded overflow-hidden shadow-lg flex-shrink-0 bg-d">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 color-yellow-300 font-family-Roboto-Serif">Tree Planting Camp</div>
                            <p class="text text-base mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                            <div className='flex items-center'>
                                <a className='mr-3' href='#' name="seemore">View More </a>
                                <label for="seemore"><Image src={seemore} className='w-[16px] h-[16px]'/></label>
                            </div>
                        </div>
                    </div>
                    <div class="max-w-sm border rounded overflow-hidden shadow-lg flex-shrink-0 bg-d">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 color-yellow-300 font-family-Roboto-Serif">Book Donation Camp</div>
                            <p class="text text-base mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                            <div className='flex items-center color-blue-700'>
                                <a className='mr-3' href='#' name="seemore">View More </a>
                                <label for="seemore"><Image src={seemore} className='w-[16px] h-[16px]'/></label>
                            </div>
                        </div>
                    </div>
                    <div class="max-w-sm border rounded overflow-hidden shadow-lg flex-shrink-0 bg-d">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 color-yellow-300 font-family-Roboto-Serif">The Coldest Sunset</div>
                            <p class="text text-base mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                            <div className='flex items-center color-blue-700'>
                                <a className='mr-3' href='#' name="seemore">View More </a>
                                <label for="seemore"><Image src={seemore} className='w-[16px] h-[16px]'/></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsCards