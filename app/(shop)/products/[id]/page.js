import getProductDetails from '@/lib/getProductDetails';
import React from 'react'

export default async function page({params}) {
  //This params is a promise. must be awaited. 
  // console.log("The prop on dynamic details page => ", params);
  const {id} = await params;
  // console.log("The object Id, after awaiting the Param and destructuring => ", id);
  const product = await getProductDetails(id);
  return (
    <div>
      <h1>This is product Details page</h1>
      <div>
        <h2>
          {product.name}
        </h2>
        <p>{product.description}</p>
      </div>
    </div>
  )
}
