<template>

        <p>Value: {{ propD }}</p>

</template>

<script>

    export default {
        name: 'test',
        props: {
            // basic type check (`null` means accept any type)
            propA: Number,
            // multiple possible types
            name: [String, Number],
            // a required string
            propC: {
                type: String,
                required: false
            },
            // a number with default value
            propD: {
                type: Number,
                default: 100
            },
            // object/array defaults should be returned from a
            // factory function
            propE: {
                type: Object,
                default: function () {
                    return { message: 'hello' }
                }
            },
            // custom validator function
            propF: {
                validator: function (value) {
                    return value > 10
                }
            }
        },
        data () {
            return {

            }
        },
    }
</script>

<style>
</style>
