import {OrderMenu} from './orderMenu';

export interface Order {
    id: Number;
    userId:Number;
    price:Number;
    address:String;
    createAt:Date;
    orderMenus: Array<OrderMenu>;

}