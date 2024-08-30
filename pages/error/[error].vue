<template>
    <div>{{ route.params.error }}</div>
</template>
<script lang="ts" setup>
let route = useRoute()
console.log(route.params);

</script>