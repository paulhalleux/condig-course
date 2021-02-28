import React, {useContext} from "react";
import {SectionContext} from "../../context/SectionContext";
import SectionTitle from "./SectionTitle";

type SectionProps = {
    children: React.ReactNode
}

export default function Section({children}: SectionProps){
    const chapter = useContext(SectionContext)?.chapter
    const section = useContext(SectionContext)?.section
    let link:string|undefined = undefined
    if(chapter !== undefined)
        link = `${window.location.host}/course/${chapter.category.course.slug}/${chapter.category.slug}#s${section?.id}`;

    const copy = (url: string|undefined) => {
        if(url === undefined) return
        const el = document.createElement('textarea');
        el.value = url;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    return <section id={`s${section?.id}`}>
        {section?.title !== null ? <SectionTitle>{section?.title}</SectionTitle> : null}
        <div className="copyable-element">
            {section?.copyable && <span className="link-button" onClick={() => copy(link)}>
                <i className="fa fa-link"/>
            </span>}
            {children}
        </div>
    </section>
}