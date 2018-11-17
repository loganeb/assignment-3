import { NameList } from './name-list.mjs';

const NAMES = ['Tom', 'Susie', 'Jane', 'Spot', 'Timmy', 'Mary',
'Jane', 'Bob', 'Steve'];

var vm = new Vue({
    el: '#app',
    data: {
        names: []
    },
    methods: {
        loadNames: function(){
            for(let i = 0; i < NAMES.length; i++){
                this.names.push(NAMES[i])
            }
        }
    },
    mounted: function(){
        this.loadNames();
    },
    render: function(createElement){
        return createElement(NameList,{
            props: {
                names: this.names
            }
        })
    }
})
