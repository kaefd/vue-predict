<template>
    <div class="my-7">
        <div class="text-left text-h4">Prediksi Harga</div>
        <div class="text-left text-grey mb-9">Informasi Prakiraan Harga Komoditas Pokok</div>

        <!-- tabs forecasting -->
        <v-tabs v-model="tab">
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
    </div>
</template>

<script>

import { defineComponent } from 'vue'
import TableVue from './TableVue.vue'


export default defineComponent({
    components: {
        TableVue
    },
    props: ['object', 'comodity'],
    data () {
        return {
            tab: this.object,
            Selectcomodity: 'Minyak Goreng'
        }
    },
})
</script>