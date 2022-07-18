<!-- ./layouts/default.vue -->

<template>
  <client-only placeholder="loading...">
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="https://www.getkisi.com/">
            <img
              class="rounded-circle"
              src="./kisi-standard.png"
              alt="Logo: an image of a doggy biting a juicy bone!"
              style="margin-top: 17px"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <NuxtLink
                  class="btn btn-primary"
                  active-class="is-active"
                  to="/"
                  exact
                  >Home page</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nuxt />
      <div class="container">
        <div class="content">
          <form @submit.prevent="uploadPet">
            <label class="form-label" for="name"> Name: </label>
            <input
              class="form-field"
              type="text"
              v-model="user.name"
              required
            />
            <label class="form-label" for="email"> Email: </label>
            <input
              class="form-field"
              type="email"
              v-model="user.email"
              required
            />
            <label class="form-label" for="Favorite category">
              Favorite category:
            </label>
            <input
              class="form-field"
              type="text"
              v-model="user.FavoriteCategory"
              required
            />

            <button class="button is-link" value="send">Submit</button>
          </form>
        </div>
      </div>

      <footer class="footer home-footer has-background-black">
        <div class="content has-text-centered">
          <p class="has-text-white">
            <strong class="has-text-white">
              Search Engine Optimization Website</strong
            >
            by developer
            <a
              style="color: blue"
              href="https://linkedin.com/in/ward-sultan-5075a3242"
              >Ward</a
            >
          </p>
        </div>
      </footer>
    </div>
  </client-only>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      articles: [],
      user: {
        name: "",
        email: "",
        FavoriteCategory: "",
      },
    };
  },
  methods: {
    async uploadPet() {
      let formData = { name: "", email: "", FavoriteCategory: "" };
      for (let data in this.user) {
        if (data == "name") formData.name = (data, this.user[data]);
        if (data == "email") formData.email = (data, this.user[data]);
        if (data == "FavoriteCategory")
          formData.FavoriteCategory = (data, this.user[data]);
      }

      try {
        await axios.post("http://localhost:8000/signup", formData).then(() => {
          window.location.href = "/";
        });
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
<style>
/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  font-weight: bold;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin: 0;
}

main {
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 100px;
  max-width: 1280px;
  text-align: center;
}
img {
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1.2rem;
}

nav {
  padding: 0 1rem;
}

a,
a:visited {
  text-decoration: none;
  color: white;
}

a:hover {
  color: #00c58e;
}
</style>
