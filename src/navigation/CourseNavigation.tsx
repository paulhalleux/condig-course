import React, {useContext} from "react";
import {CourseContext} from "../context/CourseContext";
import {Link} from "react-router-dom"
import Category from "../domain/course/Category";

export default function CourseNavigation(){

    const course = useContext(CourseContext)?.course
    const current = useContext(CourseContext)?.category

    return <nav className="navigation__course">
        <ul className="navigation__course-links">
            {course?.categories.map(category => (
                generateCategories(category, current)
            ))}
        </ul>
    </nav>

}

function generateCategories(category: Category, current?: Category, level: number = 0){
    level++;
    if(category.hasChildren()){
        return <ul className="category__group" key={category.id}>
            {getCategoryLink(category, level, current)}
            {category.children.map(child => {
                return generateCategories(child, current, level)
            })}
        </ul>
    }else{
        return getCategoryLink(category, level, current)
    }
}

function getCategoryLink(category: Category, level: number, current?: Category){
    return category.hasChapters() ?
        <li key={category.id} className={`category__level-${level-1} ${current?.id === category.id && `active`}`}>
            <Link to={`/course/${category.course.slug}/${category.slug}`}>{category.name}</Link>
        </li> : <li key={category.id} className="category__main">{category.name}</li>
}