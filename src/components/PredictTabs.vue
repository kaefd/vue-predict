<template>
    <v-card-title class="text-center py-6">
        <h4 class="font-weight-bold text-h4 text-basil">
            Prediksi Harga
        </h4>
    </v-card-title>

    <v-row>
        <!-- tabs forecasting -->
        <v-col class="mx-5">
            <v-tabs fixed-tabs v-model="tab" background-color="transparent" color="basil">
                <v-for v-for="item in this.object" :key="item" :value="item">
                    <v-tab>
                        {{ item }}
                    </v-tab>
                </v-for>
            </v-tabs>
            <!-- table forecasting -->
            <v-window v-model="tab">
                <v-for v-for="item in this.object" :key="item" :value="item">
                    <v-window-item>
                        <v-card color="basil" flat>
                            <v-card>
                                <TableVue :object="item" class="my-5" />
                            </v-card>
                        </v-card>
                    </v-window-item>
                </v-for>
            </v-window>
        </v-col>
    </v-row>
</template>

<script>

import { defineComponent } from 'vue'
import TableVue from './TableVue.vue'


export default defineComponent({
    components: {
        TableVue
    },
    props: ['object'],
    data () {
        return {
            tab: this.object,
        }
    },
})
</script>