import React from 'react'
import { useSelector } from 'react-redux'

export default function ProductList() {
    const { products } = useSelector((state)=> {
        console.log('state.products',state.products);
        return {
            products: state.products.data
        }
    })

    const renderProducts = products.map((product) => {
        return (
            <li key={product.productId} className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-4">
                   
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                            {product.productName}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Detail 
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                    {product.price}
                    </div>
                </div>
         </li>
        )

    })
  return (
    <div className="w-full max-w-xs">
        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {renderProducts}
        
        </ul>
</div>

  )
}
