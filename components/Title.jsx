'use client'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Title = ({ title, description, visibleButton = true, href = '' }) => {

    return (
        <div className='flex flex-col items-center mb-8'>
            <h2 className='text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 text-center tracking-tight'>
                {title}
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mt-3 mb-4'></div>
            <Link href={href} className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-slate-500 group'>
                <p className='max-w-lg text-center leading-relaxed'>{description}</p>
                {visibleButton && (
                    <button className='text-emerald-600 font-semibold flex items-center gap-1 group-hover:text-emerald-700 transition-colors'>
                        View more <ArrowRight size={16} className='group-hover:translate-x-1 transition-transform' />
                    </button>
                )}
            </Link>
        </div>
    )
}

export default Title 