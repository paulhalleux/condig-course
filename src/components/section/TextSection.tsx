import React from "react";

type SectionProps = {
    children: React.ReactNode
}

export default function TextSection({children}: SectionProps){
    return <p className="text">
        {children}
    </p>
}