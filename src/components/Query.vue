<template>
    <div class="query-container">
        <h1>Query</h1>
        <form class="query-option">
            <label class="label type">Type</label>
            <select v-model="selectedOption" @change="handleSelectChange" class="type option">
                <option v-for="option in options" :key="option.value" :value="option.value">
                    {{ option.label }}
                </option>
            </select>
            <label class="label date">Date</label>
            <input type="date" class="date option" />
            <!-- <label>Time</label>
            <input type="time" /> -->
            <label class="label order">Order</label>
            <select class="order option">
                <option>Ascending</option>
                <option>Descending</option>
            </select>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedOption: null,
                options: [
                    { value: "Mode", label: "Mode" },
                    { value: "Fan", label: "Fan" },
                    { value: "Motor", label: "Motor" },
                    { value: "Pump1", label: "Pump 1" },
                    { value: "Pump2", label: "Pump 2" },
                    { value: "LightSensor", label: "Light Sensor" },
                ],
            };
        },

        methods: {
            handleSelectChange() {
                this.$emit('option-selected', this.selectedOption);
            },
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
        padding-left: 20px;
        box-sizing: border-box;
   }

   .query-option {
        padding-top: 10px;
        
   }

   .label {
        padding: 0 10px 0 10px;
   }

   .type {
        padding-left: 0;
   }

   .option {
        border-radius: 4px;
   }
</style>