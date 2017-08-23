 export default {
     data() {
         return {
             spanLeft: 5,
             spanRight: 19,
             auth: 0

         }
     },

     computed: {
         iconSize() {
             return this.spanLeft === 5 ? 14 : 24;
         }
     },
     methods: {
         toggleClick() {
             if (this.spanLeft === 5) {
                 this.spanLeft = 2;
                 this.spanRight = 22;
             } else {
                 this.spanLeft = 5;
                 this.spanRight = 19;
             }
         }
     }
 }