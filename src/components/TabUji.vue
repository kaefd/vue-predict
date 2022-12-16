<template>
    <v-table fixed-header height="50vh">
        <thead>
            <tr>
                <th class="text-center bg-cyan-lighten-4">
                    Periode
                </th>
                <th class="text-center bg-cyan-lighten-4">
                    Data Aktual
                </th>
                <th class="text-center bg-cyan-lighten-4">
                    Forecast(DES)
                </th>
                <th class="text-center bg-cyan-lighten-4">
                    Forecast(Regresi Linier)
                </th>
                <th class="text-center bg-cyan-lighten-4">
                    Error(DES)
                </th>
                <th class="text-center bg-cyan-lighten-4">
                    Error(Regresi)
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item, index in items" :key="item">
                <td>{{ formatDate(periodeUji[index]) }}</td>
                <td>{{ idr(dtAktual[index]) }}</td>
                <td>{{ idr(DES[index]) }}</td>
                <td>{{ idr(RS[index]) }}</td>
                <td>{{ formatNumber(DESerr[index]) }}</td>
                <td>{{ formatNumber(RSerr[index]) }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
export default {
    props: ['periodeUji', 'minyak', 'dtAktual', 'DES', 'RS', 'DESerr', 'RSerr'],
    data () {
        return {
            items: this.minyak,
        }

    },
    methods: {
        idr (value) {
            let val = (value / 1).toFixed(2).replace('.', ',')
            return "Rp." + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        formatNumber (num) {
            return parseFloat(num).toFixed(5)
        },

        formatDate (date) {
            const options = { year: 'numeric', month: 'long' }
            return new Date(date).toLocaleDateString('id', options)
        },
    }
}
</script>

<style>

</style>