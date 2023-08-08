<template>
    <form class="query-container">
        <div class="query-exec">
            <h1 class="exec">Query</h1>
            <button class="exec button" type="button" @click="handleClear">Clear</button>
        </div>
        <div class="query-option">
            <label class="label type">Type</label>
            <select class="type option" v-model="selectedCollection" @change="handleSelectChange">
                <option v-for="collection in collections" :key="collection.value" :value="collection.value">
                    {{ collection.label }}
                </option>
            </select>
            <label class="label date">Date</label>
            <input type="date" class="date option" v-model="selectedDate" @change="handleDateChange" />
            <!-- <label>Time</label>
            <input type="time" /> -->
            <label class="label order">Order</label>
            <select class="order option" v-model="selectedOrder" @change="handleOrderChange">
                <option v-for="order in orders" :key="order.value" :value="order.value">
                    {{ order.label }}
                </option>
            </select>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                selectedCollection: null,
                selectedDate: null,
                selectedOrder: null,
                orders: [
                    { value: "asc", label: "Ascending"},
                    { value: "desc", label: "Descending"},
                ],
                collections: [
                    { value: "Mode", label: "Mode" },
                    { value: "Fan", label: "Fan" },
                    { value: "Motor", label: "Motor" },
                    { value: "Pump1", label: "Pump 1" },
                    { value: "Pump2", label: "Pump 2" },
                    { value: "LightSensor", label: "Light Sensor" },
                ]
            };
        },

        methods: {
            handleClear() {
                this.$emit('clear', true);
                this.selectedCollection = null;
                this.selectedDate = null;
                this.selectedOrder = null;
            },
            
            handleSelectChange() {
                this.$emit('collection-selected', this.selectedCollection);
                this.selectedDate = null;
                this.selectedOrder = null;
            },

            handleDateChange() {
                this.$emit('date-selected', this.selectedDate);
                this.selectedOrder = null;
            },

            handleOrderChange() {
                this.$emit('order-selected', this.selectedOrder);
            }
        },
    }
</script>

<style scoped>
   .query-container {
        width: 100%;
        color: black;
        background-color: #e7d5ff;
        border-radius: 20px;
        padding: 10px;
        padding-left: 5%;
        box-sizing: border-box;
   }

   .query-exec {
        display: block;
        position: relative;
   }

   .exec {
        display: inline-block;
        margin-right: 10px;
   }

   .button {
        /* justify-self: right; */
        /* float: right; */
        position: absolute;
        right: 10%;
        bottom: 0;
        background-color: #BEF3F8;

        font-size: 16px;
        padding: 8px 25px 8px 25px;
        border-radius: 10px;
        border: none;

   }

   .button:hover {
        background-color: #B5EBF0;
   }

   .query-option {
        padding-top: 10px;   
   }

   .label {
        padding: 0 15px 0 15px;
        font-size: 18px;
   }

   .type {
        padding-left: 0;
   }

   .option {
        border-radius: 4px;
        width: 200px;
   }

   .label.date {
        margin-left: 40px;
   }

   .label.order {
        margin-left: 40px;
   }
</style>