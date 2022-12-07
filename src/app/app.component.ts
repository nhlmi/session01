import { Component, OnInit, ViewEncapsulation, SimpleChange, OnChanges, OnDestroy, DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit, SimpleChanges } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit {
  public stock!: Stock;
  private counter: number = 1;

  ngOnInit(): void{
    this.stock = new Stock("test " + this.counter, "tss", 80, 90, true);
  }

  title = 'Project ABC';

  onToggleFavourite(stock: Stock){
    //console.log("favourite for stock ", this.stock, 'was triggered');
    this.stock.favourite = !this.stock.favourite;
  }

  changeStockObject(){
    this.stock = new Stock("test " + this.counter, "tss", 80, 90, true)
  }
  
  changeStockPrice(){
    this.stock.price += 10;
  }

  onSimpleChange(){
    console.log("");
  }

  ngAfterViewInit(): void {
    console.log("app component - after view init");
  }

  ngAfterViewChecked(): void {
    console.log("app component - after view checked");
  }

  ngAfterContentInit(): void {
    console.log("app component - after content init");
  }

  ngAfterContentChecked(): void {
    console.log("app component - after content checked");
  }

  ngDoCheck(): void {
    console.log("app component - do check");
  }

  ngOnDestroy(): void {
    console.log("app component - on destroy");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("app component - on changes -", changes);
  }

}
