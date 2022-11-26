<template>
    <Bar ref="BarRef" :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
        :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="1300"
        :height="500" />
</template>

<script>

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { computed, ref } from 'vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'ChartVue',
    components: { Bar },
    props: {
        chartId: {
            type: String,
            default: 'Bar-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => { }
        },
        plugins: {
            type: Object,
            default: () => { }
        },
        HargaMinyak: {},
        HargaGula: {},
        HargaTelur: {},
        HargaMerah: {},
        HargaRawit: {},
        periode: {}
    },


    setup (props) {

        const BarRef = ref()

        const chartOptions = ref({
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Grafik',
                },
            },
        })

        const chartData = computed(() => ({
            labels: props.periode,
            datasets: [
                {
                    label: 'Harga Minyak',
                    data: ref(props.HargaMinyak).value,
                    backgroundColor: ['#fdd835'],
                },
                {
                    label: 'Harga Gula',
                    data: ref(props.HargaGula).value,
                    backgroundColor: ['#f57f17'],
                },
                {
                    label: 'Harga Telur',
                    data: ref(props.HargaTelur).value,
                    backgroundColor: ['#b2ebf2'],
                },
                {
                    label: 'Harga Cabai Merah',
                    data: ref(props.HargaMerah).value,
                    backgroundColor: ['#FF8280'],
                },
                {
                    label: 'Harga Cabai Rawit',
                    data: ref(props.HargaRawit).value,
                    backgroundColor: ['#B1FFB5'],
                },
            ],
        }))

        return { chartData, BarRef, chartOptions }
    }
}
</script>