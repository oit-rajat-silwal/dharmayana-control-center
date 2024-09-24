import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  // Dummy user credentials check (replace this with actual auth logic)
  const { username, password } = await req.json();
  
  if (username === 'admin' && password === 'password') {
    // Generate a JWT token
    const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' });

    // Set the token in an HttpOnly cookie
    const response = NextResponse.json({ success: true });
    
    // Set cookie with HttpOnly, Secure, SameSite attributes
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',  // Use secure cookies in production
      sameSite: 'strict',
      maxAge: 60 * 60,  // 1 hour
      path: '/',
    });
    
    return response;
  }

  return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
}
