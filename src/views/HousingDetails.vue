<!-- src/views/HousingDetails.vue -->
<template>
  <div v-if="selectedHousing">
    <h2>{{ selectedHousing.name }}</h2>
    <img :src="selectedHousing.photo" alt="Photo of housing" />
    <p>{{ selectedHousing.description }}</p>
   
  </div>
</template>

<script>
import { useHousingStore } from '../stores/housing'


export default {
  name: 'HousingDetails',
  components: {
   
  },
  setup() {
    const housingStore = useHousingStore()
    return {
      selectedHousing: housingStore.selectedHousing
    }
  }
}
</script>

<style>
/* Ajouter des styles ici */
</style>
