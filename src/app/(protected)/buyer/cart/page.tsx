import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

export default function CartPage() {
  const cartEmpty = true;

  if (cartEmpty) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Keranjang Kosong</h1>
        <p className="text-gray-600 mb-8">Mulai belanja dan tambahkan produk ke keranjang Anda</p>
        <Button asChild className="bg-primary-500 hover:bg-primary-600">
          <a href="/products">Lanjut Belanja</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Keranjang Belanja</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <Card>
            <div className="divide-y">
              {[1, 2].map((item) => (
                <div key={item} className="p-6 flex gap-4">
                  <div className="bg-gray-200 w-24 h-24 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">🍜</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Produk Makanan</h3>
                    <p className="text-sm text-gray-600">Toko Makanan Enak</p>
                    <p className="text-primary-500 font-bold mt-2">Rp 25.000</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-2 py-1 border border-gray-300 rounded">-</button>
                    <input type="number" value="1" className="w-12 text-center border border-gray-300 rounded" />
                    <button className="px-2 py-1 border border-gray-300 rounded">+</button>
                  </div>
                  <button className="text-red-500 hover:text-red-700">Hapus</button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Checkout Summary */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <h2 className="font-semibold text-lg">Ringkasan Pesanan</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rp 50.000</span>
              </div>
              <div className="flex justify-between">
                <span>Ongkir</span>
                <span>Rp 10.000</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="text-primary-500">Rp 60.000</span>
              </div>
              <Button className="w-full bg-primary-500 hover:bg-primary-600">
                Lanjut ke Checkout
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
