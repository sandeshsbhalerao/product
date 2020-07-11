import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component ({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List!';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string; 
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value:string){
        this._listFilter=value;
        this.fliteredProducts= this.listFilter ? this.performFilter(this.listFilter) : this.products;  //if modified filtervalue is there then perform filter or else display all the products
    }
    fliteredProducts: IProduct[];
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Mimeo Digital",
            "productCode": "code-001",
            "releaseDate": "May 1, 2020",
            "description": "Its my first product in my 1st angular project",
            "price": 100.10,
            "starRating":  2.1,
            "imageUrl": "assets/images/garden_cart.png"
        },

        {
            "productId": 2,
            "productName": "Mimeo Photos",
            "productCode": "code-010",
            "releaseDate": "April 1, 2020",
            "description": "Its my 2nd product in my 1st angular project",
            "price": 10.10,
            "starRating":   4.6,
            "imageUrl": "assets/images/hammer.png"  
        }
            
    ];

    constructor(private productService: ProductService) {
     
    }

    onRatingClicked(message: string): void{
        this.pageTitle= 'Product List: ' +message;
    }

    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy)   !== -1);
        ;
    }
    
    toggleImage(): void{
        this.showImage= !this.showImage;
    }
         
      ngOnInit(): void {
      this.productService.getProducts().subscribe({
          next: products => { 
              this.products = products;
              this.fliteredProducts = this.products;
          },
          error: err => this.errorMessage = err           
      });
      
      }

}