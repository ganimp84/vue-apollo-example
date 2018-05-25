<template>
    <ApolloQuery :query="query" :variables="{ name: 'vue' }">
        <template slot-scope="{ result: { loading, error, data } }">
            <span v-if="loading">Loading...</span>
            <span v-else-if="error">An error occured</span>

            <section v-if="data">
                <ul v-if="data.allNameses.length">
                    <li :key="name.id" v-for="name in data.allNameses" >
                        {{name.name}}
                    </li>
                </ul>

                <span v-else>No names, oh no :(</span>
            </section>
        </template>
    </ApolloQuery>
</template>

<script>
    import { GET_NAMES } from "../queries.js";
    export default {
        name: "Names",
        data() {
            return {
                query: GET_NAMES
            };
        }
    };
</script>

<style scoped>
</style>