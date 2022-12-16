<template>
  <v-app :theme="theme">
    <v-container>
      <v-app-bar title="FORECAST" align="left" :elevation="1">
        <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onClick">{{ theme
        }}
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer class="pt-3 nav" permanent fixed app expand-on-hover rail>
        <v-list class="text-left" density="compact" nav height="300px" color="cyan-darken-2">
          <router-link :to="{ name: 'home' }">
            <v-list-item class="mb-2" prepend-icon="mdi-home" title="Home" value="home" rounded="pill">
            </v-list-item>
          </router-link>
          <router-link to="/forecast">
            <v-list-item class="mb-2" prepend-icon="mdi-finance" title="Forecast" value="forecast" rounded="pill">
            </v-list-item>
          </router-link>
          <router-link to="/komoditas">
            <v-list-item class="mb-2" prepend-icon="mdi-table" title="Data Komoditas" value="komoditas" rounded="pill">
            </v-list-item>
          </router-link>
          <router-link to="/testing">
            <v-list-item prepend-icon="mdi-test-tube" title="Testing" value="testing" rounded="pill">
            </v-list-item>
          </router-link>

        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view :object="objects" :minyak="minyak" :gula="gula" :cabairawit="cabairawit" :cabaimerah="cabaimerah"
          :telur="telur" :HargaMinyak="obj('minyak')" :HargaTelur="obj('telur')" :HargaGula="obj('gula')"
          :HargaRawit="obj('rawit')" :HargaMerah="obj('merah')" :Periode="objPeriod()" :comodity="comodity" />
      </v-main>
    </v-container>
  </v-app>

  <!-- <button @click="redirect">Redirect</button>
  <button @click="back">go back</button>
  <button @click="forward">forward</button> -->


</template>

<script setup>

import { ref } from 'vue'

const theme = ref('light')

function onClick () {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

</script>
<script>

export default {

  data () {

    return {
      objects: ['minyak', 'gula', 'telur', 'cabairawit', 'cabaimerah'],
      comodity: ['Minyak Goreng', 'Gula Pasir', 'Cabai Rawit', 'Cabai Merah', 'Telur Ayam'],
      minyak: [],
      gula: [],
      cabaimerah: [],
      cabairawit: [],
      telur: [],
      alpha: 0.9,
      beta: 0.1
    }
  },

  methods: {
    redirect () {
      this.$router.push({ name: 'home' })
    },
    back () {
      this.$router.go(-1)
    },
    forward () {
      this.$router.go(1)
    },
    idr (value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return "Rp." + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    formatNumber (num) {
      return parseFloat(num).toFixed(2)
    },

    formatDate (date) {
      const options = { year: 'numeric', month: 'long' }
      return new Date(date).toLocaleDateString('id', options)
    },
    obj (x) {

      let item = ''
      let obj = []

      if (x == 'minyak') {
        item = this.minyak
      } else if (x == 'gula') {
        item = this.gula
      } else if (x == 'telur') {
        item = this.telur
      } else if (x == 'merah') {
        item = this.cabaimerah
      } else if (x == 'rawit') {
        item = this.cabairawit
      }

      for (let i = 0; i < item.length; i++) {

        obj.push(item[i]['harga'])
      }

      return obj
    },

    objPeriod () {

      let item = this.minyak
      let objP = []


      for (let i = 0; i < item.length; i++) {

        objP.push(item[i]['periode'])
      }


      return objP
    }

  },

  mounted () {
    fetch('https://api-komoditas.000webhostapp.com/minyak.php')
      .then(res => res.json())
      .then(data => this.minyak = data)
      .catch(err => console.log(err.message)),

      fetch('https://api-komoditas.000webhostapp.com/gula.php')
        .then(res => res.json())
        .then(data => this.gula = data)
        .catch(err => console.log(err.message)),
      fetch('https://api-komoditas.000webhostapp.com/cabaimerah.php')
        .then(res => res.json())
        .then(data => this.cabaimerah = data)
        .catch(err => console.log(err.message)),
      fetch('https://api-komoditas.000webhostapp.com/cabairawit.php')
        .then(res => res.json())
        .then(data => this.cabairawit = data)
        .catch(err => console.log(err.message)),
      fetch('https://api-komoditas.000webhostapp.com/telur.php')
        .then(res => res.json())
        .then(data => this.telur = data)
        .catch(err => console.log(err.message))
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  font-weight: bold;
  color: #3a848b;
  text-decoration-line: none;
}

header {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  color: #3a848b !important;
}

.v-select {
  max-width: 25vw;
}
</style>
