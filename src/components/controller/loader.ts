type Options = {
    [key: string]: string | number
}
class Loader {
    private baseLink: string;
    private options: Options
    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<data>(
        { endpoint, options = {} }: {endpoint: string, options?: Options},             //Это один объъйкт 
        callback:(data:data) => void = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {                   //Вернуть,что бы не словить ошибку
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<data>(method: 'GET' | 'POST', endpoint: string, callback: (data: data) => void, options: Options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;