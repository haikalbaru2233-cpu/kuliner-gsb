import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { user_id, store_id, items, total, metode_pembayaran, alamat_pengiriman, catatan } = body;

    if (!user_id || !items || !total) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Create order in Supabase
    // TODO: Create order_items
    // TODO: Update product stock
    // TODO: Send notification to seller

    return NextResponse.json(
      { success: true, message: 'Order created', order_id: '123' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    // TODO: Fetch user orders from Supabase
    // TODO: Filter by user_id from auth token
    // TODO: Include order items and store info

    const orders = [
      {
        id: '1',
        store: 'Toko Makanan Enak',
        total: 75000,
        status: 'delivered',
        date: '2024-06-15',
      },
    ];

    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}
