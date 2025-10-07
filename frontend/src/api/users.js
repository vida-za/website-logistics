const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getUsers() {
    const response = await fetch(`${API_BASE_URL}/users`);
    return response.json();
}

export async function createUser(email) {
    const response = await fetch(`${API_BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(email),
    });
    return response.json();
}