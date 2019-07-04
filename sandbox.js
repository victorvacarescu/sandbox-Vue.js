new Vue ({
    el: '#app',
    data: {
        name: 'Victor',
        age: 36,
        web: '<a href="http://www.menut.ro" target="_blank">Site-ul meu</a>',
        x: 0,
        y: 0
    },
    methods: {
        changeAge() {            
            return this.age + 2;                       
        },
        newAge() {
            console.log('varsta noua ' + this.changeAge())
            return 'Asta este varsta plus 2 ani = ' + this.changeAge()
        },
        adaugaAn(ani){
            this.age += ani;
        },
        scadeAn(ani){
            this.age -= ani;
        },
        arataXY(event){
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }
})