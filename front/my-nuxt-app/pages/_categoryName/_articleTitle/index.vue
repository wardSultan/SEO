<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card b-1 hover-shadow mb-20">
        <div class="media card-body">
          <div class="media-left pr-12">
            <img
              class="avatar avatar-xl no-radius"
              :src="`${article.article[0].image_url}`"
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
                    :to="`/${article.article[0].category}/${article.article[0].title}`"
                    >{{ article.article[0].title }}</nuxt-link
                  >
                </div>
              </span>
            </div>
            <small class="fs-16 fw-300 ls-1">
              <p>
                {{ article.article[0].description }}
              </p></small
            >
          </div>
        </div>
        <footer class="card-footer flexbox align-items-center">
          <div>
            <strong>Applied on:</strong>
            <span>{{ article.article[0].pubDate.slice(0, -8) }}</span>
          </div>
        </footer>
      </div>

      <br />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    try {
      let article = await fetch(
        `http://localhost:8000/articles/title/${params.articleTitle}`
      )
        .then((res) => res.json())
        .then((data) => data);
      return { article };
    } catch (e) {
      console.error("SOMETHING WENT WRONG :" + e);
      return { article: {} };
    }
  },
  head() {
    return {
      title: this.article.article[0].title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
      ],
    };
  },
};
</script>
