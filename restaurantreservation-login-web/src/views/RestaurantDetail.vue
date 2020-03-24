<template>
    <div>
        <div v-if="loading">
           <h1>Loading...</h1>
        </div>
        <div v-if="restaurant" class="content">           
           <h1>{{ restaurant.name }}</h1>
           <h1>{{ restaurant.address }}</h1>
           <h1>{{ restaurant.information }}</h1>
        </div>
        <br>
        <div v-for="review in reviews" v-bind:key="review.id">
           <h4 v-if="review.writer === null">guest</h4>
           <h4 v-else>{{ review.writer }}</h4>
           <h4>{{ review.score }}</h4>
           <h4>{{ review.description }}</h4>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            loading: true,
            restaurant: [
                {id: null},
                {name: null},
                {address: null},
                {information: null},                
                {menuItems:[]},                
            ],
            reviews:[
                {id: null},
                {restaurantId: null},
                {writer: null},
                {score: null},
                {description: null},
            ]
        }
    },
    created () {
        this.getRestaurant()
    },
    watch: {
        '$route': 'getRestaurant'
    },
    methods: {
        // 레스토랑 정보요청(restaurant detail)
        getRestaurant() {            
            axios
            .get("http://localhost:9000/restaurants/"+this.$route.params.id)
            .then(response => {
                this.loading = false
                this.restaurant = response.data
                this.reviews = response.data.reviews
                console.log(this.$route.params.id)
                console.log(response)                            
            })
            .catch(error => {
                alert('서버 오류')
                console.log(error)
            })
        }        
    }    
}
</script>