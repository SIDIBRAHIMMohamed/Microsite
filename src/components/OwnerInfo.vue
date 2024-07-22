<!-- src/components/OwnerInfo.vue -->


<template>
  <div>
    <h2>Information du propriétaire</h2>
    <p>Nom : {{ owner.name }}</p>
    <p>Email : {{ owner.email }}</p>
  </div>
</template>

<script>
import { useOwnerStore } from '../stores/owner'

export default {
  name: 'OwnerInfo',
  setup() {
    const ownerStore = useOwnerStore()
    return {
      owner: ownerStore.owner
    }
  }
}
</script>

<style>
/* Ajouter des styles ici */
</style>
