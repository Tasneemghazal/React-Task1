import React from 'react'
import Product from '../product/Product.jsx'
export default function Products() {
  const products=[
    {id:1,title:'product one',desc:'this is product one'},
    {id:2,title:'product two',desc:'this is product two'},
    {id:3,title:'product three',desc:'this is product three'},
    {id:4,title:'product three',desc:'this is product three'},
    {id:5,title:'product three',desc:'this is product three'},
    {id:6,title:'product three',desc:'this is product three'},
    {id:7,title:'product one',desc:'this is product one'},
    {id:8,title:'product two',desc:'this is product two'},
    {id:9,title:'product three',desc:'this is product three'},
    {id:10,title:'product one',desc:'this is product one'},
    {id:11,title:'product two',desc:'this is product two'},
    {id:12,title:'product three',desc:'this is product three'},
    {id:13,title:'product one',desc:'this is product one'},
    {id:14,title:'product two',desc:'this is product two'},
    {id:15,title:'product three',desc:'this is product three'},
  ];
  return (
    <>
    <div className='products container w-75 mt-3'>
        <div className='row row-gap-3'>
            {
              products.map((pro) =><Product {...pro}/>)
            }
        </div>
    </div>
    </>
  )
}
