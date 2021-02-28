export default class Section{

    private readonly _id: number
    private readonly _order: number
    private readonly _title: string|null
    private readonly _content: string
    private readonly _type: string
    private readonly _typeConfig: any
    private readonly _copyable: boolean

    private constructor(id: number, order: number, title: string|null, copyable:boolean, content: string, type: string, typeConfig: {}) {
        this._id = id
        this._order = order
        this._title = title
        this._content = content
        this._type = type
        this._typeConfig = typeConfig
        this._copyable = copyable
    }

    public static from(section: {id: number, chapter: number, order: number, title: string|null, copyable:boolean, content: string, type: string, typeConfig: any}){
        return new Section(section.id, section.order, section.title, section.copyable, section.content, section.type, section.typeConfig)
    }

    get id(): number {
        return this._id;
    }

    get order(): number {
        return this._order;
    }

    get title(): string | null {
        return this._title;
    }

    get content(): string {
        return this._content;
    }

    get type(): string {
        return this._type;
    }

    get typeConfig(): any {
        return this._typeConfig;
    }

    get copyable(): boolean{
        return this._copyable
    }

}