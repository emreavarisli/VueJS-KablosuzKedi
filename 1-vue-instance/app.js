const app = Vue.createApp({
    data(){
        return {
            title : "Vue.js Bootcamp 1.Gün",
            content : "Lorem ipsum dolor sit",
            eduflow : {
                title : "Okul sitesi için tıklayınız",
                target : "_blank",
                url : "https://ebyu.edu.tr/", 
                alt : "okul-sitesi"
            },
            owner : "Pogaca",
        };
    },
}).mount("#app");