
<template>
    <v-container>
        <v-row>
            <v-col>
                <v-table fixed-header height="70vh">
                    <thead>
                        <tr>
                            <th class="text-center bg-red-lighten-2">
                                Periode
                            </th>
                            <th class="text-center bg-red-lighten-2">
                                forecast
                            </th>
                        </tr>
                    </thead>
                    <tbody v-if="m">
                        <tr v-for="t in this.m" :key="t.indexOf">
                            <td class="text-center">{{ periodm(t) }}</td>
                            <td class="text-center">{{ idr(Fm(t)) }}</td>

                        </tr>
                    </tbody>
                </v-table>
            </v-col>
            <v-col>
                <!-- ini grafik -->
                <v-card>
                    <ChartVue class="px-10" :object="this.object" :periode="this.periode" :harga="this.harga"
                        :forecast="this.forecast" />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import ChartVue from './ChartVue.vue'

export default {
    components: {
        ChartVue,
    },

    props: ['object', 'LastLt', 'LastTt', 'Lastperiode', 'm', 'mape', 'periode', 'harga', 'forecast'],

    data () {
        return {
            At: '',
            newForecast: this.forecast
        }
    },

    methods: {
        idr (value) {
            let val = (value / 1).toFixed(2).replace('.', ',')
            return "Rp." + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },

        periodm (t) {
            const d = new Date(this.Lastperiode)
            const options = { year: 'numeric', month: 'long' }
            return d.setFullYear(d.getFullYear(), d.getMonth() + t), d.toLocaleDateString('id', options)

        },

        Fm (t) {
            // memprediksi harga pada periode ke -m
            // Fm = Ltz + Ttz*m
            let F = []
            let Fm = Number(this.LastLt) + (Number(this.LastTt) * Number(t))
            F.push((Fm))
            return F

        },

        errm (t) {

            //err = Ltz+Tt*Ttz
            let errm = (Number(this.At[t]) - (Number(this.Fm(t)))) / this.At[t]
            return errm
        },

    },

}
</script>
<style>

</style>