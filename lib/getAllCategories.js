import apiFetch from "./apiFetch"

export default async function getAllCategories() {
    // const result = await fetch(
    //     "http://127.0.0.1:8000/categories"
    // )
    const result = await apiFetch("categories");

    return result.json();
}