export class Insurance {

    public id: string;
    public name: string;
    public brand: string;
    public brandImage: string;
    public kind: string;
    public kindImage: string;
    public price: string;

    constructor( id: string, name: string, brand: string, brandImage: string, kind: string, kindImage: string, price: string) {

        this.id         = id;
        this.name       = name;
        this.brand      = brand;
        this.brandImage = brandImage;
        this.kind       = kind;
        this.kindImage  = kindImage;
        this.price      = price;
    }
}