import { Component, Input, OnInit, Output } from '@angular/core';
import { ICategory } from 'src/app/Module/icategory';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit{
 CategoryList:ICategory[];
 @Output() selectedId:number=0;
 @Input() OrderTotalPrice:string | number = 0;
  constructor(){
this.CategoryList= [{id:200,name:"Mobile"},{id:300,name:"Laptops"},{id:400,name:"Camera"}]
  }
  ngOnInit(): void {
    
  }
  ChangeCatToMobile(){
    this.selectedId = 200;
  }
  ChangeCatToLaptops(){
    this.selectedId = 300;
  }
  ChangeCatToCamera(){
    this.selectedId = 400;
  }
  onTotalPriceChanged(price:string| number){
 this.OrderTotalPrice = price
  }
}
