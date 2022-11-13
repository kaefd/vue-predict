<template>
  <v-container fluid>
    <PredictTabs class="px-5" />
  </v-container>
</template>

<script>
import { defineComponent } from 'vue'

// component
import PredictTabs from '../components/PredictTabs.vue'

export default defineComponent({

  name: 'AboutView',
  components: {
    PredictTabs,
  },
});

</script>

<style>

</style>