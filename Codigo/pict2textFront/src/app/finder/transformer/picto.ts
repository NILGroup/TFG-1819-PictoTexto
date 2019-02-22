export class Picto{
    id:number;
    url:string;
    keyword:string;
    keywords:[]
    attrs:{}
    constructor(id,url,keyword){
        this.id=id;
        this.url=url;
        this.keyword=keyword;
    }
}