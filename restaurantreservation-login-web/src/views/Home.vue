<template>
    <div>
        <div class="head-carousel center">
            <carousel></carousel>
        </div>
        <div class="reservation-Btn">
            <reservationButton></reservationButton>
        </div>
           <bodyMessage></bodyMessage>
           <restaurantCard></restaurantCard>


    </div>
</template>

<script>
import carousel from '../components/main/Carousel'
import bodyMessage from '../components/main/BodyMessage'
import restaurantCard from '../components/main/RestaurantCard'
import reservationButton from '../components/main/ReservationButton'

export default {
    components: {
        carousel,
        bodyMessage,
        restaurantCard,
        reservationButton,
    }
}
</script>

<style>
    .head-carousel {
        background-color: black;
        text-align: center;
    }

    .center {
        margin: auto;
        width: 60%;
    }
    .reservation-Btn {
        margin: 2%;
    }
</style>