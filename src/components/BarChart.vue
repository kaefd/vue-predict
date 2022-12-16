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
    name: 'BarChart',
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
        harga: {},
        periode: {},
        titleChart: {}
    },


    setup (props) {

        const BarRef = ref()

        const chartOptions = ref({
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            },
        })

        const chartData = computed(() => ({
            labels: props.periode,
            datasets: [
                {
                    label: 'Harga ' + props.titleChart,
                    data: ref(props.harga).value,
                    backgroundColor: ['#fdd835'],
                },
            ],
        }))

        return { chartData, BarRef, chartOptions }
    }
}
</script>