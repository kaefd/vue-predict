<template>
    <div class="my-7">
        <div class="text-left text-h4">Data Harga Komoditas</div>
        <div class="text-left text-grey mb-9">Informasi Data Harga Komoditas Pokok</div>

        <!-- tabs forecasting -->
        <v-tabs v-model="tab">
            <v-for v-for="item in object" :key="item" :value="item">
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
                            <KomoditasData :object="item" class="my-5" :minyak="HargaMinyak" />
                        </v-card>
                    </v-card>
                </v-window-item>
            </v-for>
        </v-window>
        <v-btn icon="mdi-plus"></v-btn>
    </div>
</template>

<script>
import KomoditasData from '@/components/KomoditasData.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: "KomoditasVue",
    props: ['object', 'HargaMinyak'],
    components: { KomoditasData },
    data () {
        return {
            tab: this.object,
        }
    },
});

</script>

<style>

</style>