import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export function verifyToken(req: Request) {
  const cookies = req.headers.get('cookie');
  const token = cookies?.split('token=')[1];

  if (!token) {
    return { success: false, response: NextResponse.json({ message: 'Unauthorized' }, { status: 401 }) };
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    return { success: true, decoded };
  } catch (err) {
    return { success: false, response: NextResponse.json({ message: 'Invalid token' }, { status: 401 }) };
  }
}
