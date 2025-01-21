export interface InventoryItem {
    // id: number;
    product_id: number;
    quantity: number;
    rating?: number;
  }
  
  export interface ProcessedData {
    productName: string;
    description: string;
    price: number;
    totalQuantity: number;
    totalPrice: number;
    averageRating: number;
  }
  