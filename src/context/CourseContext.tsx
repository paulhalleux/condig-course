import React from "react";
import Course from "../domain/course/Course";
import Category from "../domain/course/Category";

type ContectTypes = {
    course: Course
    category: Category | undefined
}

export const CourseContext = React.createContext<ContectTypes|undefined>(undefined);