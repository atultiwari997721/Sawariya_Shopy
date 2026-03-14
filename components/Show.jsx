'use client'
import { assets } from '@/assets/assets'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CategoriesMarquee from './CategoriesMarquee'

const Show = () => {
    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹'

    return (
        <div className='mx-6'>
            <div className='flex flex-row gap-4 max-w-2xl mx-auto my-8'>
                {/* First Section */}
                <div className='flex-1 flex flex-col items-start justify-between bg-gradient-to-br from-amber-50 to-orange-100 rounded-[2rem] p-5 shadow-lg border border-white/60 relative overflow-hidden group min-w-[120px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
                    <div className='absolute -right-8 -top-8 w-24 h-24 bg-orange-200/50 rounded-full blur-xl group-hover:bg-orange-300/50 transition-colors' />
                    <div className='relative z-10'>
                        <p className='text-xl lg:text-2xl font-bold bg-gradient-to-br from-slate-800 to-orange-600 bg-clip-text text-transparent max-w-32'>Best products</p>
                        <p className='flex items-center gap-1 mt-3 text-xs font-semibold text-orange-900/70'>View more <ArrowRightIcon className='group-hover:translate-x-1 transition-transform' size={14} /></p>
                    </div>
                    <Image className='w-24 mt-4 relative z-10 drop-shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500' src={assets.hero_product_img1} alt="Product 1" />
                </div>
                {/* Second Section */}
                <div className='flex-1 flex flex-col items-start justify-between bg-gradient-to-br from-blue-50 to-indigo-100 rounded-[2rem] p-5 shadow-lg border border-white/60 relative overflow-hidden group min-w-[120px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
                    <div className='absolute -right-8 -top-8 w-24 h-24 bg-indigo-200/50 rounded-full blur-xl group-hover:bg-indigo-300/50 transition-colors' />
                    <div className='relative z-10'>
                        <p className='text-xl lg:text-2xl font-bold bg-gradient-to-br from-slate-800 to-indigo-600 bg-clip-text text-transparent max-w-32'>20% discounts</p>
                        <p className='flex items-center gap-1 mt-3 text-xs font-semibold text-indigo-900/70'>View more <ArrowRightIcon className='group-hover:translate-x-1 transition-transform' size={14} /></p>
                    </div>
                    <Image className='w-24 mt-4 relative z-10 drop-shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500' src={assets.hero_product_img2} alt="Product 2" />
                </div>
            </div>
            <CategoriesMarquee />
        </div>
    )
}

export default Show