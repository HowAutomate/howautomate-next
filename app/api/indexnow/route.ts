import { NextResponse } from 'next/server'

const INDEXNOW_KEY = process.env.INDEXNOW_KEY ?? 'howautomateindexnow8f3c2b1a4d5e6f'
const SITE_HOST = 'howautomate.com'

export async function POST(request: Request) {
  const { urls } = await request.json() as { urls: string[] }
  if (!Array.isArray(urls) || urls.length === 0) {
    return NextResponse.json({ error: 'urls array required' }, { status: 400 })
  }

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  })

  return NextResponse.json({ status: res.status, ok: res.ok })
}
