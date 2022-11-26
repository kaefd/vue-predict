<template>
  <!-- harga saat ini -->
  <v-container class="my-5">
    <v-card class="mb-3">
      <v-card-title class="text-h6">Informasi Harga Pangan</v-card-title>
    </v-card>

    <v-row>
      <v-col cols="3">
        <v-select label="Pilih Lokasi" :items="locations" variant="outlined">
        </v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card class="py-3 px-3">
          <v-card-title class="text-subtitle-2">
            <v-divider></v-divider>
            Harga Minyak <v-divider></v-divider>
          </v-card-title>
          <v-card-text class="text-h6 py-5 bg-cyan-darken-3 rounded-pill">
            {{ LastPrice(HargaMinyak) }}
          </v-card-text>
          <v-card-text class="text-red">
            <v-if v-if="LastPrice(HargaMinyak) < BefPrice(HargaMinyak)">
              <v-icon color="red" size="25px">mdi-arrow-down
              </v-icon>
            </v-if>
            <v-else-if v-else-if="LastPrice(HargaMinyak) > BefPrice(HargaMinyak)">
              <v-icon color="red" size="25px">mdi-arrow-up
              </v-icon>
            </v-else-if>
            <v-else v-else>
              <v-text>data konstant</v-text>
            </v-else>
            {{ GapPrice(HargaMinyak) }}
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="py-3 px-3">
          <v-card-title class="text-subtitle-2">
            <v-divider></v-divider>
            Harga Gula <v-divider></v-divider>
          </v-card-title>
          <v-card-text class="text-h6 py-5 bg-cyan-darken-3 rounded-pill">
            {{ LastPrice(HargaGula) }}
          </v-card-text>
          <v-card-text class="text-red">
            <v-if v-if="LastPrice(HargaGula) < BefPrice(HargaGula)">
              <v-icon color="red" size="25px">mdi-arrow-down
              </v-icon>
            </v-if>
            <v-else-if v-else-if="LastPrice(HargaGula) > BefPrice(HargaGula)">
              <v-icon color="red" size="25px">mdi-arrow-up
              </v-icon>
            </v-else-if>
            <v-else v-else>
              <v-text>data konstant</v-text>
            </v-else>
            {{ GapPrice(HargaGula) }}
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="py-3 px-3">
          <v-card-title class="text-subtitle-2">
            <v-divider></v-divider>
            Harga Telur <v-divider></v-divider>
          </v-card-title>
          <v-card-text class="text-h6 py-5 bg-cyan-darken-3 rounded-pill">
            {{ LastPrice(HargaTelur) }}
          </v-card-text>
          <v-card-text class="text-red">
            <v-if v-if="LastPrice(HargaTelur) < BefPrice(HargaTelur)">
              <v-icon color="red" size="25px">mdi-arrow-down
              </v-icon>
            </v-if>
            <v-else-if v-else-if="LastPrice(HargaTelur) > BefPrice(HargaTelur)">
              <v-icon color="red" size="25px">mdi-arrow-up
              </v-icon>
            </v-else-if>
            <v-else v-else>
              <v-text>data konstant</v-text>
            </v-else>
            {{ GapPrice(HargaTelur) }}
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="py-3 px-3">
          <v-card-title class="text-subtitle-2">
            <v-divider></v-divider>
            Harga Cabai Merah <v-divider></v-divider>
          </v-card-title>
          <v-card-text class="text-h6 py-5 bg-cyan-darken-3 rounded-pill">
            {{ LastPrice(HargaMerah) }}
          </v-card-text>
          <v-card-text class="text-red">
            <v-if v-if="LastPrice(HargaMerah) < BefPrice(HargaMerah)">
              <v-icon color="red" size="25px">mdi-arrow-down
              </v-icon>
            </v-if>
            <v-else-if v-else-if="LastPrice(HargaMerah) > BefPrice(HargaMerah)">
              <v-icon color="red" size="25px">mdi-arrow-up
              </v-icon>
            </v-else-if>
            <v-else v-else>
              <v-text>data konstant</v-text>
            </v-else>
            {{ GapPrice(HargaMerah) }}
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="py-3 px-3">
          <v-card-title class="text-subtitle-2">
            <v-divider></v-divider>
            Harga Cabai Rawit <v-divider></v-divider>
          </v-card-title>
          <v-card-text class="text-h6 py-5 bg-cyan-darken-3 rounded-pill">
            {{ LastPrice(HargaRawit) }}
          </v-card-text>
          <v-card-text class="text-red">
            <v-if v-if="LastPrice(HargaRawit) < BefPrice(HargaRawit)">
              <v-icon color="red" size="25px">mdi-arrow-down
              </v-icon>
            </v-if>
            <v-else-if v-else-if="LastPrice(HargaRawit) > BefPrice(HargaRawit)">
              <v-icon color="red" size="25px">mdi-arrow-up
              </v-icon>
            </v-else-if>
            <v-else v-else>
              <v-text>data konstant</v-text>
            </v-else>
            {{ GapPrice(HargaRawit) }}
          </v-card-text>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-container>
        <v-card class="px-7 py-7">
          <LineChart :HargaMinyak="HargaMinyak" :HargaTelur="HargaTelur" :HargaGula="HargaGula" :HargaMerah="HargaMerah"
            :HargaRawit="HargaRawit" :periode="PeriodeMinyak" />
        </v-card>
      </v-container>
    </v-row>


  </v-container>
</template>

<script>
import LineChart from '@/components/LineChart.vue'

export default {
  components: {
    LineChart
  },
  props: ['HargaMinyak', 'HargaTelur', 'HargaGula', 'HargaMerah', 'HargaRawit', 'PeriodeMinyak'],
  data () {
    return {
      locations: ['Semarang'],
      comodity: ['Minyak', 'Gula', 'Cabai Rawit', 'Cabai Merah', 'Telur'],
    }
  },
  methods: {
    idr (value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return "Rp." + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },

    LastPrice (x) {
      let item = x
      const result = item[item.length - 1]
      return this.idr(result)

    },

    BefPrice (x) {
      let item = x
      const result = item[item.length - 2]
      return result
    },

    GapPrice (x) {
      let item = x
      const result = (item[item.length - 1] - item[item.length - 2]) / item[item.length - 2]
      return parseFloat(result).toFixed(3) + '%'
    }


  }



}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}
</style>