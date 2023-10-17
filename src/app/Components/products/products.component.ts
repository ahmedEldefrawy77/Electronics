import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';
import { IProduct } from 'src/app/Module/iproduct';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { count, filter } from 'rxjs';
import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit, OnChanges {

  ProductList: IProduct[];
  ProductWithID: IProduct[] = [];
  CatProducts: IProduct[] = [];
  maxPrice: number = 0;
  @Output() TotalPriceChanged: EventEmitter<string| number>;
  TotalPrice: any;
  @Input() SentedCategoryID: number = 0;

  constructor(private fb: FormBuilder) {
    this.TotalPriceChanged = new EventEmitter<string|number>();
    this.ProductList = [{ id: 1, name: "Lenovo Legion 5Pro", quantity: 5, imgURL: "https://fakeimg.pl/250x100/", categoryID: 300, price: 1300 },
    { id: 1, name: "Lenovo Legion 7Pro", quantity: 8, imgURL: "https://fakeimg.pl/250x100/", categoryID: 300, price: 1900 },
    { id: 2, name: "Lenovo Thinkpad", quantity: 6, imgURL: "https://fakeimg.pl/250x100/", categoryID: 300, price: 900 },
    { id: 3, name: "Galaxy s22", quantity: 1, imgURL: "https://fakeimg.pl/250x100/", categoryID: 200, price: 1250 },
    { id: 4, name: "IPhone 15 Pro", quantity: 2, imgURL: "https://fakeimg.pl/250x100/", categoryID: 200, price: 1450 },
    { id: 5, name: "google Pixel 5", quantity: 3, imgURL: "https://fakeimg.pl/250x100/", categoryID: 200, price: 1100 },
    { id: 6, name: "Nikon", quantity: 4, imgURL: "https://fakeimg.pl/250x100/", categoryID: 400, price: 2200 },
    { id: 7, name: "Canon Z23", quantity: 0, imgURL: "https://fakeimg.pl/250x100/", categoryID: 400, price: 2300 }]

  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.filterProductByID();
  }

  filterProductByID() {
    if (this.SentedCategoryID == 0)
      this.CatProducts = this.ProductList;
    else
      this.CatProducts = this.ProductList.filter(prd => prd.categoryID == this.SentedCategoryID);
  }

  buy(prdID: number, prdPrice: number, countvalue: string) {
    let count: number;
    count = Number(countvalue);

    for (let prd of this.CatProducts) {
      if (prdID == prd.id)
        if (count > prd.quantity)
          this.TotalPrice = "sorry we dont have this Quantity of this item in our Storage";
        else
          this.TotalPrice = prdPrice * count;
    }
    this.TotalPriceChanged.emit(this.TotalPrice);
  }

  search(mxprice: string) {
    let price: number;
    price = Number(mxprice);
    if (this.SentedCategoryID == 0)
      this.CatProducts = this.ProductList.filter(prd => price >= prd.price)
    else
      this.CatProducts = this.ProductList.filter(prd => price >= prd.price && prd.categoryID == this.SentedCategoryID);
  }
}

