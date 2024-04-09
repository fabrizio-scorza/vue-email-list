const { createApp } = Vue

createApp({
    data() {
        return{
            emails:[],
            length: 10,
        }
    },
    methods: {
        //metodo che genera la mail random dall'API
        randomMails() {
            for (i = 0; i < this.length; i++){  
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((mailApi) =>{
                    console.log(mailApi.data.response)
                    this.emails.push(mailApi.data.response)
                })
            }
        }
    },
    created(){             
        this.randomMails()        
    }
}).mount('#app')