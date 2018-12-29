<template>
  <v-container fluid>
    <v-layout class="mt-5" row justify-center fill-height>
      <Dialog
        :dialog_state="dialog_state"
        :visible="dialog_state.visible"
        @close="dialog_state.visible = false;"
        />
      <v-flex xs12 md6>
        <v-layout column>
          <v-input>
            <v-text-field
              label="ПОШУК"
              hint="введіть який-то мудозвоньский саєт"
              v-model="search"
              single-line
              append-icon="search"
            >
            </v-text-field>
          </v-input>
          <v-card>
            <v-data-table
              :headers="headers"
              :items="sites"
              :search="search"
              rows-per-page-text="Рядків:"
              class="elevation-3"
            >
              <template slot="items" slot-scope="props">
                <tr>
                  <td class="subheading text-xs-center">
                    <a :href="'//'+props.item.sitename.replace(/!/g,'.')"  target="_blank">
                      {{ props.item.sitename.replace(/!/g,'.') }}
                    </a>
                    </td>
                </tr>
              </template>
              <v-alert
                slot="no-results"
                :value="true"
                color="error"
                icon="warning"
              >
                Паажжі... шо-то "{{ search }}" в списку нема.
              </v-alert>
            </v-data-table>
            <v-card-actions class="justify-center">
              <v-btn @click.stop="proposal_dialog = true" color="info">
                ЗАПРОПОНУВАТИ ДО СПИСКУ
              </v-btn>
              <Proposals :visible="proposal_dialog"
                @proposed="answerto"
                @close="proposal_dialog = false;"
                />
            </v-card-actions>
          </v-card>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import db from '../assets/firebase_conf.js';
import Dialog from './Dialog';
import Proposals from './Proposals';

export default {
  data: function() {
    return {
      name: "Fake",
      search: "",
      dialog_state:{
        visible: false
      },
      proposal_dialog: false,
      headers: [
        { text: "site", align: "center", sortable: true, value: "sitename" }
      ],
      sites: [] 
    }
  },
  methods: {
    answerto: function (val) {
      this.dialog_state = val;
      this.dialog_state.visible = true;
      this.proposal_dialog = false;
    }
  },
  components: {
    Dialog,
    Proposals
  },
  created: function () {
    this.$FireBase.ref('pigs').once('value').then(snap=>{
      this.sites = Object.keys(snap.val()).map(x=>({"sitename":x.replace(/!/,'.'), "value": false}));
    });
  }
};
</script>
<style>
</style>
