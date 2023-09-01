import Link from 'next/link';
import React from 'react'

export default function Button({children, variant="primary", type="link", ...props}) {
    const styles = {
        primary: "bg-amber-600",
        secundary: "bg-gray-600"
    }

    const variantClass = `flex items-center gap-2 px-6 py-1 rounded shadow-lg ring-black ${styles[variant]}`;

    return (
        <>
            {type === "link" ?
                <Link href="#" {...props} className={variantClass}>
                    {children}
                </Link> 
                :
                <button className={variantClass}>
                    {children}
                </button>
            }
        </>
    );
}
