import React from 'react'

export default async function getProductDetails(id) {
    const result = await fetch(
        `http://127.0.0.1:8000/products/${id}`
    )
  return result.json();
}
