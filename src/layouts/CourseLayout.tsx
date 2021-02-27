import React from "react";
import CourseNavigation from "../navigation/CourseNavigation";

type LayoutProps = {
    children: React.ReactNode,
}

export default function CourseLayout({children}: LayoutProps){
    return <div className="layout__course">
        <div className="layout__course-sidebar">
            <CourseNavigation/>
        </div>
        <div className="layout__course-content">
            {children}
        </div>
    </div>
}