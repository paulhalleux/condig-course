import React from "react";

type ComponentProps = {
    type?: string | "base" | "danger" | "success" | "warning" | "primary",
    href?: string,
    children: React.ReactNode
}

export default function Button({children, href = '#', type = 'base'}: ComponentProps){
    return <a className={`button button-`+type} href={href}>{children}</a>
}