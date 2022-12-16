<template>
    <div class="my-7">
        <div class="text-h4 text-left">Uji Data</div>
        <div class="text-left text-grey mb-9">Perbandingan Hasil Prediksi dengan Menggunakan Metode Lain</div>

        <v-select label="Jenis Komoditas :" v-model="komoditas" :items="comodity"></v-select>


        <v-if v-if="komoditas == 'Minyak Goreng'">

            <TabUjiVue :periodeUji="Periode" :minyak="minyak" :dtAktual="HargaMinyak" :DES="DESforecast(HargaMinyak)"
                :RS="RSforecast(HargaMinyak)" :DESerr="MapeErr(HargaMinyak)['DESerr']"
                :RSerr="MapeErr(HargaMinyak)['RSerr']" />

            <div class="bg-cyan mt-5 pa-3 w-25 text-white text-left">Mape(DES) : {{
                    percent(MapeErr(HargaMinyak)['DESmape'])
            }}</div>
            <div class="bg-cyan-darken-1 pa-3 w-25 text-left">Mape(Regresi) : {{ percent(MapeErr(HargaMinyak)['RSmape'])
            }}</div>

            <LineChart :des="DESforecast(HargaMinyak)" :rs="RSforecast(HargaMinyak)" :dtAktual="HargaMinyak"
                :periode="Periode" />
        </v-if>
        <v-else-if v-else-if="komoditas == 'Gula Pasir'">

            <TabUjiVue :periodeUji="Periode" :minyak="minyak" :dtAktual="HargaGula" :DES="DESforecast(HargaGula)"
                :RS="RSforecast(HargaGula)" :DESerr="MapeErr(HargaGula)['DESerr']"
                :RSerr="MapeErr(HargaGula)['RSerr']" />

            <div class="bg-cyan mt-5 pa-3 w-25 text-white text-left">Mape(DES) : {{
                    percent(MapeErr(HargaGula)['DESmape'])
            }}</div>
            <div class="bg-cyan-darken-1 pa-3 w-25 text-left">Mape(Regresi) : {{ percent(MapeErr(HargaGula)['RSmape'])
            }}</div>

            <LineChart :des="DESforecast(HargaGula)" :rs="RSforecast(HargaGula)" :dtAktual="HargaGula"
                :periode="Periode" />
        </v-else-if>
        <v-else-if v-else-if="komoditas == 'Telur Ayam'">
            <TabUjiVue :periodeUji="Periode" :minyak="minyak" :dtAktual="HargaTelur" :DES="DESforecast(HargaTelur)"
                :RS="RSforecast(HargaTelur)" :DESerr="MapeErr(HargaTelur)['DESerr']"
                :RSerr="MapeErr(HargaTelur)['RSerr']" />

            <div class="bg-cyan mt-5 pa-3 w-25 text-white text-left">Mape(DES) : {{
                    percent(MapeErr(HargaTelur)['DESmape'])
            }}</div>
            <div class="bg-cyan-darken-1 pa-3 w-25 text-left">Mape(Regresi) : {{ percent(MapeErr(HargaTelur)['RSmape'])
            }}</div>

            <LineChart :des="DESforecast(HargaTelur)" :rs="RSforecast(HargaTelur)" :dtAktual="HargaTelur"
                :periode="Periode" />
        </v-else-if>
        <v-else-if v-else-if="komoditas == 'Cabai Merah'">
            <TabUjiVue :periodeUji="Periode" :minyak="minyak" :dtAktual="HargaMerah" :DES="DESforecast(HargaMerah)"
                :RS="RSforecast(HargaMerah)" :DESerr="MapeErr(HargaMerah)['DESerr']"
                :RSerr="MapeErr(HargaMerah)['RSerr']" />

            <div class="bg-cyan mt-5 pa-3 w-25 text-white text-left">Mape(DES) : {{
                    percent(MapeErr(HargaMerah)['DESmape'])
            }}</div>
            <div class="bg-cyan-darken-1 pa-3 w-25 text-left">Mape(Regresi) : {{ percent(MapeErr(HargaMerah)['RSmape'])
            }}</div>

            <LineChart :des="DESforecast(HargaMerah)" :rs="RSforecast(HargaMerah)" :dtAktual="HargaMerah"
                :periode="Periode" />
        </v-else-if>
        <v-else-if v-else-if="komoditas == 'Cabai Rawit'">
            <TabUjiVue :periodeUji="Periode" :minyak="minyak" :dtAktual="HargaRawit" :DES="DESforecast(HargaRawit)"
                :RS="RSforecast(HargaRawit)" :DESerr="MapeErr(HargaRawit)['DESerr']"
                :RSerr="MapeErr(HargaRawit)['RSerr']" />

            <div class="bg-cyan mt-5 pa-3 w-25 text-white text-left">Mape(DES) : {{
                    percent(MapeErr(HargaRawit)['DESmape'])
            }}</div>
            <div class="bg-cyan-darken-1 pa-3 w-25 text-left">Mape(Regresi) : {{ percent(MapeErr(HargaRawit)['RSmape'])
            }}</div>

            <LineChart :des="DESforecast(HargaRawit)" :rs="RSforecast(HargaRawit)" :dtAktual="HargaRawit"
                :periode="Periode" />
        </v-else-if>
    </div>
