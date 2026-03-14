'use client'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ product }) => {
    const currency = process.env.NEXT_PUBLIC_CURRENCY_SYMBOL || '₹'

    // Defensive: calculate average rating only if product.rating is a non-empty array
    const rating = Array.isArray(product.rating) && product.rating.length > 0
        ? Math.round(product.rating.reduce((acc, curr) => acc + curr.rating, 0) / product.rating.length)
        : 0

    // Defensive: use a placeholder image if images array is missing or empty
    const imageSrc = Array.isArray(product.images) && product.images.length > 0
        ? product.images[0]
        : "/placeholder.png"

    return (
        <Link href={`/product/${product.id}`} className='group max-xl:mx-auto flex flex-col bg-white rounded-2xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 h-full'>
            <div className='bg-slate-50/80 w-full h-40 sm:h-56 rounded-xl flex items-center justify-center overflow-hidden relative'>
                <Image
                    width={500}
                    height={500}
                    className='max-h-28 sm:max-h-40 w-auto group-hover:scale-110 transition duration-500 z-10 drop-shadow-md'
                    src={imageSrc}
                    alt={product.name || "Product"}
                />
            </div>
            <div className='flex flex-col gap-2 pt-4 px-1'>
                <div className='flex justify-between items-start gap-2'>
                    <p className='font-semibold text-slate-800 text-sm line-clamp-2 leading-tight group-hover:text-emerald-700 transition-colors flex-1'>{product.name}</p>
                    <p className='font-bold text-slate-900 whitespace-nowrap'>{currency}{product.price}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <div className='flex'>
                        {Array(5).fill('').map((_, index) => (
                            <StarIcon
                                key={index}
                                size={14}
                                className='mt-0.5'
                                fill={rating >= index + 1 ? "#10b981" : "#e5e7eb"}
                                color={rating >= index + 1 ? "#10b981" : "#e5e7eb"}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard