export var NameList = Vue.component('name-list',{
    props: {
        names: {
            type: Array,
            required: true
        }
    },
    data: function(){
        return {
            localNames: this.names,
            sorted: false
        }
    },
    template: `
        <div class="nameList">
            <div class="nameListHead">
                Names
                <button @click="toggleSort" title="Sort list">V</button>
            </div>
            <ul>
                <li v-for="name in localNames">{{ name }}</li>
            </ul>
        </div>
    `,
    methods: {
        toggleSort: function() {
            if(this.sorted)
                this.localNames = this.localNames.reverse();
            else{
                this.localNames = this.localNames.sort();
                this.sorted = true;
            }
        }
    }
});
