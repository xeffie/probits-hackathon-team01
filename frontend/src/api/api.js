
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

async function request(endpoint, options = {}) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API error ${response.status}: ${errorText}`);
    }

    if (response.status === 204) return null;

    return response.json();
}

export const api = {
    getActivities: () => request("/api/activities"),

    getReflections: () => request("/api/reflections"),

    createReflection: (reflection) =>
        request("/api/reflections", {
            method: "POST",
            body: JSON.stringify(reflection),
        }),

    getCoachFeedback: () => request("/api/coach-feedback"),

    createCoachFeedback: (feedback) =>
        request("/api/coach-feedback", {
            method: "POST",
            body: JSON.stringify(feedback),
        }),
};
