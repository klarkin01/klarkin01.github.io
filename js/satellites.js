const satapp = Vue.createApp({
    data () {
        /* default view is most recent IR image */
        return {
            irSrc: "./images/00_ir_image.jpg",
            visSrc: "./images/00_vis_image.jpg",
            hover: false
        }
    },
    methods: {         
        /* setSource takes tau from the html buttons and sets the image src based on the passed value */
        setSource (tau) {
            this.irSrc= `./images/${tau}_ir_image.jpg`,
            this.visSrc= `./images/${tau}_vis_image.jpg`
        },
        /* onHover updates the image type to visible band when hovered over with the mouse, and back to infrared band when the mouse leaves */
        onHover () {
            if (this.hover == true ) {
                return this.visSrc
            }
            else {
                return this.irSrc
            }
        }
    }
})