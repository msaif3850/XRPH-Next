// ClientProvider.tsx (Client Component)
'use client';

import { useEffect } from "react";

export default function ClientProvider() {
    useEffect(() => {
        console.log("Client-side logic is running!");
        // Any client-side operations like event listeners, localStorage, etc.
    }, []);

    return null; // No need to render anything
}
