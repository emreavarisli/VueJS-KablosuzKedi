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
            coords: {
                x: 0,
                y: 0,
            },
        };
    },
    methods : { //fonksiyonlar buraya yazılıyor
        changeTitle(pTitle){
            this.title = pTitle;
        },
        updateCoords(message, event){
            //console.log(message, event.x, event.y);
            this.coords = {
                x: event.x,
                y: event.y,
            };
        },
    },
}).mount("#app");