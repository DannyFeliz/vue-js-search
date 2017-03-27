<template>
  <div id="app">
    <div>
        App
    </div>
    <search-component v-if="users.length"
            :data="users"
            :columns="columns"
            placeholder="Realizar busqueda"
            id="searcher"
            classes="btn btn-search"
            v-on:result="cool"
    ></search-component>
    <test></test>

    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First</th>
          <th>Last</th>
          <th>Username</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Cell</th>
          <th>Post Code</th>
          <th>State</th>
          <th>Street</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{ user._id }}</td>
          <td>{{ user.name.first }}</td>
          <td>{{ user.name.last }}</td>
          <td>{{ user.login.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.cell }}</td>
          <td>{{ user.location.postcode }}</td>
          <td>{{ user.location.state }}</td>
          <td>{{ user.location.street }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>


<script>
import search from "./Search.vue";
import test from "./test.vue";
import * as axios from "axios";

export default {
  name: 'app',
  components: {
    "search-component": search,
    "test": test,
  },
    mounted() {
        this.loadUsers();
    },
  data () {
    return {
        columns: ["email", "gender", "cell", "location.postcode", "location.state", "location.street",
                  "login.username", "name.first", "name.last"],
        users: [],
        localData: []

    }
  },
    methods: {
      loadUsers() {
          axios({
              url: "https://randomuser.me/api/?results=150&nat=us",
              method: "GET"
          }).then(response =>  {
              this.users = response.data.results;
              this.localData = response.data.results;
          });
      },
      cool(data) {
          if (!data.result.length) {
              this.users = data.originalData;
          } else {
              this.users = data.result;
          }
          console.log(data);
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
