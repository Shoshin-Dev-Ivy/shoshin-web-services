/* backend/src/routes/maintenance.ts */
import { Router, Request, Response } from 'express'
import { db } from '../utils/db'
import { verifyAdmin } from './admin'

const router = Router()

// GET /api/maintenance - Route publique (lecture seule)
router.get('/', async (_req: Request, res: Response) => {
  try {
    // Récupère la première ligne sans condition sur id
    const { rows } = await db.query(
      'SELECT enabled FROM maintenance LIMIT 1'
    )

    res.json(rows[0] ?? { enabled: false })
  } catch (error) {
    console.error('[maintenance:get]', error)
    res.status(500).json({ error: 'Database error' })
  }
})

// POST /api/maintenance/toggle - Route protégée (admin uniquement)
router.post('/toggle', verifyAdmin, async (_req: Request, res: Response) => {
  try {
    // Récupère la première ligne
    const { rows } = await db.query(
      'SELECT id, enabled FROM maintenance LIMIT 1'
    )

    const row = rows[0]
    if (!row) {
      return res.status(404).json({ error: 'Maintenance row not found' })
    }

    const newValue = !row.enabled

    // Update en utilisant l'id tel quel (UUID ou INTEGER)
    await db.query(
      'UPDATE maintenance SET enabled = $1 WHERE id = $2',
      [newValue, row.id]
    )

    res.json({ enabled: newValue })
  } catch (error) {
    console.error('[maintenance:toggle]', error)
    res.status(500).json({ error: 'Database error' })
  }
})

export default router