<template>
    <div id="mixin">
        <h1 id="comp">Hello from component two</h1>
        <p id="info">{{someInfo}}</p>
        <button @click="clickThis">Click Me</button>
    </div>
</template>

<script>
//step3. import the mixin for use in the component
 import SomeMixin from '../mixin/SomeMixin.js';
 //step4.  import the mixin script in component two 
    export default {
        mixins: [SomeMixin],
        // data() {
        //     return {
        //         someInfo: "This is some text from someinfo"
        //     };
        // },
        // methods: {
        //     clickThis() {
        //         alert("Alert from the click this method");
        //     },
        // },
        
        
    }
</script>
<!-- <script>
    export default {
        data() {
            return {
                someInfo: "This is some text from someinfo"
            };
        },
        methods: {
            clickThis() {
                alert("Alert from the click this method");
            },
        },
    }
</script> -->

<style scoped>
#mixin {
    width: 400px;
    background-color: lightcoral;
    border-radius: 10px;
    padding: 10px;
    margin: auto;
}
</style>