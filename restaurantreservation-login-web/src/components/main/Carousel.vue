<template class>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"      
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('../../assets/images/carousel/restaurant1.jpg'),
          },
          {
            src: require('../../assets/images/carousel/restaurant2.jpg'),
          },
          {
            src: require('../../assets/images/carousel/restaurant3.jpg'),
          },
        ],
      }
    },
  }
</script>