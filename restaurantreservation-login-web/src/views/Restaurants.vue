<template>
    <div>
        <div v-if="restaurants" class="content">
            <v-data-table
                :headers="headers"
                :items="restaurants"
                :loading="loading"
            >
            <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
            </v-data-table>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            loading: true,            
            headers: [
                { text: 'No.', value: 'id'},
                { text: '매장명', value: 'name'},
                { text: '주소', value: 'address'}
            ],
            restaurants: [],
        }
    },
    created () {
        this.getRestaurants()
    },
    watch: {
        '$route': 'getRestaurants'
    },
    methods: {
        // 레스토랑 정보요청(All)
        getRestaurants() {            
            axios
            .get("http://localhost:9000/allRestaurants")
            .then(response => {
                this.loading = false
                this.restaurants = response.data
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