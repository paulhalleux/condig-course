import React from "react";
import {default as CourseModel} from "../../domain/course/Course";
import {CourseContext} from "../../context/CourseContext";
import CourseLayout from "../../layouts/CourseLayout";
import Category from "../../domain/course/Category";

type PageProps = {
    course: CourseModel
    category?: Category
}

export default function Course({course, category}: PageProps){
    return <CourseContext.Provider value={{course, category}}>
        <CourseLayout>
            {course?.name} ---- {category?.name}
        </CourseLayout>
    </CourseContext.Provider>
}