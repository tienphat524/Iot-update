<script setup>

</script>

<template>
    <div>
        <h1>Filter</h1>
        <form class="query-container">
            <label>Type</label>
            <select class="type">
                <option value="" selected>All</option>
                <option value="">Test2</option>
                <option value="">Test3</option>
                <option value="">Test4</option>
            </select>
            <label>Date</label>
            <input type="date" />
            <label>Time</label>
            <input type="time" />
            <label>Order</label>
            <select>
                <option>Ascending</option>
                <option>Descending</option>
            </select>
        </form>
    </div>
</template>

<style scoped>
   
</style>