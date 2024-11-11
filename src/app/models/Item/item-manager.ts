
import { Item } from './Item';



export class ItemManager {


  private _items: Item[] = [];
  private _selectedItem: number=0;


  constructor()
  {
      this._items=[];

  }

  setItems(items: Item[]): void {
    this._items = items;
  }

  addItem(item: Item): void {
    this._items.push(item);
  }

  toggleItemStatusById(id: string): void {
    const item = this._items.find(item => item.id === id);
    if (item) {
      item.status = !item.status;
    }
  }

  removeItemById(id: string): void {
    this._items = this._items.filter(item => item.id !== id);
  }

  getItems(): Item[] {
    return this._items;
  }


  setSelectedItemByIndex(index:number):void{
           
     this._selectedItem=index;
     
  }

    getSelectedItem():Item|undefined{
           
            if(this._items.length>0)          
        return this._items[this._selectedItem];
            else
            {
              return undefined;
            }

    }

    getItemIndexById(id: string): void {

       const newSelected:number=this._items.findIndex(item => item.id === id);

               this._selectedItem=newSelected;
               console.log(this._selectedItem);

    }

    getSelectedItemIndex():number{
           
     return this._selectedItem;

}

filterItemsByTwoCharMatch(input: string): Item[] {
  const inputLwer = input.toLowerCase(); 

  const matchedItems: Item[] = this._items.filter(item => {
      const name = item.title.toLowerCase(); 

      return name.includes(inputLwer);
  });

  return matchedItems.length > 0 ? matchedItems : [];
}


inlilized():void{

  this._selectedItem=0;
}
removeall():void{
  this._items=[];
}


}
