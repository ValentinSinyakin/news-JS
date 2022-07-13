import { EverythingResponse, SourcesResponse } from '../helpers/types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news: News; 
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }
   

    drawNews(data: EverythingResponse) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
        ///EverythingResponse
    }

    drawSources(data: SourcesResponse) {      ///Експортировать 
        const values = data?.sources ? data?.sources : [];    //data art
        this.sources.draw(values);
        
    }
}

export default AppView;
