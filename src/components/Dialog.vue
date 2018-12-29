<template>
  <div class="text-xs-center">
    <v-dialog v-model="show_areyou" persistent width="300">
      <v-card>
        <v-img
          :src="dialog_state.image"
          aspect-ratio="1.5"
          >
          <div class="vign"></div>
        </v-img>
        <v-card-title primary-title >
          <v-flex class="text-xs-center">
            <h3 class="headline">
                {{ dialog_state.headtext }}
            </h3>
            <span class="grey--text">{{ dialog_state.greytext }}</span>
          </v-flex>
        </v-card-title>
        <v-card-actions>
          <v-layout column align-center>
            <v-flex class="align-xs-center">
              <v-btn  color="default" @click.stop="show_areyou=false">
                {{ dialog_state.buttext }}
              </v-btn>
            </v-flex>
          </v-layout>  
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: [
    'visible',
    'dialog_state'
  ],
  computed: {
    show_areyou: {
      get(){
        return this.visible
      },
      set(val) {
        if(!val){
          this.$emit('close');
        }
      }  
    }
  }
}
</script>
<style>
.vign {
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 60px 30px rgba(5,5,5,0.3) inset;
}
</style>
