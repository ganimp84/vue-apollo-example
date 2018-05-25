<template>
    <form v-on:submit.prevent="onSubmit">
        <div v-if="error">{{error}}</div>
        <div class="measure">
            <label htmlFor="name">
                Name
            </label>
            <input
                    id="name"
                    required
                    v-model="person"
            />
        </div>
    </form>
</template>

<script>
    import { GET_NAMES, ADD_NAME } from "../queries";
    export default {
        name: "Form",
        data() {
            return {
                person: "",
                error: null
            };
        },
        methods: {
            onSubmit() {
                const name = this.person;
                this.person = "";
                this.$apollo.mutate({
                    mutation: ADD_NAME,
                    variables: {
                        name
                    },
                    update: (cache, { data: { createNames } }) => {
                        const { allNameses } = cache.readQuery({ query: GET_NAMES });
                        cache.writeQuery({
                            query: GET_NAMES,
                            data: {
                                allNameses: allNameses.concat(createNames)
                            }
                        });
                    }
                })
                .catch(error => {
                    console.error(error);
                    this.person = name;
                    this.error = `There has been a problem adding ${name} :(`;
                });
            }
        }
    };
</script>

<style>
</style>