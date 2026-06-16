import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Kelola platform Kuliner GSB</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card className="p-6">
          <div className="text-gray-600 text-sm mb-2">Total Pengguna</div>
          <div className="text-3xl font-bold text-primary-500">1,234</div>
          <div className="text-xs text-gray-500 mt-2">+12 minggu ini</div>
        </Card>
        <Card className="p-6">
          <div className="text-gray-600 text-sm mb-2">Total Penjual</div>
          <div className="text-3xl font-bold text-secondary-500">45</div>
          <div className="text-xs text-gray-500 mt-2">Toko aktif</div>
        </Card>
        <Card className="p-6">
          <div className="text-gray-600 text-sm mb-2">Total Pesanan</div>
          <div className="text-3xl font-bold text-green-500">892</div>
          <div className="text-xs text-gray-500 mt-2">Bulan ini</div>
        </Card>
        <Card className="p-6">
          <div className="text-gray-600 text-sm mb-2">Total Omzet</div>
          <div className="text-3xl font-bold text-yellow-500">Rp 25M</div>
          <div className="text-xs text-gray-500 mt-2">Bulan ini</div>
        </Card>
      </div>

      {/* Management Menu */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <Card className="text-center p-6 cursor-pointer hover:shadow-lg transition">
          <div className="text-3xl mb-2">👥</div>
          <h3 className="font-semibold mb-2">Kelola User</h3>
          <Button asChild size="sm" variant="outline" className="w-full">
            <a href="/admin/users">Lihat</a>
          </Button>
        </Card>

        <Card className="text-center p-6 cursor-pointer hover:shadow-lg transition">
          <div className="text-3xl mb-2">🏪</div>
          <h3 className="font-semibold mb-2">Kelola Penjual</h3>
          <Button asChild size="sm" variant="outline" className="w-full">
            <a href="/admin/sellers">Lihat</a>
          </Button>
        </Card>

        <Card className="text-center p-6 cursor-pointer hover:shadow-lg transition">
          <div className="text-3xl mb-2">📦</div>
          <h3 className="font-semibold mb-2">Kelola Produk</h3>
          <Button asChild size="sm" variant="outline" className="w-full">
            <a href="/admin/products">Lihat</a>
          </Button>
        </Card>

        <Card className="text-center p-6 cursor-pointer hover:shadow-lg transition">
          <div className="text-3xl mb-2">📋</div>
          <h3 className="font-semibold mb-2">Kelola Pesanan</h3>
          <Button asChild size="sm" variant="outline" className="w-full">
            <a href="/admin/orders">Lihat</a>
          </Button>
        </Card>

        <Card className="text-center p-6 cursor-pointer hover:shadow-lg transition">
          <div className="text-3xl mb-2">🎨</div>
          <h3 className="font-semibold mb-2">Kelola Banner</h3>
          <Button asChild size="sm" variant="outline" className="w-full">
            <a href="/admin/banners">Lihat</a>
          </Button>
        </Card>

        <Card className="text-center p-6 cursor-pointer hover:shadow-lg transition">
          <div className="text-3xl mb-2">📊</div>
          <h3 className="font-semibold mb-2">Statistik</h3>
          <Button asChild size="sm" variant="outline" className="w-full">
            <a href="/admin/statistics">Lihat</a>
          </Button>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Pesanan Terbaru</h2>
          <Card>
            <div className="divide-y">
              {[1, 2, 3].map((order) => (
                <div key={order} className="p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Order #{order}</p>
                      <p className="text-sm text-gray-600">Toko {order}</p>
                    </div>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">
                      Pending
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Penjual Menunggu Approval</h2>
          <Card>
            <div className="divide-y">
              {[1, 2].map((seller) => (
                <div key={seller} className="p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">Toko {seller}</p>
                      <p className="text-sm text-gray-600">Ditambahkan 2 jam lalu</p>
                    </div>
                    <Button size="sm" className="bg-primary-500 hover:bg-primary-600">
                      Approve
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
