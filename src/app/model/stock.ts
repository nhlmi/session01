export class Stock {
    favourite : boolean = false;

    constructor(
        public name: string
        ,public code: string
        ,public price: number
        ,public previousPrice: number
        ,public status: boolean = false
    ){}

    isPositiveChange(): boolean{
        return this.price >= this.previousPrice;
    }
}

