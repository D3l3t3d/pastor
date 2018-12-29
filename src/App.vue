<template>
  <v-app  :dark="skin">
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <v-switch class="mt-3"
          prepend-icon="brightness_1"
          append-icon="brightness_3"
          v-model="skin"
          ></v-switch>  
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <h1>PA⚡TOR</h1>
      <v-spacer></v-spacer>
      <About :visible="about_dialog" @close="about_dialog = false;"/>
    </v-toolbar>
    <v-content>
      <Fakes/>
    </v-content>
  </v-app>
</template>

<script>
import Fakes from './components/Fakes'
import About from './components/About'

export default {
  name: 'App',
  components: {
    Fakes,
    About
  },
  data () {
    return {
      skin: true,
      about_dialog: true,
    }
  }
}
</script>
