

export class Ingredient {
    private _name: string;
    private _imageUrl: string;
    private _isRequired: boolean;


    constructor(name: string, imageUrl: string, isRequired: boolean) {
        this._name = name;
        this._imageUrl = imageUrl;
        this._isRequired = isRequired;
    }

    
    public getName(): string {
        return this._name;
    }

    public getImageUrl(): string {
        return this._imageUrl;
    }

    public getIsRequired(): boolean {
        return this._isRequired;
    }


    public setName(name: string): void {
        this._name = name;
    }

    public setImageUrl(imageUrl: string): void {
        this._imageUrl = imageUrl;
    }

    public setIsRequired(isRequired: boolean): void {
        this._isRequired = isRequired;
    }

    public getIngredientDetails(): string {
        return `
            Ingredient: ${this._name}
            Image: ${this._imageUrl}
            Required: ${this._isRequired ? "Yes" : "No"}
        `;
    }
}
