export type TechnologyInterface = {
    id: number
    name: string
}

export default class Technology{

    private readonly _id: number
    private readonly _name: string

    constructor(id: number, name: string) {
        this._id = id
        this._name = name
    }

    public get id(){
        return this._id
    }

    public get name(){
        return this._name
    }

}