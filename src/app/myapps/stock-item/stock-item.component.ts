import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public stock! : Stock;

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
    this.stock = new Stock('test', 'tst', 85, 80);

    // this.name = "test";
    // this.code = "tst";
    // this.price = 87;
    // this.previousPrice = 80;
    // this.positiveChange = this.price >= this.previousPrice;
    // this.favourite = false;
  }

  toggleFavourite(event: any){
    console.log('we have toggling the favourite button with event', event);
    this.stock.favourite = !this.stock.favourite;

    // this.favourite = !this.favourite;
  }

}
