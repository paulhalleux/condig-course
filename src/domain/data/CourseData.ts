import Course from "../../domain/course/Course";
import Chapter from "../course/Chapter";
import Section from "../section/Section";

const courses = [
    {
        id: 1,
        name: "Javascript",
        slug: "javascript",
        technologies: [
            {id: 1, name: "Javascript"},
            {id: 2, name: "jQuery"},
            {id: 7, name: "Node"},
            {id: 8, name: "Mocha"},
            {id: 9, name: "Webpack"},
            {id: 10, name: "Babel"},
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
                                ]
                            },
                            {
                                id: 4,
                                order: 2,
                                name: "Les fonctions",
                                slug: "functions",
                                children: [],
                                chapters: [
                                    {id: 2, order: 1, name: "Introduction"},
                                ]
                            },
                            {
                                id: 5,
                                order: 3,
                                name: "Les variables",
                                slug: "variables",
                                children: [],
                                chapters: [
                                    {id: 3, order: 1, name: "Introduction"},
                                ]
                            }
                        ],
                        chapters: [
                            {id: 4, order: 1, name: "Introduction"},
                            {id: 5, order: 2, name: "Les variables"},
                            {id: 6, order: 3, name: "Les fonctions"},
                            {id: 7, order: 4, name: "Les branchements"},
                            {id: 8, order: 5, name: "Les exceptions"},
                            {id: 9, order: 6, name: "Exercices"},
                        ]
                    },
                    {
                        id: 6,
                        order: 2,
                        name: "L'API fetch",
                        slug: "fetch-api",
                        children: [
                            {
                                id: 7,
                                order: 1,
                                name: "Exécuter des reqiêtes HTTP",
                                slug: "execute-http-request",
                                children: [],
                                chapters: [
                                    {id: 10, order: 1, name: "Introduction"},
                                ]
                            },
                            {
                                id: 8,
                                order: 1,
                                name: "Donner un coprs à une requête",
                                slug: "request-body",
                                children: [],
                                chapters: [
                                    {id: 11, order: 1, name: "Introduction"},
                                ]
                            }
                        ],
                        chapters: [
                            {id: 12, order: 1, name: "Introduction"},
                        ]
                    }
                ],
                chapters: []
            },
            {
                id: 9,
                order: 1,
                name: "jQuery",
                slug: "jquery",
                children: [
                    {
                        id: 10,
                        order: 1,
                        name: "Les bases de la librairie",
                        slug: "jquery-basics",
                        children: [
                            {
                                id: 11,
                                order: 1,
                                name: "Les sélecteurs",
                                slug: "jquery-selectors",
                                children: [],
                                chapters: [
                                    {id: 13, order: 1, name: "Introduction"},
                                ]
                            }
                        ],
                        chapters: [
                            {id: 14, order: 1, name: "Introduction"},
                        ]
                    },
                    {
                        id: 12,
                        order: 1,
                        name: "Aller plus loin",
                        slug: "deeper-jquery",
                        children: [],
                        chapters: []
                    }
                ],
                chapters: []
            }
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

