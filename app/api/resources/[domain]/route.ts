import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET(
  request: Request,
  { params }: { params: { domain: string } }
) {
  try {
    const domain = params.domain;
    const jsonDirectory = path.join(process.cwd(), 'data', 'resources');
    const fileContents = await fs.readFile(
      jsonDirectory + `/${domain}.json`,
      'utf8'
    );
    const data = JSON.parse(fileContents);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error loading ${params.domain} resources:`, error);
    return NextResponse.json(
      { error: `Failed to load ${params.domain} resources` },
      { status: 500 }
    );
  }
} 