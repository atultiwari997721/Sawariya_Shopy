'use client'
import { assets } from '@/assets/assets'
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CategoriesMarquee from './CategoriesMarquee'


const Hero = () => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹'

    return (
        <div className='mx-6'>
            <div className='flex max-xl:flex-col gap-8 max-w-7xl mx-auto my-10'>
                <div className='relative flex-1 flex flex-col bg-gradient-to-br from-green-50 via-emerald-100 to-teal-50 rounded-[3rem] shadow-2xl overflow-hidden xl:min-h-100 group transition-all duration-500 hover:shadow-emerald-200/50'>
                    <div className='p-6 sm:p-16 z-10'>
                        <div className='inline-flex items-center gap-3 bg-white/60 backdrop-blur-md text-emerald-800 pr-4 p-1 rounded-full text-xs sm:text-sm font-medium shadow-sm border border-white/40'>
                            <span className='bg-emerald-600 px-3 py-1 max-sm:ml-1 rounded-full text-white text-xs shadow-md'>NEWS</span> Free Shipping on Orders Above ₹ 50! <ChevronRightIcon className='group-hover:translate-x-1 transition-transform' size={16} />
                        </div>
                        <h2 className='text-4xl sm:text-6xl leading-[1.15] my-5 font-extrabold bg-gradient-to-r from-emerald-900 via-teal-700 to-emerald-600 bg-clip-text text-transparent max-w-xs sm:max-w-md transform transition-all duration-700 group-hover:scale-105 origin-left'>
                            Gadgets you'll love. Prices you'll trust.
                        </h2>
                        <div className='text-slate-700 text-sm font-semibold mt-4 sm:mt-8 flex flex-col gap-1'>
                            <p className='uppercase tracking-wider text-xs text-emerald-600/80'>Starts from</p>
                            <p className='text-4xl font-black text-slate-800'>{currency}19</p>
                        </div>
                        <button className='relative overflow-hidden bg-slate-900 text-white text-sm py-3 px-8 sm:py-4 sm:px-12 mt-6 sm:mt-10 rounded-full hover:bg-slate-800 shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_25px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group/btn'>
                            <span className="relative z-10 font-bold tracking-wide">LEARN MORE</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
                        </button>
                    </div>
                    <Image className='sm:absolute bottom-0 right-0 md:right-10 w-full sm:max-w-sm drop-shadow-2xl transition-transform duration-700 hover:scale-110 z-0' src={assets.hero_model_img} alt="Hero Model" priority />
                </div>
                <div className='flex flex-col md:flex-row xl:flex-col gap-6 w-full xl:max-w-sm text-sm text-slate-600'>
                    <div className='flex-1 flex items-center justify-between w-full bg-gradient-to-br from-amber-50 to-orange-100 rounded-[2rem] p-6 px-8 shadow-lg hover:shadow-xl border border-white/60 group transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden relative'>
                        <div className='absolute -right-10 -top-10 w-32 h-32 bg-orange-200/50 rounded-full blur-2xl group-hover:bg-orange-300/50 transition-colors' />
                        <div className='relative z-10'>
                            <p className='text-3xl font-bold bg-gradient-to-br from-slate-800 to-orange-600 bg-clip-text text-transparent max-w-40'>Best products</p>
                            <p className='flex items-center gap-1 mt-4 font-medium text-orange-900/70'>View more <ArrowRightIcon className='group-hover:translate-x-2 transition-transform' size={18} /> </p>
                        </div>
                        <Image className='w-35 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 relative z-10 drop-shadow-xl' src={assets.hero_product_img1} alt="Product 1" />
                    </div>
                    <div className='flex-1 flex items-center justify-between w-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-[2rem] p-6 px-8 shadow-lg hover:shadow-xl border border-white/60 group transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden relative'>
                        <div className='absolute -right-10 -top-10 w-32 h-32 bg-indigo-200/50 rounded-full blur-2xl group-hover:bg-indigo-300/50 transition-colors' />
                        <div className='relative z-10'>
                            <p className='text-3xl font-bold bg-gradient-to-br from-slate-800 to-indigo-600 bg-clip-text text-transparent max-w-40'>20% discounts</p>
                            <p className='flex items-center gap-1 mt-4 font-medium text-indigo-900/70'>View more <ArrowRightIcon className='group-hover:translate-x-2 transition-transform' size={18} /> </p>
                        </div>
                        <Image className='w-35 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative z-10 drop-shadow-xl' src={assets.hero_product_img2} alt="Product 2" />
                    </div>
                </div>
            </div>
            <CategoriesMarquee />
        </div>

    )
}

export default Hero