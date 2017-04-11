<template>
    <input type="search"
           :id="id"
           :class="classes"
           :name="name"
           v-model="searchTerm"
           :placeholder="placeholder"
           :disabled="disabled"
           :readonly="readonly"
           :autocomplete="autocomplete"
           :autofocus="autofocus"
           :maxLength="maxLength"
           :pattern="pattern"
           :size="size"
    >
</template>

<script>
    let JsSearch = require("js-search");

    export default {
        name: 'vue-js-search',
        props: {
            primaryKey: {
                type: String,
                default: "__primaryKey"
            },
            data: {
                type: Array,
                required: true
            },
            columns: {
                type: Array,
                required: true,
                default: []
            },
            id: {
                type: String,
            },
            classes: {
                type: String,
            },
            placeholder: {
                type: String
            },
            disabled: {
                type: String
            },
            readonly: {
                type: String
            },
            autocomplete: {
                type: String
            },
            autofocus: {
                type: String
            },
            name: {
                type: String
            },
            maxLength: {
                type: String
            },
            pattern: {
                type: String
            },
            size: {
                type: String
            },
            delay: {
                type: Number | String,
                default: 0
            }
        },
        created() {
            this.setUpPrimaryKey();
            this.setUpIndices();
        },
        data () {
            return {
                searchTerm: '',
                searchResult: [],
                isWaiting: false,
                timeOutId: 0,
            }
        },
        watch: {
            searchTerm() {
                if (this.delay) {
                    this.doSearchWithDelay();
                } else {
                    this.doSearch();
                }
            }
        },
        methods: {
            doSearch() {
                // We don't perform a search if there's not search term
                if (!this.searchTerm) {
                    this.searchResult = this.data;
                    this.$emit("search", this.data);
                    return;
                }

                this.searchResult = this.searcher.search(this.searchTerm);
                this.$emit("search", this.searchResult);
            },
            doSearchWithDelay() {
                // If still waiting for the timeout complete and other key is pressed
                // then we cancel the previous search
                if (this.isWaiting) {
                    clearTimeout(this.timeOutId)
                }

                this.isWaiting = true;
                this.timeOutId = setTimeout(() => {
                    this.isWaiting = false;
                    this.doSearch()
                }, this.delay);
            },

            addPrimaryKey() {
                this.data.map((item, index) => {
                    item.__primaryKey = index;
                    return item;
                })
            },
            setUpPrimaryKey() {
                let primaryKey = this.primaryKey;
                if (primaryKey === "__primaryKey") {
                    this.addPrimaryKey();
                }

                this.searcher = new JsSearch.Search(primaryKey);
            },
            setUpIndices() {
                this.columns.forEach(index => {
                    // If is a deep property we split it into an array and use it as index
                    // (e.g. ['propLlv1']['propLlv2']['propLlv3'])
                    // otherwise it means that it is a level 1 property, so we add it directly
                    // (e.g 'propLlv1')
                    if (index.includes(".")) {
                        this.searcher.addIndex(index.split("."))
                    } else {
                        this.searcher.addIndex(index);
                    }
                });

                this.searcher.addDocuments(this.data);
            }
        }
    }
</script>