</template>

<script>
import TabUjiVue from '@/components/TabUji.vue'
import LineChart from '@/components/LineChart.vue'

export default {
    name: 'TestingVue',
    components: { TabUjiVue, LineChart },
    props: ['comodity', 'HargaMinyak', 'HargaTelur', 'HargaMerah', 'HargaRawit', 'HargaGula', 'Periode', 'minyak'],
    data () {
        return {
            komoditas: 'Minyak Goreng',
            items: this.minyak,
            alpha: 0.9,
            beta: 0.1,
        }
    },

    methods: {
        percent (num) {
            return parseFloat(num).toFixed(2) + '%'
        },

        DESforecast (d) {

            let Level = [0, d[1]]
            let Trend = [0, d[1] - d[0]]
            let Yt = [null]

            for (let i = 2; i < d.length; i++) {
                let x = (this.alpha * d[i]) + (1 - this.alpha) * (Number(Level[i - 1]) + Number(Trend[i - 1]))
                Level.push(x)

                let y = this.beta * (Level[i] - Level[i - 1]) + (1 - this.beta) * Trend[i - 1]
                Trend.push(y)

            }

            for (let i = 1; i < d.length; i++) {

                let forecast = Number(Level[i]) + Number(Trend[i])  //hitung prediksi
                Yt.push(forecast)

            }

            return Yt
        },

        RSforecast (d) {
            const xi = []
            const yi = []
            const exponenxi = []
            const xiyi = []
            const regresi = []
            const n = this.minyak.length

            // menghitung xi
            for (let i = 1; i <= n; i += 1) {
                xi.push(i)
            }
            const sumXi = xi.reduce((accumulator, value) => {
                return accumulator + value
            }, 0)

            // menghitung yi
            for (let i = 0; i < n; i += 1) {
                yi.push(Number(d[i]))
            }
            const sumYi = yi.reduce((accumulator, value) => {
                return accumulator + value
            }, 0)

            // menghitung xi2

            for (let i = 0; i < n; i++) {
                const a = xi[i] * xi[i]
                exponenxi.push((a))
            }
            const sumexponenxi = exponenxi.reduce((accumulator, value) => {
                return accumulator + value
            }, 0)

            // menghitung xiyi

            for (let i = 0; i < n; i++) {
                const a = xi[i] * yi[i]
                xiyi.push((a))
            }

            const sumxiyi = xiyi.reduce((accumulator, value) => {
                return accumulator + value
            }, 0)


            // menghitung intercept
            // sumYi*sumexponenxi - sumXi*sumxiyi / n*sumexponenxi - suXi2
            const intercept = ((sumYi * sumexponenxi) - (sumXi * sumxiyi)) / ((n * sumexponenxi) - sumXi ** 2)


            // menghitung b1
            // n * sumxiyi - sumxi * sumyi / n * sumexponenxi - sumxi2

            const slope = ((n * sumxiyi) - (sumXi * sumYi)) / ((n * sumexponenxi) - (sumXi ** 2))

            // // menghitung b0
            // // b0 =valuey - slope*valuex
            // const valueb0 = valuey - (slope * valuex)

            //bentuk regresi

            for (let i = 1; i <= n; i++) {

                const reg = intercept + (slope * i)
                regresi.push(reg)
            }
            return regresi
        },

        MapeErr (d) {
            let n = this.minyak.length
            let DESerr = []
            let RSerr = []
            let RSmape = []
            let DESmape = []
            let DESsumErr = 0
            let RSsumErr = 0

            // menghitung RS mape

            for (let i = 0; i < n; i++) {

                const a = (d[i] - this.RSforecast(d)[i]) / this.RSforecast(d)[i]
                RSerr.push(Math.abs(a))
            }
            for (let i = 0; i < n; i += 1) {
                RSsumErr += RSerr[i]
            }

            // menghitung DES mape

            for (let i = 0; i < n; i++) {

                const b = (d[i] - (this.DESforecast(d)[i])) / d[i] //hitung error
                DESerr.push(Math.abs(b))
            }


            for (let i = 0; i < n; i += 1) {
                DESsumErr += DESerr[i]
            }

            RSmape = (RSsumErr / n) * 100
            DESmape = (DESsumErr / n) * 100

            return { RSmape, DESmape, RSerr, DESerr }
        }

    }
}
</script>

<style>

</style>