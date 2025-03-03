import { serialize } from 'cookie';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, password } = req.body;
  
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    res.setHeader('Set-Cookie', serialize('token', 'valid_token', {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24, 
    }));
    return res.status(200).json({ message: 'Login berhasil' });
  }
  return res.status(401).json({ message: 'Login gagal' });
}
