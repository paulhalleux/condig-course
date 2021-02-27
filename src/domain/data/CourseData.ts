import Course from "../../domain/course/Course";

const courses = [
    {
        id: 1,
        name: "Javascript",
        slug: "javascript",
        technologies: [
            {id: 1, name: "Javascript"},
            {id: 2, name: "jQuery"},
            {id: 7, name: "Node"}
        ],
        categories: [
            {
                id: 1,
                order: 1,
                name: "Les bases",
                slug: "basics",
                children: [
                    {
                        id: 2,
                        order: 1,
                        name: "Les bases du language",
                        slug: "language-basics",
                        children: [
                            {
                                id: 3,
                                order: 1,
                                name: "Les tableaux",
                                slug: "arrays",
                                children: [],
                                chapters: [
                                    {id: 1, order: 1, name: "Introduction"},
                                    {id: 2, order: 2, name: "Les tableaux"},
                                    {id: 3, order: 3, name: "Les objets"},
                                    {id: 4, order: 4, name: "Les closures"},
                                    {id: 5, order: 5, name: "Les collections"},
                                    {id: 6, order: 6, name: "Exercices"},
                                ]
                            },
                            {
                                id: 4,
                                order: 2,
                                name: "Les fonctions",
                                slug: "functions",
                                children: [],
                                chapters: [
                                    {id: 1, order: 1, name: "Introduction"},
                                    {id: 2, order: 2, name: "Les tableaux"},
                                    {id: 3, order: 3, name: "Les objets"},
                                    {id: 4, order: 4, name: "Les closures"},
                                    {id: 5, order: 5, name: "Les collections"},
                                    {id: 6, order: 6, name: "Exercices"},
                                ]
                            },
                            {
                                id: 5,
                                order: 3,
                                name: "Les variables",
                                slug: "variables",
                                children: [],
                                chapters: [
                                    {id: 1, order: 1, name: "Introduction"},
                                    {id: 2, order: 2, name: "Les tableaux"},
                                    {id: 3, order: 3, name: "Les objets"},
                                    {id: 4, order: 4, name: "Les closures"},
                                    {id: 5, order: 5, name: "Les collections"},
                                    {id: 6, order: 6, name: "Exercices"},
                                ]
                            }
                        ],
                        chapters: [
                            {id: 1, order: 1, name: "Introduction"},
                            {id: 2, order: 2, name: "Les variables"},
                            {id: 3, order: 3, name: "Les fonctions"},
                            {id: 4, order: 4, name: "Branchements"},
                            {id: 5, order: 5, name: "Exceptions"},
                            {id: 6, order: 6, name: "Exercices"},
                        ]
                    },
                    {
                        id: 6,
                        order: 2,
                        name: "L'API fetch'",
                        slug: "fetch-api",
                        children: [],
                        chapters: [
                            {id: 1, order: 1, name: "Introduction"},
                            {id: 2, order: 2, name: "Les tableaux"},
                            {id: 3, order: 3, name: "Les objets"},
                            {id: 4, order: 4, name: "Les closures"},
                            {id: 5, order: 5, name: "Les collections"},
                            {id: 6, order: 6, name: "Exercices"},
                        ]
                    }
                ],
                chapters: []
            },
        ]
    },
    {
        id: 2,
        name: "HTML",
        slug: "html",
        technologies: [
            {id: 3, name: "HTML"},
        ],
        categories: []
    },
    {
        id: 3,
        name: "CSS",
        slug: "css",
        technologies: [
            {id: 4, name: "CSS"},
            {id: 5, name: "SCSS"},
        ],
        categories: []
    },
    {
        id: 4,
        name: "PHP",
        slug: "php",
        technologies: [
            {id: 6, name: "PHP"},
        ],
        categories: []
    }
]

export function findAllCourses(){
    return courses.map(value => Course.from(value))
}

export function findCourse(id: number){
    const course = courses.find(course => course.id === id)
    if(course === undefined) return null;
    else return Course.from(course)
}