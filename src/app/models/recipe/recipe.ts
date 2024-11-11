import Instructions from "../instructions/instruction";
import { Ingredient } from "../ingredient/ingredient";
import Tags from "../tag/tag";

export class FoodRecipe {
    private _name: string;
    private _ingredients?: Ingredient[];
    private _tags?: Tags;  
    private _instructions?:Instructions[];

    constructor(
        name: string,
        ingredients?: Ingredient[],
        instructions?:Instructions[],
        tags?: Tags 
    )
     {
        this._name = name;
        this._ingredients = ingredients;
       this._instructions=instructions;
        this._tags = tags;  
    }


    public getName(): string {
        return this._name;
    }

    public getIngredients(): Ingredient[] | undefined {
        return this._ingredients;
    }

    public getInstructions(): Instructions[] | undefined {
        return this._instructions;
    }

    public getTags(): Tags | undefined {
        return this._tags;
    }

   
    public setName(name: string): void {
        this._name = name;
    }

    public setIngredients(ingredients: Ingredient[]): void {
        this._ingredients = ingredients;
    }

    public setInstructions(instructions: Instructions[]): void {
        this._instructions = instructions;
    }

    public setTags(tags: Tags): void {
        this._tags = tags;
    }

 
}
