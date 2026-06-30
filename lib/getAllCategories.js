export default async function getAllCategories() {
    const result = await fetch(
        "http://127.0.0.1:8000/categories"
    )

    return result.json()
}