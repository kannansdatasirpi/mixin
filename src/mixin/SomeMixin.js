// Mixins are a useful way to provide shared features to components to help reduce code duplication. The 
// advantage of mixins is simplicity, but the drawback is that they cannot be used to share state, for which 
// features like dependency injection or a data store are required
//step1: create mixin file

//step2: put mixin code into the mixin file
//import dayjs from 'dayjs';
export default {
data() {
    return {
        someInfo: "This is some text from someinfo"
    };
},
methods: {
    clickThis() {
        alert("Alert from the click this method in the mixin");
    },
    mouseup() {
        alert("Enter Your Details")
    },
    mouseover() {
        alert("Alert from the click this method in the mixin")
    },
    keypress() {
        alert("Enter any key")
    },
    greeting() {
        const time = this.getCurrentTime(new Date());
        console.log(`Time is in your location ${time}`);
    },
    // getCurrentTime(date) {
    //     return dayjs(date).format('HH:mm');
    //   },
    
}
}