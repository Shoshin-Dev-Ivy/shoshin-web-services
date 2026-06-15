/* backend/src/middlewares/contactLimiter.ts */
import rateLimit from 'express-rate-limit'

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3,                   //  3 requêtes max par IP
  message: {
    error: 'Trop de tentatives. Veuillez réessayer dans 15 minutes.'
  },
  standardHeaders: true,    // Ajoute RateLimit-* headers
  legacyHeaders: false,
  
  //  Skip rate limit si en développement (optionnel)
  skip: (req) => {
    return process.env.NODE_ENV === 'development' && req.ip === '::1'
  }
})

export default contactLimiter