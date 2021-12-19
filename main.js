const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Alpaca',
            description: 'Wooly winter socks',
            selectedVariant: 0,
            onSale: true,
            url: 'https://www.google.com',
            
            showYes: true,
            disponible: 100,
            
            details: ['50% cotton', '20% wool', '30% bamboo'],
            variants: [
                {id: 1112, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                {id: 1113, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
            ],
            sizes: ['3-5', '6-8', '9-11']
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        removeFromCart(){
            this.cart -= 1
        },
        updateVariant(index){
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' '+ this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        saleMessage(){
            if(this.onSale == true){
                return this.brand + ' ' + this.product + ' ' + 'is on sale!'
            }
            return ''
        }
    }
})

