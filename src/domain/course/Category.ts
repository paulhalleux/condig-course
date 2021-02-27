import Chapter, {Chapternterface} from "./Chapter";
import Course from "./Course";

export type CategoryInterface = {
    id: number
    parent?: number
    order: number
    name: string
    slug: string
    children: CategoryInterface[]
    chapters: Chapternterface[]
}

export default class Category{

    private readonly _id: number
    private readonly _order: number
    private readonly _name: string
    private readonly _slug: string
    private readonly _course: Course
    private readonly _children: Category[]
    private readonly _chapters: Chapter[]

    private constructor(id: number, order: number, name: string, slug: string, course: Course, children: CategoryInterface[], chapters: Chapternterface[]) {
        this._id = id
        this._order = order
        this._name = name
        this._slug = slug
        this._course = course
        this._children = []
        this._chapters = []

        chapters.forEach(chapter => {
            this._chapters.push(Chapter.from(this, chapter))
        })
        children.forEach(cat => {
            this._children.push(Category.from(course, cat))
        })
    }

    public static from(course: Course, category: {id: number, order: number, name: string, slug: string, children: CategoryInterface[], chapters: Chapternterface[]}){
        return new Category(category.id, category.order, category.name, category.slug, course, category.children, category.chapters)
    }

    public get id(){
        return this._id
    }

    public get order(){
        return this._order
    }

    public get name(){
        return this._name
    }

    public get slug(){
        return this._slug
    }

    public get course(){
        return this._course
    }

    public get children(){
        return this._children
    }

    public get chapters(){
        return this._chapters
    }

    public hasChildren(){
        return this._children.length > 0
    }

    public hasChapters(){
        return this._chapters.length > 0
    }

}