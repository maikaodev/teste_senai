<template>
  <div class="container">
    <img :src="imagePath" :alt="title" />
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
.container {
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

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 16px;
    h3 {
      font-weight: bolder;
      font-size: 24px;
      margin: 0;
    }
    p {
      font-family: 'Open Sans';

      font-weight: 300;

      text-align: center;
    }
    a {
      padding: 4px 24px;

      width: 113px;

      border-radius: 10px;

      background-color: #2a549f;
      color: #ffffff;

      text-decoration: none;
      text-align: center;
    }
  }
}

@media screen and (min-width: 500px) {
  .container {
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
      h3 {
        margin: 0;
      }

      gap: 16px;

      p {
        text-align: left;
      }
    }
  }
}

@media screen and (min-width: 1439px) {
  .container {
    flex-direction: row;

    gap: 24px;

    img {
      width: 250px;
      object-fit: contain;
    }
  }
}
</style>

