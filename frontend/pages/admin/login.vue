<!-- pages/admin/login.vue -->
<template>
  <div class="max-w-sm mx-auto mt-20">
    <h1 class="text-xl font-semibold mb-4">Admin — Connexion</h1>

    <form @submit.prevent="submit" class="space-y-4">
      <input v-model="key"
        type="password"
        placeholder="Clé admin"
        class="w-full border p-2"
        required
      />

      <button type="submit" class="w-full bg-black text-white py-2"
        :disabled="loading"
      >
        {{ loading ? 'Connexion…' : 'Se connecter' }}
      </button>

      <p v-if="error" class="text-red-600 text-sm">{{ error }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from '#imports'
import { useAdminStore } from '~/stores/useAdminStore'

const key = ref('')
const error = ref('')
const loading = ref(false)

const router = useRouter()
const adminStore = useAdminStore()

const submit = async () => {
  error.value = ''
  loading.value = true

  try {
    // UTILISER la méthode login() du store
    await adminStore.login(key.value)
    
    // Rediriger vers /admin
    await router.push('/admin')
  } catch (e) {
    error.value = 'Clé admin invalide'
    console.error('[LOGIN PAGE] erreur:', e)
  } finally {
    loading.value = false
  }
}
</script>