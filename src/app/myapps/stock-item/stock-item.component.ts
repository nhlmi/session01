import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public stock!: Stock;

  public stockClasses: any;
  public stockStyles: any;

  public stocks: Array<Stock> = [];

  /* public name!: string;
  public code!: string;
  public price!: number;
  public previousPrice!: number;
  public positiveChange!: boolean;
  public favourite!: boolean;
 */

  //initial value
  constructor(){
  }

  //web hook start initialisationa
  ngOnInit():void{
    //this.stock = new Stock('test', 'tst', 90, 80, true);

    this.stocks =[
      new Stock('first', 'tst', 90, 80, true),
      new Stock('second', 'ssc', 10, 50, true),
      new Stock('third', 'ttsc', 190, 20, false),
      new Stock('fourth', 'fsc', 70, 80, true)
    ];

    //ngclass
    /* let diff = (this.stock.price/this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.01;
    this.stockClasses ={
      "positive": this.stock.isPositiveChange(),
      "negative": !this.stock.isPositiveChange(),
      "large-change": largeChange,
      "small-change": !largeChange
    } */

    //ngstyles
    /* this.stockStyles ={
      "color": this.stock.isPositiveChange() ? "green": "red",
      "font-size": largeChange ? "1.2em" : ".8em"
    } */

    // this.name = "test";
    // this.code = "tst";
    // this.price = 87;
    // this.previousPrice = 80;
    // this.positiveChange = this.price >= this.previousPrice;
    // this.favourite = false;
  }

  toggleFavourite(event: any, index: any){
    console.log('we have toggling the favourite button with event', index, event);
    //this.stock.favourite = !this.stock.favourite;

    this.stocks[index].favourite = !this.stocks[index].favourite;
    // this.favourite = !this.favourite;
  }

  trackStockByCode(index: any, stock: any){
    return stock.code;
  }

}