const sections = [
    {
        id: 1,
        chapter: 4,
        order: 1,
        title: null,
        type: "info",
        typeConfig: null,
        copyable: false,
        content: "Dans ce chapitre vont être présentés les éléments suivants concernant la syntaxe de base de\n" +
            "                            JavaScript:\n" +
            "                            <ul>\n" +
            "                                <li>histoire et comparaison de JavaScript vs Java</li>\n" +
            "                                <li>les différents types de variables</li>\n" +
            "                                <li>la déclaration de variables et leurs portées</li>\n" +
            "                                <li>les fonctions (anonymes, fléchées, imbriquées, génératrices, ...)</li>\n" +
            "                                <li>les concepts de \"hoisting\" et le mode \"strict\"</li>\n" +
            "                                <li>les structures de contrôles</li>\n" +
            "                                <li>les exceptions</li>\n" +
            "                            </ul>"
    },
    {
        id: 2,
        chapter: 4,
        order: 2,
        title: "1.1 Histoire brève de JavaScript",
        type: "text",
        typeConfig: null,
        copyable: true,
        content: "Sans rentrer trop dans les détails, voici quelques étapes clés de l'histoire du langage\n" +
            "                        JavaScript:\n" +
            "\n" +
            "                        <ul><li>1995: Brendan Eich, employé de Netscape, conçoit un nouveau langage de script côté serveur,\n" +
            "                        LiveScript, en s'inspirant, tout en simplifiant, la syntaxe de Java. Netscape, en partenariat\n" +
            "                        avec Sun Microsystems, adapte le langage pour une version côté client et le publie sous le nom\n" +
            "                            de JavaScript pour profiter de la popularité croissante auprès des développeurs du nom \"Java\".</li>\n" +
            "                        <li>1996: Microsoft, grand concurrent, lance Jscript</li>\n" +
            "                        <li>1997: A la demande de Netscape, l'ECMA standardise la première version du langage sous\n" +
            "                            l'appellation ECMAScript (ES)</li>\n" +
            "                        <li>…</li>\n" +
            "                        <li>2009: ECMAScript 5 apporte entre autres, le support de JSON, le mode strict, les accesseurs et\n" +
            "                            des fonctions supplémentaires de manipulation de tableaux</li>\n" +
            "                        <li>2015: ECMAScript 6 apporte des fonctionnalités devenues incontournables comme les modules, les\n" +
            "                            classes, les promesses, ...</li>\n" +
            "                        <li>2016: A partir de 2015, l'ECMA prévoit de publier une nouvelle version presque chaque année.\n" +
            "                        ECMAScript 7 apporte seulement une méthode \"include\" aux tableaux pour vérifier si une valeur\n" +
            "                            existe et l'opérateur mathématique exposant : \"**\"</li>\n" +
            "                        <li>2017: ECMAScript 8 apporte quelques simplifications syntaxiques dont notamment \"async/await\"\n" +
            "                            pour la conception de fonctions asynchrones</li></ul>\n"
    },
    {
        id: 3,
        chapter: 5,
        order: 1,
        title: null,
        type: "code",
        typeConfig: {
            description: "En java",
            language: "java",
            copyable: false,
            numbered: false
        },
        copyable: true,
        content: "String s = \"ABC\";\n" +
            "s.toLowerCase(); //s n'est pas modifié, toLowerCase() retourne une nouvelle chaine\n" +
            "System.out.printf(\"Valeur de s: %s%n\", s); //Valeur de s: ABC\n" +
            "s = s.toLowerCase(); //la valeur de s est remplacée par une autre chaine\n" +
            "System.out.printf(\"Valeur de s: %s%n\", s); //Valeur de s: abc"
    },
    {
        id: 4,
        chapter: 5,
        order: 2,
        title: null,
        type: "code",
        typeConfig: {
            language: "javascript",
            copyable: false,
            numbered: false
        },
        copyable: true,
        content: "let s = \"ABC\";\n" +
            "s.toLowerCase(); //s n'est pas modifié, toLowerCase() retourne une nouvelle chaine\n" +
            "console.log(`Valeur de s: ${s}`); //Valeur de s: ABC\n" +
            "s = s.toLowerCase(); //la valeur de s est remplacée par une autre chaine\n" +
            "console.log(`Valeur de s: ${s}`); //Valeur de s: abc"
    }
]

export function findChapterSections(chapter: Chapter){
    return sections.filter(section => section.chapter === chapter.id)
        .sort((a, b) => a.order - b.order)
        .map(section => Section.from(section))
}

export function findAllCourses(){
    return courses.map(value => Course.from(value))
}

export function findCourse(id: number){
    const course = courses.find(course => course.id === id)
    if(course === undefined) return null;
    else return Course.from(course)
}