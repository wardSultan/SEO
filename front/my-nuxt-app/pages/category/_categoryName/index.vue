<template>
  <div>
    <h1 v-if="article.message">No Article Found! Please try later...</h1>
    <div
      class="column"
      v-else
      v-for="article in article.article"
      :key="article._id"
    >
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
                <span>{{ article.pubDate.slice(0, -15) }}</span>
              </div>
            </footer>
          </div>

          <br />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: "category",
  },
  async asyncData({ params }) {
    try {
      let article = await fetch(
        `http://localhost:8000/articles/category/${params.categoryName}`
      )
        .then((res) => res.json())
        .then((data) => data);
      return { article };
    } catch (e) {
      console.error("SOMETHING WENT WRONG :" + e);
      return {
        article: [],
      };
    }
  },
};
</script>
