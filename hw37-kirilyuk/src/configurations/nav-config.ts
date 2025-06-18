import {Paths} from "../utils/paths.ts";
import type {RouteType} from "../utils/shop-types.ts";

export const navItems:RouteType[] = [
    {path: Paths.HOME, title: 'Home'},
    {path: Paths.ORDER, title: 'Orders'},
    {path: Paths.CART, title: 'Shopping Cart'},
    {path: Paths.CUSTOMERS, title: 'Customers'},
    {path: Paths.PRODUCTS, title: 'Products'}
]

export const productItems:RouteType[] = [
    {path: Paths.BREAD, title: 'Bread'},
    {path: Paths.DAIRY, title: 'Dairy'},

]

