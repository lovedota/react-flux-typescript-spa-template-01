interface IPageView {
    url: string;
    title: string;
    data: any;
}

class PageService {
    private _pages = new Map<string, IPageView>();

    public getPages() {
        const result = [];

        this._pages.forEach((value) => {
            result.push(value);
        });

        return result;
    }

    public getPageData(url: string, title: string, store) {
        const page = this._pages.get(url);

        if (page) {
            store.data = Object.assign({}, page.data);
        } else {
            this.setPageData(url, title, store.data);
        }
    }

    public setPageData(url: string, title: string, data: any) {
        this._pages.set(url, {
            url,
            title,
            data: Object.assign({}, data)
        });
    }
}

export default new PageService();
