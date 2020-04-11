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
        <div class="reservation-Btn">
            <reservationButton></reservationButton>
        </div>
        <br>
        <div v-if="reviews" class="content">
            <div v-for="review in reviews" v-bind:key="review.id">
                <h4 v-if="review.writer === null">guest</h4>
                <h4 v-else>{{ review.writer }}</h4>
                <h4>{{ review.score }}</h4>
                <h4>{{ review.description }}</h4>
            </div>
        </div>        
    </div>
</template>

<script>
import axios from "axios"
import reservationButton from '../components/restaurants/ReservationButton'

export default {
    components: {
        reservationButton,
    },

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
            .get("http://localhost:8082/restaurants/"+this.$route.params.id)
            .then(response => {
                this.loading = false
                this.restaurant = response.data
                this.reviews = response.data.reviews
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