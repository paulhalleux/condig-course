import Category, {CategoryInterface} from "./Category";
import Technology, {TechnologyInterface} from "../technology/Technology";

export default class Course{

    private readonly _id: number
    private readonly _name: string
    private readonly _slug: string
    private readonly _technologies: Technology[]
    private readonly _categories: Category[]

    private constructor(id: number, name: string, slug: string, technologies: TechnologyInterface[], categories: CategoryInterface[]) {
        this._id = id
        this._name = name
        this._slug = slug
        this._technologies = []
        this._categories = []

        categories.forEach(category => {
            this._categories.push(Category.from(this, category))
        })
        technologies.forEach(technology => {
            this._technologies.push(new Technology(technology.id, technology.name))
        })
    }

    public static from(course: {id: number; name: string; slug: string; technologies: TechnologyInterface[]; categories: CategoryInterface[]}){
        return new Course(course.id, course.name, course.slug, course.technologies, course.categories)
    }

    public get id(){
        return this._id
    }

    public get name(){
        return this._name
    }

    public get slug(){
        return this._slug
    }

    public get technologies(){
        return this._technologies
    }

    public get categories(){
        return this._categories
    }

    public getFirstCategory(){
        let cat: Category|null = null;
        this.categories.forEach(category => {
            if(cat === null)
                if (category.hasChapters()) cat = category
                else if (category.hasChildren()) cat = this.hasChapters(category)
        })
        return cat
    }

    private hasChapters(category: Category){
        let cat: Category|null = null
        category.children.forEach(child => {
            if(cat === null)
                if(child.hasChapters()) cat = child
                else cat = this.hasChapters(child)
        })
        return cat;
    }

}