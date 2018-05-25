import Vue from "vue";
import App from "./App";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

const client = new ApolloClient({
    uri: "https://api.graph.cool/simple/v1/cjexem1he3let0153tpc5ftu1"
});

const apolloProvider = new VueApollo({
    defaultClient: client
});

Vue.use(VueApollo);

new Vue({
    el: "#app",
    components: { App },
    provide: apolloProvider.provide(),
    template: "<App/>"
});
