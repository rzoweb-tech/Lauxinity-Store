import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  return {
    supabaseResponse: NextResponse.next({
      request,
    }),
    user: null,
  }
}
