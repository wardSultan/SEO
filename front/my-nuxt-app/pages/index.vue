./pages/index.vue -->

<template>
  <div>
    <section class="hero is-medium is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <h2 class="subtitle" style="font-size: 60px">
            Search Engine Optimization from kisi
          </h2>
        </div>
      </div>
    </section>
    <section class="main-content">
      <h1 class="title has-text-centered">Available Article</h1>
      <br />
      <br />
      <br />
      <div class="column" v-for="article in articles" :key="article._id">
        <div class="container">
          <div class="col-md-12">
            <div class="card b-1 hover-shadow mb-20">
              <div class="media card-body">
                <div class="media-left pr-12">
                  <img
                    class="avatar avatar-xl no-radius"
                    :src="`${article.image_url}`"
                  />
                </div>
                <div class="media-body">
                  <div class="mb-2">
                    <span class="fs-20 pr-16">
                      <div>
                        <nuxt-link
                          style="
                            color: blue;
                            font-size: 20px;
                            font-family: Cursive;
                            text-decoration: none;
                          "
                          type="button"
                          class="btn btn-link"
                          :to="`/${article.category}/${article.title}`"
                          >{{ article.title }}</nuxt-link
                        >
                      </div>
                    </span>
                  </div>
                  <small class="fs-16 fw-300 ls-1">
                    <p>
                      {{ article.description }}
                    </p></small
                  >
                </div>
              </div>
              <footer class="card-footer flexbox align-items-center">
                <div>
                  <strong>Applied on:</strong>
                  <span>{{ article.pubDate.slice(0, -8) }}</span>
                </div>
              </footer>
            </div>

            <br />
          </div>
        </div>
      </div>

      <div>
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: "Home",
  },
  async asyncData(context) {
    try {
      return await fetch("http://localhost:8000/articles")
        .then((res) => res.json())
        .then((data) => {
          return { articles: data };
        });
    } catch (e) {
      console.error("SOMETHING WENT WRONG :" + e);
    }
  },
  data() {
    return {
      articles: [],
    };
  },
};
</script>

<style>
.main-content {
  margin: 20px 0;
}
body {
  font-family: "Open Sans Condensed", sans-serif;
}

p {
  font-size: 22px;
}

.home-footer {
  margin-top: 20vh;
}

.titleS {
  margin-right: 1220px;
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 20px;
}

input {
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-block;
  *display: inline; /* for IE7*/
  zoom: 1; /* for IE7*/
  vertical-align: middle;
  margin-left: 20px;
}

label {
  display: inline-block;
  *display: inline; /* for IE7*/
  zoom: 1; /* for IE7*/

  padding-top: 5px;
  text-align: right;
  width: 140px;
}
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}
</style>
