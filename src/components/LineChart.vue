<template>
    <Line ref="LineRef" :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
        :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="1300"
        :height="500" />
</template>

<script>

import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { computed, ref } from 'vue'

ChartJS.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend)

export default {
    name: 'ChartVue',
    components: { Line },
    props: {
        chartId: {
            type: String,
            default: 'line-chart'
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
        periode: {

        },
        des: {


        },
        rs: {


        },
        dtAktual: {}
    },


    setup (props) {

        const LineRef = ref()

        const chartOptions = ref({
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                },
            },
        })

        const chartData = computed(() => ({
            labels: props.periode,
            datasets: [
                {
                    label: 'DES',
                    data: ref(props.des).value,
                    backgroundColor: ['#34E1FF'],
                    borderColor: ['#34E1FF'],

                },
                {
                    label: 'Regressi Linier',
                    data: ref(props.rs).value,
                    backgroundColor: ['#FF4949'],
                    borderColor: ['#FF4949'],
                },
                {
                    label: 'Data Aktual',
                    data: ref(props.dtAktual).value,
                    backgroundColor: ['#FF9949'],
                    borderColor: ['#FF9949'],
                },
            ],
        }))

        return { chartData, LineRef, chartOptions }
    }
}
</script>