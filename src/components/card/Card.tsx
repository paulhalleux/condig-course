import React from "react";

type ComponentProps = {
    title?: string
    children: React.ReactNode
    [x:string]: any;
}

export default function Card({title, children, ...props}: ComponentProps){
    return <div className={`card ` + props.className}>
        {title && <h3 className="card__title">{title}</h3>}
        <div className="card__content">
            {children}
        </div>
    </div>
}