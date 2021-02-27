import React from "react";
import CourseNavigation from "../navigation/CourseNavigation";
import {Link} from "react-router-dom"

type LayoutProps = {
    children: React.ReactNode,
}

export default function CourseLayout({children}: LayoutProps){
    return <div className="layout__course">
        <div className="layout__course-topbar">
            <div className="layout__course-topbar-content">
                <h3 className="chapter-title">Coursylla</h3>
                <ul>
                    <li>
                        <Link to={`/courses`}>Cours</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="layout__course-page">
            <div className="layout__course-sidebar">
                <CourseNavigation/>
            </div>
            <div className="layout__course-content">
                {children}
            </div>
        </div>
    </div>
}