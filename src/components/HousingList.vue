<!-- src/components/HousingList.vue -->
<template>
  <div>
    <h2>Liste des logements</h2>
    <div v-for="housing in housings" :key="housing.id" class="housing-item">
      <h3>{{ housing.name }}</h3>
      <img :src="housing.photo" alt="Photo of housing" />
      <p>{{ housing.description }}</p>
      <button @click="selectHousing(housing)">Voir les détails</button>
    </div>
  </div>
</template>

<script>
import { useHousingStore } from '../stores/housing'

export default {
  name: 'HousingList',
  setup() {
    const housingStore = useHousingStore()
    return {
      housings: housingStore.housings,
      selectHousing: housingStore.selectHousing
    }
  }
}
</script>

<style>
/* Ajouter des styles ici */
</style>
