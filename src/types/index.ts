// Type definitions for the application

export type UserRole = 'admin' | 'seller' | 'buyer';

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface User {
  id: string;
  nama: string;
  email: string;
  phone: string;
  role: UserRole;
  foto?: string;
  alamat: string;
  blok_rumah: string;
  created_at: string;
  updated_at: string;
}

export interface Store {
  id: string;
  user_id: string;
  nama_toko: string;
  deskripsi: string;
  foto: string;
  nomor_whatsapp: string;
  lokasi: string;
  jam_operasional: string;
  status_buka: boolean;
  status_approved: boolean;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  nama: string;
  icon: string;
  created_at: string;
}

export interface Product {
  id: string;
  store_id: string;
  category_id: string;
  nama: string;
  harga: number;
  deskripsi: string;
  stok: number;
  foto: string[];
  estimasi_proses: number;
  tersedia: boolean;
  created_at: string;
  updated_at: string;
}

export interface CartItem {
  product_id: string;
  quantity: number;
  harga: number;
}

export interface Address {
  id: string;
  user_id: string;
  nama: string;
  hp: string;
  blok: string;
  alamat: string;
  catatan?: string;
  is_default: boolean;
  created_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  store_id: string;
  status: OrderStatus;
  total: number;
  metode_pembayaran: 'cod' | 'transfer' | 'qris';
  alamat_pengiriman: string;
  catatan: string;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  harga: number;
  subtotal: number;
}

export interface Review {
  id: string;
  product_id: string;
  user_id: string;
  rating: number;
  komentar: string;
  created_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'order' | 'store' | 'promo' | 'system';
  read: boolean;
  created_at: string;
}

export interface Banner {
  id: string;
  title: string;
  image: string;
  link?: string;
  is_active: boolean;
  created_at: string;
}

export interface DeliveryArea {
  id: string;
  name: string;
  description: string;
  is_active: boolean;
  created_at: string;
}
