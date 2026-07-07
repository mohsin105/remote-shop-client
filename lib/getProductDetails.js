import React from 'react'
import apiFetch from './apiFetch';

export default async function getProductDetails(id) {
    // const result = await fetch(
    //     `http://127.0.0.1:8000/products/${id}`
    // )
    const result = await apiFetch(`products/${id}`);
    return result.json();
}
