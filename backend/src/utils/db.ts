/* backend/src/utils/db.ts */
import { Pool } from 'pg'

export const db = new Pool({
  connectionString: process.env.DATABASE_URL
})

db.on('error', (err) => {
  console.error('[DB] pool error', err)
})

