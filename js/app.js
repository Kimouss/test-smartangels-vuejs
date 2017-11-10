let amountSelector = {
    props: {
        amount: {type: Number},
        min_share_count: {type: Number},
        max_share_count: {type: Number},
        amount_per_share: {type: Number},
    },
    methods: {
        incrementation (amount) {
            let count = Math.ceil(amount/this.amount_per_share);
            if (count >= this.max_share_count) {
                return this.amount;
            }

            count++;
            this.amount = (this.amount_per_share * count);
        },
        decrementation (amount) {
            let count = Math.ceil(amount/this.amount_per_share);
            if (count <= this.min_share_count) {
                return this.amount;
            }

            count--;
            this.amount = (this.amount_per_share * count);
        },
        isActive (amount) {
                return 'active';
        },
        submit () {
            console.log('submit')
        }
    },
    template: `<form @submit.prevent="submit">
        <div>
            <button @click.prevent="decrementation(amount)">-</button>
        </div>
        <div class="box" v-bind:class="isActive(amount - amount_per_share)">
            <p>{{ amount - amount_per_share }}</p>
        </div>
        <div class="box" v-bind:class="isActive(amount)">
            <p>{{ amount }}</p>
        </div>
        <div class="box" v-bind:class="isActive(amount + amount_per_share)">
            <p>{{ amount + amount_per_share}}</p>
        </div>
        <button @click.prevent="incrementation(amount)">+</button>
        
        <button type="submit">Valider</button>
</form>`
};

let main = new Vue({
    el: '#app',
    components: {
        amountSelector
    },
    data: {
        message: 'Toto sur un bato :D',
        amount: 1500,
        min_share_count: 5,
        max_share_count: 2500,
        amount_per_share: 200,
        available_defiscs: ['ir', 'isf', 'pea']
    }
});
