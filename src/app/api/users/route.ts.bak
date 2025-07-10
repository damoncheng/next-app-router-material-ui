import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import pool, {executeQuery} from '@/libs/db';
import {User, CreateUserDto} from '@types/users';

// GET all users
export async function GET() {
  try {
    const users = await executeQuery<User[]>('SELECT * FROM users');
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: 'Database query failed' },
      { status: 500 }
    );
  }
}

// POST create user
export async function POST(request: NextRequest) {
  try {
    const userData: CreateUserDto = await request.json();
    
    if (!userData.name || !userData.role) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const result = await executeQuery(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [userData.name, userData.role]
    );

    const newUser = {
      id: (result as any).insertId,
      ...userData
    };

    return NextResponse.json(newUser, { status: 201 });
  } catch (error: any) {
    if (error.code === 'ER_DUP_ENTRY') {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: 'User creation failed' },
      { status: 500 }
    );
  }
}

/*
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
      try {
          const [rows] = await pool.query('SELECT * FROM users'); // 查询用户数据
          res.status(200).json(rows);
      } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
      }
  } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}*/