export class Picto{
    id:number;
    url:string;
    keywords:[]
    
    constructor(data){
        this.id=data.id;
        this.url=data.url;
    }
}