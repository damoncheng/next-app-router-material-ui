import mysql, { RowDataPacket, ResultSetHeader, FieldPacket } from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function executeQuery<T = any>(
  sql: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values?: any[]
): Promise<T> {
  const [rows] = await pool.execute<mysql.RowDataPacket[] | ResultSetHeader>(sql, values);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return rows as any;
}

export default pool;