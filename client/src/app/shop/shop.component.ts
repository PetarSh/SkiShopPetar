import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
products:IProduct[];

  constructor(private shopService:ShopService) { }

  ngOnInit(): void {
    this.shopService.getProducts().subscribe(responce=>{
      this.products=responce.data;
    },error=>{
      console.error();
    })
  }

}
