const { createApp } = Vue

createApp({
    data() {
        return{
            emails:[],
        }
    },
    methods: {
        //metodo che genera la mail random dall'API
        randomMails() {
            for (i = 0; i < 10; i++){  
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