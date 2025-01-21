import products from '../database/products.json';
import inventory from '../database/inventory.json';

export const getProducts = (): Promise<typeof products> => 
    new Promise((resolve) => setTimeout(() =>  resolve(products), 1500))

export const getInventory = (): Promise<typeof inventory> => 
    new Promise((resolve) => setTimeout(() =>  resolve(inventory), 1500))