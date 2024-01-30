app.component("order-form", {
    props:{
        cart:{
            type: Array,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },
    template: 
    /* html */
    `<div class="backdrop" @click="hideOrderForm"></div>
    <div class="order_form">
        <div class="form_title tet-bold text-success text-center"><b>Order Form</b>
        <hr>
        </div>
        <form action="" @submit.prevent="onSubmit">
            <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" v-model="email" class="form-control" placeholder="Enter email">
            </div>
            <div class="form-group">
            <label for="phone">Phone numbers</label>
            <input type="tel" v-model="phone" class="form-control" placeholder="Enter phone numbers">
            </div>
            <div class="form-group">
            <input type="hidden" v-model.number="total">
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <textarea class="form-control" v-model="address" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <div class="btn btn-warning ml-2 form_cancel" @click="hideOrderForm">Cancel</div>
        </form>
    </div>`,
    data(){
        return {
            email: '',
            phone: '',
            address: '',
        }
    },
    methods:{
        hideOrderForm(){
            this.$emit("toggle-order-form");
        },
        onSubmit(){
            let orderDetails = {
                email: this.email,
                phone: this.phone,
                address: this.address,
                total: this.total,
            }
            console.log(orderDetails);
            this.hideOrderForm();
            this.$emit("clear-cart");
            this.$emit("success-order");
        }
    }
});