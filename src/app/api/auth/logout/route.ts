import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // TODO: Clear auth cookie
    // TODO: Clear session

    return NextResponse.json(
      { success: true, message: 'Logged out successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Logout failed' },
      { status: 500 }
    );
  }
}
