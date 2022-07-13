import { EverythingResponse, SourcesResponse } from '../helpers/types';
import AppLoader from './appLoader';


class AppController extends AppLoader {
    getSources(callback:(data:SourcesResponse) => void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: MouseEvent, callback: (data: EverythingResponse) => void) {                                       ///События по нажатию мышкой ///Дописать сcalback
        let target = e.target as HTMLSpanElement ; 
        console.log(e.target)
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item'))  {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement ;
        }
    }

}


export default AppController;
