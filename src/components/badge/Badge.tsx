import React from "react";

type ComponentProps = {
    type?: string | "base" | "danger" | "success" | "warning" | "primary",
    children: React.ReactNode
}

export default function Badge({type = 'base', children}: ComponentProps){
    return <span className={`badge badge-`+type}>
        {children}
    </span>
}