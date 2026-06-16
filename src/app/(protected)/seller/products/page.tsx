import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function SellerProductsPage() {
  const products = [
    { id: 1, nama: 'Nasi Goreng', harga: 25000, stok: 50 },
    { id: 2, nama: 'Mie Ayam', harga: 15000, stok: 30 },
    { id: 3, nama: 'Soto Ayam', harga: 20000, stok: 0 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Produk Saya</h1>
        <Button asChild className="bg-primary-500 hover:bg-primary-600">
          <Link href="/seller/products/new">➕ Tambah Produk</Link>
        </Button>
      </div>

      <Card>
        <table className="w-full">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="text-left p-4">Nama Produk</th>
              <th className="text-left p-4">Harga</th>
              <th className="text-left p-4">Stok</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{product.nama}</td>
                <td className="p-4">Rp {product.harga.toLocaleString('id-ID')}</td>
                <td className="p-4">{product.stok} unit</td>
                <td className="p-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded ${
                    product.stok > 0 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.stok > 0 ? 'Tersedia' : 'Stok Habis'}
                  </span>
                </td>
                <td className="p-4 space-x-2">
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/seller/products/${product.id}/edit`}>Edit</Link>
                  </Button>
                  <button className="px-3 py-1 text-sm border border-red-300 text-red-600 rounded hover:bg-red-50">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
