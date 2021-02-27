import React from "react";
import LinkButton from "../components/button/LinkButton";

export default function BaseNavigation(){
    return <nav className="navigation__base">
        <h2>Coding Courses</h2>
        <div className="navigation__base-links">
            <LinkButton path={`/`}>Accueil</LinkButton>
            <LinkButton path={`/courses`}>Cours</LinkButton>
            <LinkButton path={`/admin`} type="danger">Admin</LinkButton>
        </div>
    </nav>
}