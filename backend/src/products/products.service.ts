import { Injectable, NotFoundException } from "@nestjs/common";
import {Product} from './product.model';

@Injectable()
export class ProductsService {
    private products: Product[]= [];

    insertProduct(title: string, desc: string, price: number){
        const prodId= Math.random().toString()
        const newProduct =new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId;
    }


    getProducts(){
        return [...this.products]
    }

    getSingleProducts(productId: string){
       const product=this.findProduct(productId)[0]
        return {...product}
    }

    updateProduct(productId: string, title: string, desc: string, price: number){
        const [product,index]=this.findProduct(productId)
        const updatedProduct={...product}
        if(title)
            updatedProduct.title=title
        if(desc)
            updatedProduct.description=desc
        if(price)
            updatedProduct.price=price

        this.products[index]=updatedProduct
    }

    deleteProduct(prodId: string){
        const index= this.findProduct(prodId)[1]
        this.products.slice(index,1)
    }

    private findProduct(id: string):[Product,number]{
        const productIndex=this.products.findIndex((prod)=>prod.id === id)
        const product=this.products.find((prod)=>prod.id === id)
        if(!product){
            throw new NotFoundException('counldn t find the product')
        }
        return [product, productIndex];
    }
}