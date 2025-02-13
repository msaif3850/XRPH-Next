import React from "react";

export function FixText(text: string) {
    return (
        <>
            {text.split("").map((char, i) =>
                /[-!@#$%^&*(/)4']/.test(char) ? (
                    <span key={i} className="font-sans">{char}</span>
                ) : (
                    char
                )
            )}
        </>
    );
}
