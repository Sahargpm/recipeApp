class Article {


    private _title?: string;
    private _article?: string;
    private _poster?: string;

    public  constructor(title?: string, article?: string, poster?: string) {

        this._title = title;
        this._article = article;
        this._poster = poster;
    }

  public  get title(): string|undefined {

        return this._title;
    
    }

    public  set title(value: string) {

        
        this._title = value;
    }

    public   get article(): string |undefined {
        return this._article;
    }

    public   set article(value: string) {
        this._article = value;
    }


    public  get poster(): string |undefined{
        return this._poster;
    }

  public  set poster(value: string) {
        this._poster = value;
    }
}


export default Article;