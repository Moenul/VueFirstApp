app.component("book-shelf", {
    props:{
        cart:{
            type: Array,
            required: true
        },
    },
    template: 
    /* html */
    `<div class="col-md-8 display_section">
        <!-- Vue Simplest Value Binding -->
        <h1 class="text-center">Book Shelf</h1>
        <!-- Vue Simplest Value Binding -->
        <div class="bookTable">
            <div class="allBooks">
            
                <div class="empty_table" v-if="cart.length == 0"><iconify-icon icon="ph:seal-question-fill"></iconify-icon></div>
                <div class="book" v-else v-for="cartItem in cart" :class="cartItem.name.toLowerCase()">
                    <div class="bookName">{{cartItem.name}}</div>
                    <div class="bookCut">
                    </div>
                </div>

            </div>

            <!-- Vue Attribute Binding -->
            <img style="width: 300px;" src="images/tableTransparent.png" alt="">
            <!-- Vue Attribute Binding -->
        </div>
    </div>`

});