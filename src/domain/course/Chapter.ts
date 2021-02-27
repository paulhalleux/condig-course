import Category from "./Category";

export type Chapternterface = {
    id: number
    order: number
    name: string
}

export default class Chapter{

    private readonly _id: number
    private readonly _order: number
    private readonly _name: string
    private readonly _category: Category

    private constructor(id: number, order: number, name: string, category: Category) {
        this._id = id
        this._order = order
        this._name = name
        this._category = category
    }

    public static from(category: Category, chapter: {id: number, order: number, name: string}){
        return new Chapter(chapter.id, chapter.order, chapter.name, category)
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

    public get category(){
        return this._category
    }

}