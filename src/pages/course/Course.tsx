import React, {useEffect, useState} from "react";
import {default as CourseModel} from "../../domain/course/Course";
import {CourseContext} from "../../context/CourseContext";
import CourseLayout from "../../layouts/CourseLayout";
import Category from "../../domain/course/Category";
import ChapterTitle from "../../components/section/ChapterTitle";
import InfoSection from "../../components/section/InfoSection";
import Badge from "../../components/badge/Badge";
import {findChapterSections} from "../../domain/data/CourseData";
import {SectionContext} from "../../context/SectionContext";
import TextSection from "../../components/section/TextSection";
import Section from "../../domain/section/Section";
import CodeSection from "../../components/section/CodeSection";

type PageProps = {
    course: CourseModel
    category: Category
}

export default function Course({course, category}: PageProps) {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (loading)
            setTimeout(() => setLoading(false), 0)
    })

    return <CourseContext.Provider value={{course, category}}>
        <CourseLayout>
            <div className="course">
                <div className="course__content">
                    <div>
                        <h1 className="title__main">{category.name}</h1>

                        {category.chapters.map(chapter => (
                            <div className="chapter" key={chapter.id}>
                                <ChapterTitle chapter={chapter}/>
                                {findChapterSections(chapter).map(section => (
                                    <SectionContext.Provider value={{section, chapter}} key={section.id}>
                                        {getSection(section)}
                                    </SectionContext.Provider>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="course__sidebar">
                    <ul className="category__group">
                        <li className="category__main">Chapitres</li>
                        {category?.chapters.map(chapter =>
                            <li key={chapter.id}>
                                <a href={`#${chapter.id}`}
                                   className={`chapter__link`}>{chapter.order}. {chapter.name}</a>
                            </li>
                        )}
                    </ul>
                    <div className="category__group">
                        <h5 className="category__main">Technologies</h5>
                        <div className="flex wrap">
                            {category.course.technologies.map(technology =>
                                <Badge key={technology.id}>{technology.name}</Badge>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </CourseLayout>
    </CourseContext.Provider>
}

function getSection(section: Section){
    if(section.type === "info") return <InfoSection>{section.content}</InfoSection>
    if(section.type === "code") return <CodeSection>{section.content}</CodeSection>
    else return <TextSection>{section.content}</TextSection>
}