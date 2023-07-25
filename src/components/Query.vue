<template>
    <div>
        <h1>Filter</h1>
        <form class="query-container">
            <label>Type</label>
            <select v-model="selectedOption" @change="handleSelectChange">
                <option v-for="option in options" :key="option.value" :value="option.value">
                    {{ option.label }}
                </option>
            </select>
            <label>Date</label>
            <input type="date" />
            <!-- <label>Time</label>
            <input type="time" /> -->
            <label>Order</label>
            <select>
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
   * {
    color: black;
   }
</style>