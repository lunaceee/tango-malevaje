const API_URL = "https://api.tickettailor.com/v1/issued_tickets";
const API_KEY = import.meta.env.TICKET_TAILOR_API_KEY; // Secure the API Key in .env

export async function fetchIssuedTickets() {
    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Basic ${btoa(API_KEY + ":")}`, // Encode API Key for Basic Auth
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch issued tickets:", error);
        return [];
    }
}