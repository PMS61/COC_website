import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const resources = {
  "cp": [],
  "dev": [],
  "eth": [],
  "ai": [],
  "proj-x": []
};

export async function GET(
  request: NextRequest,
  { params }: { params: { domain: string } }
) {
  try {
    const domain = params.domain;
    const domainResources = resources[domain as keyof typeof resources] || [];
    
    return NextResponse.json(domainResources);
  } catch {
    return NextResponse.json(
      { error: "Failed to load domain resources" },
      { status: 500 }
    );
  }
}