# 🔒 Portfolio Backend - API Sécurisée

Backend Node.js/Express avec authentification JWT pour le portfolio Shoshin Web Services.

## 🚀 Stack Technique

- **Runtime** : Node.js + TypeScript
- **Framework** : Express
- **Base de données** : PostgreSQL (Neon)
- **Authentification** : JWT + bcrypt
- **Sécurité** : Helmet, CORS, Rate Limiting
- **Email** : Nodemailer (Gmail)
- **Validation** : sanitize-html, reCAPTCHA v3

## 📦 Installation
```bash
npm install
```

## ⚙️ Configuration

### 1. Créez le fichier `.env`

Copiez `.env.example` et remplissez les valeurs :
```bash
cp .env.example .env
```

### 2. Générez les secrets admin
```bash
# Installez bcryptjs si nécessaire
npm install bcryptjs

# Générez le hash admin et le JWT secret
node -e "const bcrypt = require('bcryptjs'); const key = 'VOTRE_CLE_ADMIN'; console.log('ADMIN_KEY_HASH=' + bcrypt.hashSync(key, 10));"
node -e "console.log('JWT_SECRET=' + require('crypto').randomBytes(64).toString('hex'));"
```

Copiez les valeurs générées dans `.env`.

### 3. Configurez la base de données

Créez la table `maintenance` dans votre base PostgreSQL :
```sql
CREATE TABLE IF NOT EXISTS maintenance (
  id SERIAL PRIMARY KEY,
  enabled BOOLEAN DEFAULT false
);

INSERT INTO maintenance (enabled) VALUES (false);
```

## 🚀 Développement
```bash
npm run dev
```

Le serveur démarre sur `http://localhost:4000`.

## 🧪 Tests

Les tests de sécurité sont disponibles (non committés pour raisons de sécurité).

Pour tester localement :
1. Assurez-vous que le backend tourne (`npm run dev`)
2. Exécutez les tests de votre choix

## 📡 Endpoints

### Public
- `GET /api/maintenance` - Statut du mode maintenance

### Formulaire de Contact
- `POST /api/contact` - Envoi de message (rate limited: 3/15min)

### Admin (protégé par JWT)
- `POST /api/admin/login` - Connexion admin
- `GET /api/admin/check` - Vérification authentification
- `POST /api/admin/logout` - Déconnexion admin
- `POST /api/maintenance/toggle` - Activer/désactiver maintenance

## 🔒 Sécurité

### Fonctionnalités implémentées
- ✅ Authentification JWT avec cookies HttpOnly
- ✅ Hash bcrypt pour mots de passe (10 rounds)
- ✅ Rate limiting (3 requêtes/15min sur contact)
- ✅ Validation email côté serveur
- ✅ Sanitization des inputs (sanitize-html)
- ✅ CORS dynamique (configurable via .env)
- ✅ Headers de sécurité (Helmet)
- ✅ Protection CSRF (SameSite cookies)

### Variables sensibles
⚠️ **Ne JAMAIS committer :**
- `.env` (contient secrets)
- `node_modules/`
- Certificats SSL (`*.key`, `*.crt`)
- Scripts de test avec clés

## 📝 Variables d'Environnement

Voir `.env.example` pour la liste complète.

**Variables critiques :**
- `ADMIN_KEY_HASH` : Hash bcrypt de la clé admin
- `JWT_SECRET` : Secret pour signer les tokens JWT (64 octets min)
- `DATABASE_URL` : URL de connexion PostgreSQL
- `ALLOWED_ORIGINS` : Domaines autorisés par CORS

## 🚀 Déploiement

### Prérequis
1. Configurez les variables d'environnement sur votre plateforme (Vercel, Railway, etc.)
2. Utilisez des valeurs **différentes** de celles de développement
3. Assurez-vous que `NODE_ENV=production`

### Recommandations
- Régénérez `ADMIN_KEY_HASH` et `JWT_SECRET` pour la production
- Configurez `ALLOWED_ORIGINS` avec vos domaines de production
- Activez HTTPS (automatique sur Vercel/Netlify)

## 📄 License

Propriétaire - Shoshin Web Services

## 👤 Auteur

Pierre Tinard - [Shoshin Web Services](https://shoshin-web-services.com)