<template>
  <!-- harga saat ini -->
  <div class="my-7">
    <div class="text-h4 text-left">Dashboard</div>
    <div class="text-left text-grey mb-9">Informasi Harga Komoditas Pokok</div>

    <v-row>
      <v-col cols="3">
        <v-select v-model="select" label="Pilih Lokasi" :items="locations" variant="outlined">
        </v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col>

        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-card v-bind="props" :color="isHovering ? 'cyan' : undifined" min-width="350px" variant="outlined"
              class="py-3 px-3">
              <v-card-title class="text-subtitle-2">
                Harga Minyak <v-divider></v-divider>
              </v-card-title>
              <v-card-text class="text-h6 py-2">
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
          </template>
        </v-hover>
      </v-col>

      <v-col>
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-card v-bind="props" :color="isHovering ? 'cyan' : undifined" min-width="350px" variant="outlined"
              class="py-3 px-3">
              <v-card-title class="text-subtitle-2">
                Harga Gula <v-divider></v-divider>
              </v-card-title>
              <v-card-text class="text-h6 py-2">
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
          </template>
        </v-hover>
      </v-col>

      <v-col>
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-card v-bind="props" :color="isHovering ? 'cyan' : undifined" min-width="350px" variant="outlined"
              class="py-3 px-3">
              <v-card-title class="text-subtitle-2">
                Harga Telur <v-divider></v-divider>
              </v-card-title>
              <v-card-text class="text-h6 py-2">
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
          </template>
        </v-hover>
      </v-col>

      <v-col>
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-card v-bind="props" :color="isHovering ? 'cyan' : undifined" min-width="350px" variant="outlined"
              class="py-3 px-3">
              <v-card-title class="text-subtitle-2">
                Harga Cabai Merah <v-divider></v-divider>
              </v-card-title>
              <v-card-text class="text-h6 py-2">
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
          </template>
        </v-hover>
      </v-col>

      <v-col>
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <v-card v-bind="props" :color="isHovering ? 'cyan' : undifined" min-width="350px" variant="outlined"
              class="py-3 px-3">
              <v-card-title class="text-subtitle-2">
                Harga Cabai Rawit <v-divider></v-divider>
              </v-card-title>
              <v-card-text class="text-h6 py-2">
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
          </template>
        </v-hover>
      </v-col>
    </v-row>

    <v-row>
      <v-container>
        <v-card v-bind="props" :color="isHovering ? 'cyan' : undifined" min-width="350px" class="px-7 py-7 my-5">
          <v-card-title class="text-left">Histogram Komoditas Pokok</v-card-title>
          <v-select class="v-select" label="Jenis Komoditas" v-model="Selectcomodity" :items="comodity"
            variant="outlined"></v-select>
          <v-if v-if="Selectcomodity == 'Minyak Goreng'">
            <BarChart :harga="HargaMinyak" :titleChart="Selectcomodity" :periode="Periode" />
          </v-if>
          <v-else-if v-else-if="Selectcomodity == 'Gula Pasir'">
            <BarChart :harga="HargaGula" :titleChart="Selectcomodity" :periode="Periode" />
          </v-else-if>
          <v-else-if v-else-if="Selectcomodity == 'Telur Ayam'">
            <BarChart :harga="HargaTelur" :titleChart="Selectcomodity" :periode="Periode" />
          </v-else-if>
          <v-else-if v-else-if="Selectcomodity == 'Cabai Merah'">
            <BarChart :harga="HargaMerah" :titleChart="Selectcomodity" :periode="Periode" />
          </v-else-if>
          <v-else-if v-else-if="Selectcomodity == 'Cabai Rawit'">
            <BarChart :harga="HargaRawit" :titleChart="Selectcomodity" :periode="Periode" />
          </v-else-if>

        </v-card>
      </v-container>
    </v-row>

  </div>


</template>

<script>
import BarChart from '@/components/BarChart.vue'

export default {
  components: {
    BarChart
  },
  props: ['comodity', 'HargaMinyak', 'HargaTelur', 'HargaGula', 'HargaMerah', 'HargaRawit', 'Periode'],
  data () {
    return {
      select: 'Semarang',
      Selectcomodity: 'Minyak Goreng',
      locations: ['Semarang'],
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