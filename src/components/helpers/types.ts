export type Article = {
    author: string;   
    content: string;  
    description: string; 
    publishedAt: string;  
    source: { 
        id: string;    
        name: string;   
    }
    url: string;    
    urlToImage: string;  
    title: string;
}


export type Sources = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export type SourcesResponse = {
    status: 'ok' | 'error',           ////енамки
    sources: Array<Sources> 
}


export type EverythingResponse = {
    status: 'ok' | 'error',
    totalResult: number,
    articles: Array<Article>
}