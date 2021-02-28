import React from "react";
import Section from "./Section";

type SectionProps = {
    children: string
}

export default function TextSection({children}: SectionProps){
    return <Section>
        <p className="text" dangerouslySetInnerHTML={{__html:children}}/>
    </Section>
}