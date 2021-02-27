import React from "react";
import BaseNavigation from "../navigation/BaseNavigation";

type LayoutProps = {
    children: React.ReactNode,
}

export default function BaseLayout({children}: LayoutProps){
    return <div className="layout__base">
        <div className="layout__base-navigation">
            <BaseNavigation/>
        </div>
        <div className="container layout__base-content">
            {children}
        </div>
    </div>
}