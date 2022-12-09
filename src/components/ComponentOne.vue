<template>
    <div id="mix">
        <h1 id="comp">Hello from component one</h1>
        <p id="info">{{someInfo}}</p>
        <button @click="clickThis">Click Me</button>
    </div>
</template>

<script>
//step3. import the mixin for use in the component
 import SomeMixin from '../mixin/SomeMixin.js';
 //step4. 
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

<style scoped>
#mix {
    width: 400px;
    background-color: lightblue;
    border-radius: 10px;
    padding: 10px;
    margin: auto;
}
</style>