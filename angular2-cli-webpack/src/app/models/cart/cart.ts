import {CartItem} from './cart-item';
import {Customer} from '../customer/customer';
import { CustomerAddress } from '../customer/customer-address';
import { Coupon } from "../coupon/coupon";
import { Shipping } from "app/models/shipping/shipping";
import { Service } from "app/models/product-service/product-service";

export class Cart{
  id: string;
  products: CartItem[] = [];
  services: Service[];
  customer: Customer;
  deliveryAddress: CustomerAddress;
  billingAddress: CustomerAddress;
  shipping: Shipping;
  coupons: Coupon[] = [];
  totalProductsPrice: number;
  totalServicesPrice: number;
  totalFreightPrice: number;
  totalDiscountPrice: number;
  totalPurchasePrice: number;
  sessionId: string;
  zipCode: string;

  constructor(object = null){
      if(object) return this.createFromResponse(object);
  }


  createFromResponse(object): Cart{
        let model = new Cart();

        for(var k in object){
            if(k == 'products'){
                model.products = object.products.map(item => item = new CartItem(item));
            }
            else if(k == 'services'){
                model.services = object.services.map(service => service = new Service(service));
            }
            else if(k == 'coupons'){
                model.coupons = object.coupons.map(item => item = new Coupon(item));
            }
            else if(k == 'customer'){
                model.customer = new Customer(object.customer);
            }
            else if(k == 'deliveryAddress'){
                model.deliveryAddress = new CustomerAddress(object.deliveryAddress);
            }
            else if(k == 'billingAddress'){
                model.billingAddress = new CustomerAddress(object.billingAddress);
            }
            else if(k == 'shipping'){
                model.shipping = new Shipping(object[k]);
            }
            else{
                model[k] = object[k];
            }
        }

        return model
  }

}