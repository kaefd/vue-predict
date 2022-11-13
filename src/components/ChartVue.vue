<template>
    <Bar ref="BarRef" :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
        :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="470"
        :height="450" />
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
            default: 'bar-chart'
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
        object: {

        },
        periode: {

        },
        harga: {


        },
        forecast: {


        }
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
                    label: 'Harga Saat Ini',
                    data: ref(props.harga).value,
                    backgroundColor: ['#b2ebf2'],
                },
                {
                    label: 'Prediksi',
                    data: ref(props.forecast).value,
                    backgroundColor: ['#e57373'],
                },
            ],
        }))

        return { chartData, BarRef, chartOptions }
    }
}
</script>