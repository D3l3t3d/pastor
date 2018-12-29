<template>
    <v-dialog v-model="show_proposal" persistent width="300">
        <v-card 
            v-on:keyup.esc="show_proposal = false; proposal = '';"
            tabindex="0"
        >
            <v-card-title class="text-xs-center">
                Ну, довай пеши уже пеши кому ми підсмажим дупу:
            </v-card-title>
            <v-card-text>
                <v-flex>
                <v-text-field
                    v-model="proposal"
                    label="введи pigdog.net який-то"
                    v-on:keyup.enter="add_proposal"
                >
                </v-text-field>
                <!-- LOADING-->
                <div id="prog" :style="{ visibility: loading ? 'visible' : 'hidden' }">
                    <v-progress-linear
                      color="#B0BEC5"
                      :indeterminate="loading"
                    ></v-progress-linear>
                </div>        
                <!-- loading -->
                </v-flex>
            </v-card-text>
            <v-card-actions class="justify-space-around">
                    <v-btn @click.stop="show_proposal = false; proposal = ''; loading = false" small color="warning">
                        СКАСУВАТИ
                    </v-btn>
                    <v-btn @click.stop="add_proposal" :disabled="loading" small color="success">
                        ДОДАТИ
                    </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
import { notme, goodsites, addlink, areyou, notpolite, cantfind } from '../assets/app_conf.js';

export default {
    props: ['visible'],
    data: function () {
        return {
            proposal: "",
            loading: false
        }    
    },
    methods: {
        add_proposal: function(evt) {
            const url = this.proposal.toLowerCase().replace(/^(https?:\/\/|\.)/, "");
            this.proposal = "";
            if (url.length >= 5 && url.length <= 50) {
                for (let j of notme) {
                    if (url.match(j)) {
                        this.$emit('proposed', areyou);
                        return;
                    }
                }
                if (url.match(/^(www\.)?[\w\d]{1,25}(\.[\w\d]{1,25}){0,2}\.\w{2,5}$/)) {
                    this.loading = true;
                    const that = this;
                    fetch(`/.netlify/functions/dnschck?s=${url}`, {
                        method: "GET"
                    }).then(resp=>{
                        if (resp.ok) {
                           return resp.text()
                        }    
                    }).then(resp => {
                        if(resp === 'exists'){
                            that.loading = false;
                            addlink.greytext = `прийнято до перевірки [${url}]`;
                            that.$emit('proposed', addlink);
                            that.$FireBase.ref('/proposed').child(url.replace(/\./g, '!')).set({"value": true});
                        } else {
                            throw Error("Yopt...")  
                        }    
                    }).catch(err => {
                        if(err){
                            that.loading = false;
                            that.$emit('proposed', cantfind);
                            //console.log(err);
                        }
                    });
                    return;
                }
            }
            this.loading = false;
            this.$emit('proposed', notpolite);
        }
    },
    computed: {
        show_proposal: {
            get () {
                return this.visible;
            },
            set (val) {
                if(!val){
                    return this.$emit('close');
                }
            }
        }
    }
}
</script>
<style scoped>
</style>
