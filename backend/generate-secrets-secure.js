#!/usr/bin/env node
/* generate-secrets-secure.js */
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

// ⚠️ CHANGEZ CETTE VALEUR PAR ADMIN_KEY
const ADMIN_KEY = 'METTRE_ADMIN_KEY';

console.log('🔐 Génération des secrets\n');

const hash = bcrypt.hashSync(ADMIN_KEY, 10);
const jwtSecret = crypto.randomBytes(64).toString('hex');

console.log('✅ Copiez ces lignes dans backend/.env:\n');
console.log(`ADMIN_KEY_HASH=${hash}`);
console.log(`JWT_SECRET=${jwtSecret}\n`);

console.log('⚠️  Supprimez ce fichier après usage ou remettez ADMIN_KEY à une valeur vide !');