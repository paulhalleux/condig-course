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
            <Route exact path={`/courses`}><Courses/></Route>
            {registerCoursesRoutes()}
            <Route exact path={`/`}><Index/></Route>
            <Route component={UnknownPageError}/>
        </Switch>
    </BrowserRouter>
}

function registerCoursesRoutes(){
    return <>
        {findAllCourses().map(course => (
            <Route exact path={`/course/${course.slug}`} key={course.id}><Course course={course}/></Route>
        ))}
        {findAllCourses().map(course => {
            return course.categories.map(category => (
                registerCategoryRoutes(category)
            ))
        })}
    </>
}

function registerCategoryRoutes(category: Category): React.ReactNode|null{
    if(category.hasChildren()){
        return category.children.map(child => registerCategoryRoutes(child))
    }else{
        return category.hasChapters() ?
            <Route exact path={`/course/${category.course.slug}/${category.slug}`} key={category.id}><Course course={category.course} category={category}/></Route>
            : null
    }
}