import BaseContainer from "@/app/common-components/base-container/base-container";
import TagContainer from "@/app/common-components/tag-container/tag-container";
import * as styles from "@/app/components/health/health.css";
import useArticleManager from "@/app/custom-hooks/use-article-manager";
import Blogs from "@/app/common-components/blog/blog";
import Article from "@/app/models/article/article";
import Loading from "@/app/common-components/loading/loading";

const Health = () => {
    const { articleManager, loading, error } = useArticleManager();

    console.log(articleManager.getArticles());

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <h6>Error loading articles: {error}</h6>;
    }

    const articles = articleManager.getArticles();

    return (
        <BaseContainer className={styles.wrapper}>
            
            {articles.map((article: Article, index) => {
           
                const posterPosition = index % 2 === 0 ? 'right' : 'left';

                return (

                    <TagContainer 
                        postion="start"
                        key={index} 
                        container="blog"
                        wrapperClass={styles.tagContainerwrapper}
                        layout="V"
                        title={article.title!}
                    >
                        <Blogs posterPostion={posterPosition} blog={article} />
                    </TagContainer>
                );
            })}
        </BaseContainer>
    );
};

export default Health;
