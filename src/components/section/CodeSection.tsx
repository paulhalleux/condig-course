import React, {useContext, useEffect, useRef, useState} from "react";
import highlight from 'highlightjs'
import '../../assets/css/tools/custom.css'
import Section from "./Section";
import {SectionContext} from "../../context/SectionContext";
import TextSection from "./TextSection";
highlight.initHighlightingOnLoad();

type SectionProps = {
    children: string
}

const copyToClipboard = (str: any) => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

export default function CodeSection({children}: SectionProps){
    const context = useContext(SectionContext)
    const desc = context?.section.typeConfig.description
    const copyable = context?.section.typeConfig.copyable
    const numbered = context?.section.typeConfig.numbered
    const language = context?.section.typeConfig.language

    const code = useRef<any>()
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        highlight.highlightBlock(code.current)

        let line = "<span class='line'></span>";
        code.current.innerHTML = line+code.current.innerHTML;
        code.current.innerHTML = code.current.innerHTML.replaceAll(/\n(.)/g, "\n"+line+"$1")
    }, [children])

    const asCopy = children?.toString();
    const copy = (e: React.MouseEvent<HTMLSpanElement>) => {
        if(copyable !== false && !clicked){
            copyToClipboard(asCopy)
            setClicked(true)
            setTimeout(() => {
                setClicked(false)
            }, 800)
        }
    }

    return <Section>
        {desc ? <TextSection>{desc}</TextSection> : null}
        <pre className={(copyable ? "can_copy" : "")}>
            <code className={language + (numbered ? " numbered" : "")}
                  ref={code}>
                {children}
            </code>
                {(copyable !== false ?
                    <span
                        className="copy_button"
                        onClick={(e) => copy(e)}>
                        <i className={clicked?"fa fa-check":"far fa-copy"}/>
                </span>
                    : '')}
        </pre>
    </Section>
}