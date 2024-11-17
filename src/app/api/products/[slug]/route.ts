import { NextResponse } from 'next/server';
import { products } from '@/Data/catalogueProducts';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    const { slug } = params;
    const product = products.find(p => p.slug === slug);

    if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
}