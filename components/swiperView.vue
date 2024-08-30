<script lang="ts" setup>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
const props = defineProps(['swiperOption'])
</script>
<template>
    {{ swiperOption }}
    <swiper v-bind="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
    </swiper>
</template>
<style>
.cont {
    background: red;
    height: 200px;
}
</style>