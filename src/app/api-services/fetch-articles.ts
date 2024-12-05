import Article from "../models/article/article";

const endpoint = 'https://holy-talent-82761239dc.strapiapp.com/graphql';

const query = `
  query {
    articles {
      title,
      article,
      poster {
        url
      }
    }
  }
`;

export const fetchArticles = async (): Promise<Article[]> => {
    try {
        const response = await fetch(endpoint, {
           
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
          
            body: JSON.stringify({ query }),
        });

        if (!response.ok) {
           
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log("Articles fetched successfully");

        const json = await response.json(); 
        const articlesData = json.data.articles; 
        console.log("article dara "+articlesData);
        
          const articles:Article[]= articlesData.map((a:any)=>{
                       
            return new Article(a.title,a.article,a.poster.url); 

           })

        return articles;

    } catch (error) {
        console.error('Failed to fetch articles:', error);
        return []; 
    }
};

export default fetchArticles;
