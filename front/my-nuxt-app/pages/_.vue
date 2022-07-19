<template>
  <h1>404 Not Found</h1>
</template>

<script>
export default {
  fetch({ redirect }) {
    return redirect("/404");
  },
};
</script>
<style>
h1 {
  font-size: 60px;
  text-align: center;
}
</style>
