import AppController from '../controller/controller';
import { SourcesResponse } from '../helpers/types';
import { AppView } from '../view/appView';

class App  {
    private controller: AppController;
    private view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
console.log()
    }
}

export default App;
