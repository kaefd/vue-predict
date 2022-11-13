<template>
    <v-container>
        <v-row>
            <v-col>
                <v-table fixed-header height="35vh">
                    <thead>
                        <tr>
                            <th class="text-center bg-cyan-lighten-4">
                                Periode
                            </th>
                            <th class="text-center bg-cyan-lighten-4">
                                Harga
                            </th>
                            <th class="text-center bg-cyan-lighten-4">
                                Level(Lt)
                            </th>
                            <th class="text-center bg-cyan-lighten-4">
                                Trend(Tt)
                            </th>
                            <th class="text-center bg-cyan-lighten-4">
                                forecast(Yt + 1)
                            </th>
                            <th class="text-center bg-cyan-lighten-4">
                                Error
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item, index in items" :key="item.index">
                            <td class="text-center">{{ formatDate(manipulatedItem('periode', index)[index]) }}</td>
                            <td class="text-center">{{ idr(manipulatedItem('harga')[index]) }}</td>
                            <td class="text-center">{{ formatNumber(manipulatedItem('Lt')[index]) }}</td>
                            <td class="text-center">{{ formatNumber(manipulatedItem('Tt')[index]) }}</td>
                            <td class="text-center">{{ idr(manipulatedItem('forecast')[index]) }}</td>
                            <td class="text-center">{{ Math.abs(formatNumber(manipulatedItem('error')[index])) }}</td>
                        </tr>
                    </tbody>
                </v-table>

                <!-- input nilai alpha, beta, dan forecast-->
                <v-row class="my-3">
                    <v-col>
                        <v-card>
                            <v-text-field v-model="m" label="Forecast :" type="number" min="1" step="1" filled>
                            </v-text-field>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card>
                            <v-text-field v-model="alpha" label="Alpha" type="number" min="0.1" max="0.9" step="0.01"
                                filled>
                            </v-text-field>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card>
                            <v-text-field v-model="beta" label="Beta" type="number" min="0.1" max="0.9" step="0.01"
                                filled>
                            </v-text-field>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card class="">
                            <v-text-field disabled="true">
                                <h5>MAPE : {{ percent(mape()) }}</h5>
                            </v-text-field>
                        </v-card>
                    </v-col>
                </v-row>
                <ForecastVue :alpha="this.alpha" :beta="this.beta" :m="this.m"
                    :LastLt="manipulatedItem('Lt')[items.length - 1]" :LastTt="manipulatedItem('Tt')[items.length - 1]"
                    :Lastperiode="manipulatedItem('periode')[items.length - 1]" :periode="manipulatedItem('periode')"
                    :harga="manipulatedItem('harga')" :forecast="manipulatedItem('forecast')" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ForecastVue from './ForecastVue.vue'



export default {
    components: {
        ForecastVue,
    },

    props: ['object'],

    data () {


        return {
            items: [],
            alpha: 0.9,
            beta: 0.1,
            m: ''

        }
    },

    methods: {
        idr (value) {
            let val = (value / 1).toFixed(2).replace('.', ',')
            return "Rp." + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },

        percent (num) {
            return parseFloat(num).toFixed(2) + '%'
        },

        formatNumber (num) {
            return parseFloat(num).toFixed(2)
        },

        formatDate (date) {
            const options = { year: 'numeric', month: 'long' }
            return new Date(date).toLocaleDateString('id', options)
        },

        manipulatedItem (find) {

            //menampung harga object
            let item = this.items
            let periode = []
            let At = []
            let Lt = []
            let Tt = []
            let Yt = []
            let err = []


            for (let i = 0; i < item.length; i++) {

                periode.push(item[i]['periode'])

            }

            for (let i = 0; i < item.length; i++) {

                At.push(item[i]['harga'])

            }

            //inisiaslisasi nilai Lt awal
            //Lt adalah Level(time) saat ini
            //Lt baris pertama adalah 0
            //Lt baris kedua adalah sama dengan harga saat ini (At)
            Lt.push(0, At[1])

            //nilai Tt awal
            //Tt adalah Trend(time) saat ini
            //Tt baris pertama adalah 0
            //Tt baris kedua adalah At - At-1
            Tt.push(0, At[1] - At[0])

            //menghitung nilai Lt dan Tt baris lanjutan
            for (let i = 2; i < item.length; i++) {

                //hitung Lt
                //Lt = aAt + (1-a) * (Lt-1 + Tt-1)
                let x = (this.alpha * At[i]) + (1 - this.alpha) * (Number(Lt[i - 1]) + Number(Tt[i - 1]))
                Lt.push(x)

                //hitung Tt
                //At = b(Lt-Lt-1) + (1-b)Tt-1
                let y = this.beta * (Lt[i] - Lt[i - 1]) + (1 - this.beta) * Tt[i - 1]
                Tt.push(y)
            }

            //menampilkan data
            for (let i = 0; i < item.length; i++) {

                let forecast = Number(Lt[i]) + Number(Tt[i])  //hitung prediksi
                Yt.push(forecast)

                let error = (At[i] - (Number(Yt[i]))) / At[i] //hitung error
                err.push(error)
            }



            if (find == 'periode') {
                return periode
            } else if (find == 'harga') {
                return At
            } else if (find == 'Lt') {
                return Lt
            } else if (find == 'Tt') {
                return Tt
            } else if (find == 'forecast') {
                return Yt
            } else if (find == 'error') {
                return err
            } else 'Data Not Found'

        },
        mape () {

            let errors = []
            let sum = 0
            let mape = 0

            for (let i = 0; i < this.items.length; i++) {
                errors.push(Math.abs(this.manipulatedItem('error')[i]))
            }

            for (let i = 0; i < this.items.length; i++) {
                sum += errors[i]
            }

            mape = (sum / this.items.length) * 100

            return mape
        },



    },

    mounted () {
        fetch('http://localhost:3000/' + this.object)
            .then(res => res.json())
            .then(data => this.items = data)
            .catch(err => console.log(err.message))



    }

}
</script>

