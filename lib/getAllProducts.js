
export default async function getAllProducts() {

    const result = await fetch(
        "http://127.0.0.1:8000/products"
    )
    return result.json()
}
