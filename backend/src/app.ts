/* backend/src/app.ts */
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import adminRouter from './routes/admin'
import contactRouter from './routes/contact'
import maintenanceRouter from './routes/maintenance'

const app = express()

// Helmet pour les headers de sécurité
app.use(helmet({
  contentSecurityPolicy: false, // Désactivé si utilisation d'inline scripts
  crossOriginEmbedderPolicy: false
}))

// CORS dynamique basé sur .env
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [
  'http://localhost:3000'
]

app.use(cors({
  origin: (origin, callback) => {
    // Autorise les requêtes sans origin (mobile apps, Postman)
    if (!origin) return callback(null, true)
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      console.warn('[CORS] Origin non autorisée:', origin)
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true // Autorise l'envoi de cookies
}))

app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/api/contact', contactRouter)
app.use('/api/maintenance', maintenanceRouter)
app.use('/api/admin', adminRouter)

app.get("/", (req, res) => {
  res.status(200).json({ status: "Backend running" });
});

// Route 404
app.use('*', (_req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

export default app
