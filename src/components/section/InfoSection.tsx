import React from "react";

type SectionProps = {
    type?: string | "base" | "danger" | "success" | "warning" | "primary",
    children: React.ReactNode
}

export default function InfoSection({children, type = 'base'}: SectionProps){
    return <p className={`message message-${type}`}>
        {children}
    </p>
}