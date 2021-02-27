import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Index from "../pages/Index";
import UnknownPageError from "../pages/errors/UnknownPageError";
import Courses from "../pages/course/Courses";
import Course from "../pages/course/Course";
import {findAllCourses} from "../domain/data/CourseData";
import Category from "../domain/course/Category";

export default function BaseRouter(){
    return <BrowserRouter>
        <Switch>
            <Route exact path={`/`}><Index/></Route>
            <Route exact path={`/courses`}><Courses/></Route>
            {findAllCourses().map(course => {
                const first = course.getFirstCategory()
                if(first === null) return null
                else return <Route exact path={`/course/${course.slug}`} key={course.id}><Course course={course} category={first}/></Route>
            })}
            {findAllCourses().map(course => {
                return course.categories.map(category => (
                    registerCategoryRoutes(category)
                ))
            })}
            <Route component={UnknownPageError}/>
        </Switch>
    </BrowserRouter>
}

function registerCategoryRoutes(category: Category): React.ReactNode|null{
    if(category.hasChildren()){
        return [category.hasChapters() && getCategoryRoute(category), ...category.children.map(child => (registerCategoryRoutes(child)))]
    }else{
        return getCategoryRoute(category)
    }
}

function getCategoryRoute(category: Category){
    return category.hasChapters() ?
        <Route exact path={`/course/${category.course.slug}/${category.slug}`} key={category.id}><Course course={category.course} category={category}/></Route>
        : null
}