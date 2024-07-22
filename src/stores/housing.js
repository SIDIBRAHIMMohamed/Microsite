// src/stores/housing.js

import { defineStore } from 'pinia'

export const useHousingStore = defineStore('housing', {
  state: () => ({
    housings: [
      // { id: 1, name: 'Logement A', photo: 'url_photo_A', description: 'Description A' },
      // { id: 2, name: 'Logement B', photo: 'url_photo_B', description: 'Description B' }
    ],
    selectedHousing: null
  }),
  actions: {
    selectHousing(housing) {
      this.selectedHousing = housing
    }
  }
})
