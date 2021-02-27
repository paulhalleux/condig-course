import React from "react";
import BaseLayout from "../../layouts/BaseLayout";
import Card from "../../components/card/Card";
import {Link} from "react-router-dom"
import {findAllCourses} from "../../domain/data/CourseData";
import Badge from "../../components/badge/Badge";

export default function Courses(){
    const courses = findAllCourses()

    return <BaseLayout>
        {courses.map(value => (
            <Link to={`/course/`+value.slug} className="link">
                <Card title={value.name} className="course-card">
                    <p>{value.categories.length} Catégories</p>
                    <div>
                        {value.technologies.map((technology, index) => {
                            if (index < 2) {
                                return <Badge>{technology.name}</Badge>
                            } else if (index === 2){
                                return <Badge>+{value.technologies.length - 2}</Badge>
                            }
                            return null;
                        })}
                    </div>
                </Card>
            </Link>
        ))}
    </BaseLayout>
}