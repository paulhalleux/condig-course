import React from "react";
import {default as CourseModel} from "../../domain/course/Course";
import {CourseContext} from "../../context/CourseContext";
import CourseLayout from "../../layouts/CourseLayout";
import Category from "../../domain/course/Category";
import ChapterTitle from "../../components/section/ChapterTitle";
import TextSection from "../../components/section/TextSection";
import InfoSection from "../../components/section/InfoSection";
import CodeSection from "../../components/section/CodeSection";

type PageProps = {
    course: CourseModel
    category: Category
}

export default function Course({course, category}: PageProps) {
    return <CourseContext.Provider value={{course, category}}>
        <CourseLayout>
            <div className="course">
                <div className="course__content">
                    <h1 className="title__main">{category.name}</h1>
                    <InfoSection>
                        Dans ce chapitre vont être présentés les éléments suivants concernant la syntaxe de base de JavaScript:
                        <ul>
                            <li>histoire et comparaison de JavaScript vs Java</li>
                            <li>les différents types de variables</li>
                            <li>la déclaration de variables et leurs portées</li>
                            <li>les fonctions (anonymes, fléchées, imbriquées, génératrices, ...)</li>
                            <li>les concepts de "hoisting" et le mode "strict"</li>
                            <li>les structures de contrôles</li>
                            <li>les exceptions</li>
                        </ul>
                    </InfoSection>
                    {[...category.chapters.map(chapter => (
                        <div className="chapter" key={chapter.id}>
                            <ChapterTitle chapter={chapter}/>
                            <TextSection>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at culpa cum
                                inventore
                                itaque nesciunt, placeat quia reiciendis suscipit? Ex id omnis perferendis similique!
                                Maiores
                                provident, quaerat! Aliquid asperiores beatae blanditiis debitis dolorum fuga iste iure
                                labore
                                laudantium nobis optio, perspiciatis, quae quam quia quo, reiciendis ullam. Autem
                                libero,
                                sapiente.
                            </TextSection>
                        </div>
                    ))]}
                </div>
                <div className="course__sidebar">
                    <ul>
                        <li className="category__main">Chapitres</li>
                        {category?.chapters.map(chapter =>
                            <li key={chapter.id}>
                                <a href={`#${chapter.id}`}
                                   className={`chapter__link`}>{chapter.order}. {chapter.name}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </CourseLayout>
    </CourseContext.Provider>
}