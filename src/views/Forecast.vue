<template>
  <v-row>
    <v-col>
      <PredictTabs :object="this.object" class="px-5" />
    </v-col>
  </v-row>

</template>

<script>
import { defineComponent } from 'vue'

// component
import PredictTabs from '../components/PredictTabs.vue'

export default defineComponent({

  name: 'ForecastVue',
  components: {
    PredictTabs,
  },

  props: ['object']
});

</script>

<style>

</style>