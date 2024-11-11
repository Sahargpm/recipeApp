

export class Item {

  
  private _id: string;
  private _title: string;
  private _imageUrl: string;
  private _status: boolean=false;

  constructor(id: string, title: string, imageUrl: string, status: boolean) {
    this._id = id;
    this._title = title;
    this._imageUrl = imageUrl;
    this._status = status;
  }



  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

 
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }


  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }

  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }

  toggleStatus(): void {
    this._status = !this._status;
  }

  
  getItemInfo(): string {
    return `ID: ${this._id}, Title: ${this._title}, Image URL: ${this._imageUrl}, Status: ${this._status}`;
  }
}


