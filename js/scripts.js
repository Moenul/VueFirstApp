const app = Vue.createApp({
    data: function(){
        return{
            pageTitle: 'Book Shelf',
            tableImg: 'images/tableTransparent.png',
            varients: [
                {id: 1, name: 'Science', price: 120},
                {id: 2, name: 'Account', price: 160},
                {id: 3, name: 'Physics', price: 420},
                {id: 4, name: 'Electronics', price: 290},
                {id: 5, name: 'Java', price: 300},
            ],
            cart: [],
        }
    },
    methods: {
        addToCart(varientId){
            this.cart.push(this.varients.find(varient => varient.id === varientId ));
        },
        removeFromCart(varientId){
            let position = this.cart.findIndex(varient => varient.id === varientId);

            if(position >= 0){
                this.cart.splice(position, 1);
            }else{

            }   
        }
    },
    computed: {
        total(){
            return this.cart.reduce((t, variant) => t + variant.price, 0);
        }
    }
});



// $(document).ready(function(){

// });