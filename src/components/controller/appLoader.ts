import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '6a713baa1b8f452494d57fc3f2cb981c', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
