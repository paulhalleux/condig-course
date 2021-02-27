import React, {useContext} from "react";
import {CourseContext} from "../context/CourseContext";
import {Link} from "react-router-dom"
import Category from "../domain/course/Category";

export default function CourseNavigation(){

    const course = useContext(CourseContext)?.course

    return <nav className="navigation__course">
        <ul className="navigation__course-links">
            {course?.categories.map(category => (
                generateCategories(category)
            ))}
        </ul>
    </nav>

}

function generateCategories(category: Category, level: number = 0){
    level++;
    if(category.hasChildren()){
        return <ul key={category.id}>
            {getCategoryLink(category, level)}
            {category.children.map(child => {
                return generateCategories(child, level)
            })}
        </ul>
    }else{
        return getCategoryLink(category, level)
    }
}

function getCategoryLink(category: Category, level: number){
    return category.hasChapters() ?
        <li key={category.id}><Link to={`/course/${category.course.slug}/${category.slug}`}>{"--".repeat(level) + category.name}</Link></li>
        : <li key={category.id}>{"--".repeat(level) + category.name}</li>
}