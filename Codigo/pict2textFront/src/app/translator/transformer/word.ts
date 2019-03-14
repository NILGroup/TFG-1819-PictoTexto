export class Word{
    keyword:string;
    keywords:[]
    attrs:{}
    constructor(keyword, attrs){
        this.attrs=attrs;
        this.keyword=keyword;
    }
}