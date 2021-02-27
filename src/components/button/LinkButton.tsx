import React from "react";
import {Link} from "react-router-dom";

type ComponentProps = {
    type?: string | "base" | "danger" | "success" | "warning" | "primary",
    children: React.ReactNode,
    path: string
}

export default function LinkButton({type = 'base', children, path}: ComponentProps){
    return <Link to={path} type={type} className={`button button-`+type}>{children}</Link>
}