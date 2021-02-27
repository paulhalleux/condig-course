export default class Waypoint{

    private readonly _element: Element
    private readonly _id: string
    private readonly _callback: () => void

    constructor(element: HTMLDivElement|any, id: string, callback: () => void) {
        this._element = element
        this._id = id
        this._callback = callback

        this.init()
    }

    private init(){
        const element = document.getElementById(this._id)
        this._element.addEventListener('scroll', () => {
            if(isInViewport(element)){
                this._callback()
            }
        })
    }

}

function isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}