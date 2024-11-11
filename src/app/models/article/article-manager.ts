import Article from "./article";

class ArticleManager {
 
    private _articles: Article[];

    constructor(aritcle:Article[]) {
        
        this._articles =aritcle;
    }

   
  
    addArticles(newArticles: Article[]): void {
        this._articles=newArticles;
    }

    getArticles(): Article[]{
        return this._articles;
    }
 
    ///i will hanlde all bussines logic related to article object here in future 

}


export default ArticleManager;