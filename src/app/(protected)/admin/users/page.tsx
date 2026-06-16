import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function AdminUsersPage() {
  const users = [
    { id: 1, nama: 'John Doe', email: 'john@example.com', role: 'buyer', status: 'active' },
    { id: 2, nama: 'Jane Smith', email: 'jane@example.com', role: 'seller', status: 'active' },
    { id: 3, nama: 'Admin User', email: 'admin@example.com', role: 'admin', status: 'active' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Kelola User</h1>

      <Card>
        <table className="w-full">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="text-left p-4">Nama</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Role</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{user.nama}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                    {user.role}
                  </span>
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                    {user.status}
                  </span>
                </td>
                <td className="p-4 space-x-2">
                  <Button size="sm" variant="outline">Edit</Button>
                  <button className="px-3 py-1 text-sm border border-red-300 text-red-600 rounded hover:bg-red-50">
                    Suspend
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
