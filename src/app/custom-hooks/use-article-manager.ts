import { useEffect, useState } from "react";
import { fetchArticles } from "../api-services/fetch-articles";
import ArticleManager from "../models/article/article-manager";
import Article from "../models/article/article";

const useArticleManager = () => {
   
    const [articleManager, setArticleManager] = useState<ArticleManager>(new ArticleManager([]));
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
     
        const loadArticles = async () => {
            try {
              
                setLoading(true);
                const articles:Article[] = await fetchArticles(); 
                //  console.log("hook is here in hook manager ")
                //  console.log(articles);
                setArticleManager(new ArticleManager(articles))
                console.log(articleManager);
                setLoading(false);
            
            
            } catch (err) {
                setError("Failed to load articles");
                setLoading(false);
                console.error(err); // Log the error for debugging
            }
        };

        loadArticles();
    }, []); // Empty dependency array so it only runs once

    return { articleManager, loading, error }; // Return the state for usage in components
};

export default useArticleManager;
