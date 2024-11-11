class Tags {

    private _price: string;
    private _pax: string;
    private _cookTime: string;
    private _cuisineType: string;
    private _difficulty:string

    constructor(price: string, pax: string,cookTime: string, cuisineType: string, difficulty:string) {
        this._price =price;
        this._pax = pax;
        this._cookTime = cookTime;
        this._cuisineType = cuisineType;
        this._difficulty = difficulty;
    }


    public get price(): string {
        return this._price;
    }

    public set price(value: string) {
       
        this._price = value;
    }


    public get pax(): string {
        return this._pax;
    }

    public set pax(value: string) {
       
        this._pax = value;
    }

 

    public get cookTime(): string {
        return this._cookTime;
    }

    public set cookTime(value: string) {
       
        this._cookTime = value;
    }

    public get cuisineType(): string {
        return this._cuisineType;
    }

    public set cuisineType(value: string) {
       
        this._cuisineType = value;
    }

    public get difficulty(): string {
        return this._difficulty;
    }

    public set difficulty(value: string) {
        this._difficulty = value;
    }
}


export default Tags;