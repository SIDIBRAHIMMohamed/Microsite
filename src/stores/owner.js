// src/stores/owner.js
import { defineStore } from 'pinia'

export const useOwnerStore = defineStore('owner', {
  state: () => ({
    owner: {
      name: 'Propriétaire 1',
      email: 'proprietaire1@example.com'
    }
  })
})
