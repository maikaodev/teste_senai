<template>
  <header>
    <img src="./assets/logo-senai.png" alt="Logo" />
    <button>
      <img src="./assets/Nav menu.png" alt="Menu" />
    </button>
    <nav class="navigation">
      <ul>
        <li><a href="#">Institucional</a></li>
        <li><a href="#">Para Empresas</a></li>
        <li><a href="#">Fale Conosco</a></li>
        <li><a href="#">Transparência</a></li>
      </ul>
    </nav>
  </header>

  <section class="background-header">
    <img src="./assets/background-banner.jpeg" alt="Banner" />
    <div>
      <h1>Sobre o SENAI</h1>
      <p>Pelo Futuro do Ensino</p>
    </div>
  </section>

  <main>
    <h2>Unidades</h2>
    <p>
      Fazendo parte de um sistema nacional, composto por 27 federações estaduais
      e guiado pela Confederação Nacional da Indústria (CNI), o Serviço Nacional
      de Aprendizagem Industrial de Alagoas (SENAI/AL) é uma instituição de
      destaque, reconhecida por sua atuação de excelência na formação e
      capacitação profissional.
      <br />
      <br />
      Nossa missão é contribuir para o crescimento econômico de Alagoas,
      promovendo a qualificação da mão de obra, a disseminação de conhecimento
      tecnológico e o fortalecimento do setor industrial. Estamos comprometidos
      em impulsionar a indústria local e, assim, contribuir para o
      desenvolvimento do estado.
    </p>

    <section class="units">
      <ul>
        <li v-for="(unidade, index) in unidades" :key="index">
          <UnitCard
            :imagePath="unidade.imagePath"
            :title="unidade.title"
            :description="unidade.description"
          />
        </li>
      </ul>
    </section>

    <section class="courses">
      <ul>
        <li>
          <CourseCard />
        </li>
        <li>
          <CourseCard />
        </li>
      </ul>
    </section>
  </main>
</template>

<script lang="ts">
import UnitCard from './components/UnitCard.vue';
import CourseCard from './components/CourseCard.vue';

export default {
  components: {
    UnitCard,
    CourseCard,
  },
  data() {
    return {
      unidades: [
        {
          imagePath: 'https://i.imgur.com/b47KSHw.png',
          title: 'Senai Arapiraca',
          description:
            'As equipes do SESI orientam as empresas na implementação e no uso correto da ferramenta. ',
        },
        {
          imagePath: 'https://i.imgur.com/sPhuGED.png',
          title: 'Senai Benedito Bentes',
          description:
            'As equipes do SESI orientam as empresas na implementação e no uso correto da ferramenta. ',
        },
        {
          imagePath: 'https://i.imgur.com/Xm0SYwr.png',
          title: 'Senai Poço',
          description:
            'As equipes do SESI orientam as empresas na implementação e no uso correto da ferramenta. ',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;

  padding: 0 16px;

  img {
    object-fit: contain;
  }

  button {
    background: transparent;
    border: none;

    cursor: pointer;
  }
  nav {
    display: none;
  }
}
.background-header {
  width: 100%;
  height: 250px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 72, 154, 0.7); /* Azul com 50% de opacidade */
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div {
    width: 100%;
    height: 100%;

    position: absolute;

    top: 80px;
    left: 15px;
    z-index: 3;
    color: #ffffff;

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 20px;
    }
  }
}
main {
  margin: 0 16px;

  h2 {
    font-size: 32px;
  }
  p {
    font-family: 'Open Sans';
    font-weight: 300;
    font-size: 16px;

    padding: 0;
  }
  .units {
    ul {
      padding: 0;

      li {
        max-width: 778px;
        border-radius: 10px;

        background-color: #f8f8f8;

        gap: 16px;
        padding: 0 16px;

        list-style: none;
      }
    }
  }
  .courses {
    ul {
      font-family: 'Open Sans';

      padding: 0;
      list-style: none;
      li {
        max-width: 373px;

        max-height: 195px;

        display: flex;
        flex-direction: column;

        gap: 16px;
      }
    }
  }
}

@media screen and (min-width: 500px) {
  .courses {
    ul {
      display: flex;
      flex-direction: row;
      gap: 16px;
    }
  }
}

@media screen and (min-width: 767px) {
  header {
    button {
      display: none;
    }
    nav {
      display: block;
      ul {
        font-family: 'Open Sans';
        font-weight: 600;
        font-size: 14px;

        list-style: none;

        display: flex;
        align-items: center;

        gap: 16px;
        li {
          a {
            color: #0d2536;
            text-decoration: none;
          }
        }
      }
    }
  }

  .background-header {
    div {
      top: 80px;
      left: 50px;
    }
  }
}
</style>

