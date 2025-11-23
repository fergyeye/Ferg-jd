export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  tags?: string[];
  reviews: number;
  rating: number;
  shopName: string;
  isSelfOperated?: boolean; // "JD Self-operated"
}

export interface Category {
  id: string;
  name: string;
  iconColor: string;
  iconName: string; // Mapping key for icon component
}

export enum Tab {
  HOME = 'home',
  CATEGORY = 'category',
  CART = 'cart',
  MY_JD = 'my_jd'
}