import React from "react";
import {default as CourseModel} from "../../domain/course/Course";
import {CourseContext} from "../../context/CourseContext";
import CourseLayout from "../../layouts/CourseLayout";
import Category from "../../domain/course/Category";

type PageProps = {
    course: CourseModel
    category: Category
}

export default function Course({course, category}: PageProps){
    return <CourseContext.Provider value={{course, category}}>
        <CourseLayout>
            <div className="course">
                <div className="course__content">
                    {course.name}
                    {category.name}
                </div>
                <div className="course__sidebar">
                    <ul>
                        {category?.chapters.map(chapter => (
                            <li key={chapter.id}><a href={`#${chapter.id}`}>{chapter.order}. {chapter.name}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </CourseLayout>
    </CourseContext.Provider>
}