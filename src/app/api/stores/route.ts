import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // TODO: Fetch all stores from Supabase
    // Filter by status_approved = true
    // Sort by created_at DESC

    const stores = [
      {
        id: '1',
        nama_toko: 'Toko Makanan Enak',
        foto: 'https://via.placeholder.com/300x300?text=Toko+Makanan',
        lokasi: 'Blok A1',
        jam_operasional: '08:00 - 22:00',
        status_buka: true,
      },
    ];

    return NextResponse.json(stores, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch stores' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nama_toko, deskripsi, nomor_whatsapp, lokasi, jam_operasional } = body;

    if (!nama_toko || !nomor_whatsapp) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Create store in Supabase
    // TODO: Set status_approved to false (pending admin approval)
    // TODO: Upload logo to Cloudinary

    return NextResponse.json(
      { success: true, message: 'Store created, awaiting approval' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create store' },
      { status: 500 }
    );
  }
}
