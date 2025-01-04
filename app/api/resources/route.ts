import { NextResponse } from 'next/server';

export const runtime = 'edge';

const resources = {
  "cp": [],
  "dev": [],
  "eth": [],
  "ai": [],
  "proj-x": []
};

export async function GET() {
  try {
    return NextResponse.json(resources);
  } catch {
    return NextResponse.json(
      { error: "Failed to load resources" },
      { status: 500 }
    );
  }
}