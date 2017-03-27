<template>

    <div>

        <input type="search"
               :placeholder="placeholder"
               v-model="searchTerm"
               :id="id"
               :class="classes"
        >


    </div>

</template>

<script>
    let JsSearch = require("js-search");

    export default {
        name: 'search-component',
        props: {
            primaryKey: {
                type: String,
                default: "_id"
            },
            data: {
                type: Array,
                required: true
            },
            columns: {
                type: Array,
                required: true
            },
            id: {
                type: String,
            },
            classes: {
                type: String,
            },
            placeholder: {
                type: String,
                default: "Buscar"
            }
        },
        created() {
            this.init();
        },
        data () {
            return {
                localData: [],
                searchTerm: '',
                searchers: null
            }
        },
        watch: {
            searchTerm() {
                this.doSearch();
            }
        },
        methods: {
            doSearch() {
                if (!this.searchTerm) {
                    this.localData = this.data;
                    return;
                }
                let result = this.searcher.search(this.searchTerm);
                this.localData = result;
                this.$emit("result", {result, originalData: this.data});
            },
            setUpIndices: function () {
                this.columns.forEach(index => {
                    // If is a deep property we split it into an array otherwise we add the property directly
                    if (index.includes(".")) {
                        this.searcher.addIndex(index.split("."))
                    } else {
                        this.searcher.addIndex(index);
                    }
                });


                this.searcher.addDocuments(this.data);
                console.log(this.searcher)
            },
            setUpPrimaryKey: function () {
                // If the primary key is a deep property we need to take the deepest value and assigns it
                if (this.primaryKey.includes(".")) {
                    this.primaryKey = this.primaryKey.split(".").pop();

                // Otherwise if the primary key is equal to the default we generate the primary key property
                } else if (this.primaryKey === "_id") {
                    this.data.map((item, index) => {
                        item._id = index;
                        return item;
                    })
                }

                this.searcher = new JsSearch.Search(this.primaryKey);
            },
            init() {
                this.localData = this.data;
                this.setUpPrimaryKey();
                this.setUpIndices();
            }
        }

    }
</script>

<style>
</style>
