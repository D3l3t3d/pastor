<template>
    <v-dialog v-model="dialog" width="250">
        <v-btn slot="activator" flat class="caption grey--text">ABOUT</v-btn>
        <v-card>
            <div class="proxy">
                <v-img src='images/proxy.jpg' aspect-ratio="2"></v-img>
                <div class="overlay" @click="tidbit"> 
                    <img class="roshen" src="images/roshen.png"></img>
                </div>
            </div>    
            <v-card-title>
                <v-flex class="text-xs-center caption grey--text">
                    здєлав: 
                    <a href="https://twitter.com/DeC0d3r7">
                        DeC0d3r
                    </a>
                </v-flex>    
            </v-card-title>
            <v-card-text class="text-xs-center body-1 grey--text">
                <p>
                    Генеральний Спонсор:
                </p>
                <p>
                    ЛІПЕЦКА ФАБРИКА™
                </p>
                <v-divider></v-divider>
                <v-flex mt-4>
                    <p>
                        Створено за підтримки ГО
                    </p>
                    <div>
                        "Секретні Тюрми СБУ"®
                    </div>
                </v-flex>
            </v-card-text>
            <v-card-actions>
                <v-layout column align-center>
                    <v-flex class="align-xs-center">
                        <v-btn @click="dialog = false" color="default">
                            OK
                        </v-btn>
                    </v-flex>
                </v-layout>    
            </v-card-actions>    
        </v-card>
    </v-dialog>    
</template>
<script>

export default {
    data: function () {
        return {
            dialog: false,
        }
    },
    methods: {
        tidbit: function(evt) {
            window.open('https://roshen.com');
        }
    }
}

</script>
<style>
@keyframes shakeme {
	0% { transform: translate(2px, 1px) rotate(0deg); }
	10% { transform: translate(-1px, -2px) rotate(-1deg); }
	20% { transform: translate(-3px, 0px) rotate(1deg); }
	30% { transform: translate(0px, 2px) rotate(0deg); }
	40% { transform: translate(1px, -1px) rotate(1deg); }
	50% { transform: translate(-1px, 2px) rotate(-1deg); }
	60% { transform: translate(-3px, 1px) rotate(0deg); }
	70% { transform: translate(2px, 1px) rotate(-1deg); }
	80% { transform: translate(-1px, -1px) rotate(1deg); }
	90% { transform: translate(2px, 2px) rotate(0deg); }
	100% { transform: translate(1px, -2px) rotate(-1deg); }
}
.overlay {
  position: absolute;
  top: 0;
  left: 67%;
  height: 15%;
  width: 30%;
  opacity: 0;
  transition: .5s ease;
}
.roshen {
  height: 250%;
  width: 95%;

}

.roshen:hover{
    animation-name: shakeme;
	animation-duration: 0.8s;
	transform-origin:50% 50%;
	animation-iteration-count: infinite;
	animation-timing-function: linear;    
}

.proxy:hover .overlay {
  opacity: 1;
  cursor: pointer;
}

</style>
