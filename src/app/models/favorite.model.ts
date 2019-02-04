export class Favorite {

    public id: string;
    public name: string;
    public brand: string;
    public brandImage: string;
    public kind: string;
    public kindImage: string;

    constructor( id: string, name: string, brand: string, brandImage: string, kind: string, kindImage: string) {

        this.id         = id;
        this.name       = name;
        this.brand      = brand;
        this.brandImage = brandImage;
        this.kind       = kind;
        this.kindImage  = kindImage;
    }
}