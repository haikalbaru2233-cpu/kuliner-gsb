import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // TODO: Fetch user profile from Supabase
    // TODO: Verify auth token
    // TODO: Return user data (excluding password_hash)

    const user = {
      id: '123',
      nama: 'User Name',
      email: 'user@example.com',
      phone: '081234567890',
      role: 'buyer',
      alamat: 'Jl. Example',
      blok_rumah: 'A1',
      foto: null,
    };

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch profile' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { nama, phone, alamat, blok_rumah } = body;

    // TODO: Update user in Supabase
    // TODO: Validate input
    // TODO: Check auth

    return NextResponse.json(
      { success: true, message: 'Profile updated' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update profile' },
      { status: 500 }
    );
  }
}
