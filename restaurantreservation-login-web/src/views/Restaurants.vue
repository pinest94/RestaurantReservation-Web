<template>
    <div>
        <div v-if="restaurants" class="content">
           <v-data-table     
                :headers="headers"
                :items="restaurants"
                :loading="loading"
                @click:row="gotoRestaurant"
                >
                <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
                <template v-slot="{items : item}">
                    <td class="text-xs-right">{{ item.id }}</td>
                    <td><a @click="gotoRestaurant(props.item)">{{ item.address }}</a></td>                
                    <td class="text-xs-right">{{ item.address }}</td>                    
                </template>
            </v-data-table>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import router from "../router"

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
            .get("http://localhost:8082/allRestaurants")
            .then(response => {
                this.loading = false
                this.restaurants = response.data
                console.log(response)                            
            })
            .catch(error => {
                alert('서버 오류')
                console.log(error)
            })
        },
        gotoRestaurant(item) { // 레스토랑 세부정보로 이동
            router.push({ name: "restaurantDetail", params: {id : item.id}})
        }
    }    
}
</script>