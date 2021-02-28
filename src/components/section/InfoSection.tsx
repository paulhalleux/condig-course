import React from "react";
import Section from "./Section";

type SectionProps = {
    type?: string | "base" | "danger" | "success" | "warning" | "primary",
    children: string
}

export default function InfoSection({children, type = 'base'}: SectionProps) {
    return <Section>
        <div className={`message message-${type}`} dangerouslySetInnerHTML={{__html: children}}/>
    </Section>
}