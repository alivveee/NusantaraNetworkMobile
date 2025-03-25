// Definisi tipe untuk produk
export interface Product {
  id: string;
  name: string;
  quantity: number;
}

// Definisi tipe untuk produk yang tersedia untuk dipilih
export interface AvailableProduct {
  id: string;
  name: string;
}
