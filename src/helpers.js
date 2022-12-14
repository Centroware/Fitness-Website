import { API_URL, PROXY_SERVER_URL } from "./config";

export async function getContent(collection) {
    const req = await fetch(`${PROXY_SERVER_URL}/${API_URL}/v1/collection/${collection}`, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            "App-version": "2.2.9"
        }
    });

    const res = await req.json();

    if (res.status)
        return res.result.content;

    return null;
}

export async function getBlogs(limit = 10, offset = 0) {
    try {
        const req = await fetch(`${PROXY_SERVER_URL}/${API_URL}/blogs/blogs?limit=${limit}&offset=${offset}`);
        const res = await req.json();

        if (res.status)
            return res;

        return null;
    } catch (error) {
        console.log(error);
    }
}
export async function getBlogsCategories() {
    try {
        const req = await fetch(`${PROXY_SERVER_URL}/${API_URL}/blogs/blog_categories`);
        const res = await req.json();

        if (res.status)
            return res.result;

        return null;
    } catch (error) {
        console.log(error);
    }
}
export async function getStories() {
    try {
        const req = await fetch(`${PROXY_SERVER_URL}/${API_URL}/blogs/stories`);
        const res = await req.json();

        if (res.status)
            return res.result;

        return null;
    } catch (error) {
        console.log(error);
    }
}

export function getFormattedDate(ISOString = null) {
    let date = new Date(ISOString);
    return ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
}
