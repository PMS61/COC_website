import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET() {
  try {
    const jsonDirectory = path.join(process.cwd(), 'resources');
    const fileContents = await fs.readFile(jsonDirectory + '/resources.json', 'utf8');
    const data = JSON.parse(fileContents);
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error loading resources:', error);
    return NextResponse.json(
      { error: 'Failed to load resources' },
      { status: 500 }
    );
  }
} 