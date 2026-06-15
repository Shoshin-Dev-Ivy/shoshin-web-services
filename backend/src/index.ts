/* backend/src/index.ts */
import 'dotenv/config'
import app from './app'

// Reconnaissande de la route racine du backend par Vercel
app.get('/', (req, res) => {
  res.json({
    message: 'Portfolio Backend API',
    status: 'running',
    version: '1.0.0',
    endpoints: [
      '/api/maintenance',
      '/api/admin/login',
      '/api/contact'
    ]
  })
})

// 🔐 Vérification clé admin
if (!process.env.ADMIN_KEY_HASH) {
  console.error('❌ ADMIN_KEY manquant dans les variables d’environnement')
  process.exit(1)
}

const PORT = process.env.PORT || 4000

// 🔹 Serveur HTTP simple pour dev local
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`)
})




