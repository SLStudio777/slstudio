export function YouTubeIcon({ size = 16, className = "" }) {
    return (
        <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        >
            <path d="M23.5 6.2s-.2-1.7-.9-2.5c-.9-1-1.9-1-2.4-1.1C17.4 2.5 12 2.5 12 2.5s-5.4 0-8.2.1c-.5.1-1.5.1-2.4 1.1C.7 4.5.5 6.2.5 6.2S0 8.2 0 10.2v1.8c0 2 .5 4 .5 4s.2 1.7.9 2.5c.9 1 2.1 1 2.6 1.1 1.9.2 8 .2 8 .2s5.4 0 8.2-.1c.5-.1 1.5-.1 2.4-1.1.7-.8.9-2.5.9-2.5s.5-2 .5-4v-1.8c0-2-.5-4-.5-4zM9.5 14.7V8.3l6 3.2-6 3.2z"/>
        </svg>
    )
}

export function YouTubeRedIcon({ size = 16, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            className={className}
        >
            <path
                fill="#FF0000"
                d="M23.5 6.2s-.2-1.7-.9-2.5c-.9-1-1.9-1-2.4-1.1C17.4 2.5 12 2.5 12 2.5s-5.4 0-8.2.1c-.5.1-1.5.1-2.4 1.1C.7 4.5.5 6.2.5 6.2S0 8.2 0 10.2v1.8c0 2 .5 4 .5 4s.2 1.7.9 2.5c.9 1 2.1 1 2.6 1.1 1.9.2 8 .2 8 .2s5.4 0 8.2-.1c.5-.1 1.5-.1 2.4-1.1.7-.8.9-2.5.9-2.5s.5-2 .5-4v-1.8c0-2-.5-4-.5-4z"
            />
            <path
                fill="#FFFFFF"
                d="M9.5 14.7V8.3l6 3.2-6 3.2z"
            />
        </svg>
    )
}

export function FacebookIcon({ size = 16, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            className={className}
        >
            <mask id="fb-mask">
                <rect width="24" height="24" fill="white" />
                <path
                    d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.2l.8-3H13V9c0-.6.4-1 1-1z"
                    fill="black"
                />
            </mask>
            <rect
                width="24"
                height="24"
                rx="4"
                fill="currentColor"
                mask="url(#fb-mask)"
            />
        </svg>
    )
}

export function TelegramIcon({ size = 16, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M21.8 2.2L2.7 9.5c-1.3.5-1.3 1.2-.2 1.6l4.9 1.5 1.9 6c.3.9.2 1.2 1.1 1.2.7 0 1-.3 1.4-.7l2.7-2.6 5.6 4.1c1 .6 1.7.3 2-1l3.5-16.3c.4-1.6-.6-2.3-1.6-1.9zM9.8 12.6l9.5-6.1c.5-.3 1-.1.6.3l-7.9 7.1-.3 3.3-1.9-4.6z" />
        </svg>
    )
}

export function InstagramIcon({ size = 18, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" />
            <path
                fill="#1b1b1b"
                d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8.2A3.2 3.2 0 1 1 15.2 12 3.2 3.2 0 0 1 12 15.2zm5.4-8.9a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z"
            />
        </svg>
    )
}