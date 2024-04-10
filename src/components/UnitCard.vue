<template>
  <div>
    <!-- <img :src="imagePath" :alt="title" /> -->
    <img src="../assets/senai_arapiraca.png" alt="" />
    <div class="description">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <a href="#">Ver mais</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UnitCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imagePath: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 16px 0;

  img {
    width: 200px;
    height: 168px;

    border-radius: 10px;

    object-fit: cover;
  }

  h3 {
    font-weight: bolder;
    font-size: 24px;
  }
  p {
    font-family: 'Open Sans';

    font-weight: 300;

    text-align: center;
  }
  a {
    padding: 4px 24px;

    border-radius: 10px;

    background-color: #2a549f;
    color: #ffffff;

    text-decoration: none;
  }
}

@media screen and (min-width: 500px) {
  div {
    flex-direction: row;

    gap: 24px;

    img {
      width: 100px;
      height: 168px;

      border-radius: 10px;

      object-fit: cover;
    }
    .description {
      display: flex;
      flex-direction: column;

      margin: 16px 0;
      p {
        text-align: left;
      }
    }
  }
}
</style>

