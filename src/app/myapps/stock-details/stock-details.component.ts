import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChange, OnChanges, OnDestroy, DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit, SimpleChanges, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDetailsComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit{

  //input decorator member variable
  @Input() public stock!: Stock;
  @Output() 
  private toggleFavourite!: EventEmitter<Stock>;

  constructor(){
    this.toggleFavourite = new EventEmitter<Stock>();
  }

  onToggleFavourite(event: any){
    this.toggleFavourite.emit(this.stock);
  }

  changeStockPrice(){
    this.stock.price += 5;
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

  ngOnInit(): void {
    console.log("app component - on init")
  }

}
