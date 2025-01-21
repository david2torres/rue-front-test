import { InventoryItem, ProcessedData } from "../types/inventory";
import { Product } from "../types/product";

const getProductInventory = (inventory: InventoryItem[], productId: number): InventoryItem[] => inventory.filter((item) => item.product_id === productId);
  
  const calculateTotalQuantity = (inventory: InventoryItem[]): number =>
    inventory.reduce((sum, item) => sum + item.quantity, 0);
  
  const calculateTotalPrice = (quantity: number, price: number): number => quantity * price;
  
  const calculateAverageRating = (inventory: InventoryItem[]): number =>
    inventory.reduce((sum, item) => sum + (item.rating || 0), 0) / inventory.length || 0;
  
  const processProduct = (product: Product, inventory: InventoryItem[]): ProcessedData => {
    const productInventory = getProductInventory(inventory, product.id);
    const totalQuantity = calculateTotalQuantity(productInventory);
    const totalPrice = calculateTotalPrice(totalQuantity, product.price);
    const averageRating = calculateAverageRating(productInventory);
  
    return {
      productName: product.product_name,
      description: product.description,
      price: product.price,
      totalQuantity,
      totalPrice,
      averageRating,
    };
  };

  export default processProduct;