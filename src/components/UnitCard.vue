<template>
  <div class="content">
    <img :src="imagePath" :alt="title" loading="lazy" />
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
.content {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 16px;

  max-width: 778px;

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
    justify-content: space-between;

    height: 168px;
    margin-left: 20px;
    margin-top: 16px;

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
  .content {
    flex-direction: row;

    img {
      width: 100px;

      border-radius: 10px;

      object-fit: cover;
    }
    .description {
      display: flex;
      flex-direction: column;

      align-items: flex-start;
      margin-top: 0;

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
  .content {
    flex-direction: row;

    img {
      width: 250px;
      object-fit: contain;
    }

    .description {
      margin-left: 0;
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
</style>

