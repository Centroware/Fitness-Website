import { API_URL, PROXY_SERVER_URL } from "./config";

export async function getContent(collection) {
    const req = await fetch(`${PROXY_SERVER_URL}/${API_URL}/collection/${collection}`, {
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