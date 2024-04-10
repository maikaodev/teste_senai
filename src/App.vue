<template>
  <header>
    <img src="./assets/logo-senai.png" alt="Logo" loading="lazy" />
    <button @click="toggleDrawer">
      <img src="./assets/Nav menu.png" alt="Menu" loading="lazy" />
    </button>

    <nav class="navigationsm" v-if="drawer">
      <ul>
        <li><a href="#">Institucional</a></li>
        <li><a href="#">Para Empresas</a></li>
        <li><a href="#">Fale Conosco</a></li>
        <li><a href="#">Transparência</a></li>
      </ul>
    </nav>

    <nav class="navigation">
      <ul>
        <li><a href="#">Institucional</a></li>
        <li><a href="#">Para Empresas</a></li>
        <li><a href="#">Fale Conosco</a></li>
        <li><a href="#">Transparência</a></li>
      </ul>
    </nav>
  </header>
  <div class="background-header">
    <img src="./assets/background-banner.jpeg" alt="Banner" loading="lazy" />
    <div>
      <h1>Sobre o SENAI</h1>
      <p>Pelo Futuro do Ensino</p>
    </div>
  </div>

  <main>
    <div class="container">
      <h2>Unidades</h2>
      <p>
        Fazendo parte de um sistema nacional, composto por 27 federações
        estaduais e guiado pela Confederação Nacional da Indústria (CNI), o
        Serviço Nacional de Aprendizagem Industrial de Alagoas (SENAI/AL) é uma
        instituição de destaque, reconhecida por sua atuação de excelência na
        formação e capacitação profissional.
        <br />
        <br />
        Nossa missão é contribuir para o crescimento econômico de Alagoas,
        promovendo a qualificação da mão de obra, a disseminação de conhecimento
        tecnológico e o fortalecimento do setor industrial. Estamos
        comprometidos em impulsionar a indústria local e, assim, contribuir para
        o desenvolvimento do estado.
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
    </div>

    <aside>
      <section>
        <h2>Conheça</h2>
        <nav>
          <li><a href="#" class="active">Sobre a SENAI</a></li>
          <li><a href="#">Diretoria e Equipe Executiva</a></li>
          <li><a href="#">Vagas abertas</a></li>
          <li><a href="#">Todas as Unidades</a></li>
        </nav>
      </section>

      <section>
        <h2>Transparência</h2>
        <nav>
          <li><a href="#">Transparência SENAI</a></li>
          <li><a href="#">Prestação de Contas TCU</a></li>
          <li><a href="#">Política de Privacidade</a></li>
          <li><a href="#">Segurança da Informação</a></li>
        </nav>
      </section>
    </aside>
  </main>

  <footer>
    <img src="./assets/logo-senai-footer.png" alt="Logo Senai" loading="lazy" />
  </footer>
</template>

<script lang="ts">
import UnitCard from './components/UnitCard.vue';
import CourseCard from './components/CourseCard.vue';

import senaiArapiraca from './assets/senai_arapiraca.png';
import senaiBeneditoBentes from './assets/senai_benedito_bentes.png';
import senaiPoco from './assets/senai_poco.png';

export default {
  components: {
    UnitCard,
    CourseCard,
  },
  data() {
    return {
      drawer: false,
      unidades: [
        {
          imagePath: senaiArapiraca,
          title: 'Senai Arapiraca',
          description:
            'As equipes do SESI orientam as empresas na implementação e no uso correto da ferramenta. ',
        },
        {
          imagePath: senaiBeneditoBentes,
          title: 'Senai Benedito Bentes',
          description:
            'As equipes do SESI orientam as empresas na implementação e no uso correto da ferramenta. ',
        },
        {
          imagePath: senaiPoco,
          title: 'Senai Poço',
          description:
            'As equipes do SESI orientam as empresas na implementação e no uso correto da ferramenta. ',
        },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
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

  .navigation {
    display: none;
  }

  .navigationsm {
    @-webkit-keyframes scale-up-hor-right {
      0% {
        -webkit-transform: scaleX(0.4);
        transform: scaleX(0.4);
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
      }
      100% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
      }
    }
    @keyframes scale-up-hor-right {
      0% {
        -webkit-transform: scaleX(0.4);
        transform: scaleX(0.4);
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
      }
      100% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
      }
    }

    position: absolute;

    width: 150px;
    top: 60px;
    right: 0;
    z-index: 4;

    height: 100%;

    background-color: #ffffff;

    transition: all 0.75s;
    -webkit-animation: scale-up-hor-right 0.4s
      cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation: scale-up-hor-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;

    ul {
      display: flex;
      flex-direction: column;

      width: 100%;

      padding: 0;
      margin-left: 4px;

      gap: 4px;
      list-style: none;
      li {
        line-height: 24px;
        background: rgba(0, 72, 154);
        padding: 8px 16px;

        cursor: pointer;
        a {
          text-decoration: none;

          color: #ffffff;
        }
      }
    }
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
    height: 100%;

    color: #ffffff;

    position: absolute;

    top: 0;

    margin-left: 24px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    z-index: 3;

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 20px;
    }
  }
}
main {
  aside {
    display: none;
  }

  .container {
    display: flex;
    flex-direction: column;

    gap: 24px;

    padding: 16px;

    h2 {
      font-size: 32px;

      margin: 0;
    }
    p {
      font-family: 'Open Sans';
      font-weight: 300;
      font-size: 16px;

      padding: 0;
      margin: 0;
    }

    .units {
      ul {
        padding: 0;
        margin-top: 0;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        gap: 16px;

        li {
          border-radius: 10px;

          background-color: #f8f8f8;

          gap: 16px;

          list-style: none;
        }
      }
    }

    .courses {
      ul {
        width: 100%;

        font-family: 'Open Sans';

        display: flex;
        flex-direction: column;
        gap: 16px;

        margin-top: 0;

        padding: 0;
        list-style: none;

        li {
          width: 100%;

          display: flex;
          flex-direction: column;

          gap: 16px;
        }
      }
    }
  }
}

footer {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(1, 72, 152, 1);

  img {
    width: 160px;

    margin: 24px 0;
    object-fit: contain;
  }
}

@media screen and (min-width: 500px) {
  main {
    .container {
      .courses {
        ul {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;

          li {
            width: 80%;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 767px) {
  header {
    button {
      display: none;
    }

    .navigationsm {
      display: none;
    }
    .navigation {
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
}

@media screen and (min-width: 1023px) {
  main {
    display: flex;
    flex-direction: row;

    padding: 24px;
    margin: 0px;

    .container {
      flex: 1;

      .units {
        width: 778px;

        ul {
          li {
            width: 778px;
          }
        }
      }
      .courses {
        width: 778px;

        ul {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          li {
            flex: 1;
            width: 373px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1439px) {
  main {
    .container {
      flex: 1;

      .units {
        width: 100%;

        ul {
          li {
            width: 100%;
          }
        }
      }

      .courses {
        width: 100%;
      }
    }
    aside {
      display: flex;
      flex-direction: column;
      align-items: center;

      flex: 1;

      gap: 50px;

      font-family: Inter;

      section {
        width: 390px;

        background-color: rgba(237, 237, 237, 0.5);
        padding: 16px;
        border-radius: 8px;

        nav {
          list-style: none;

          li {
            font-size: 16px;

            line-height: 24px;
            a {
              text-decoration: none;
              color: rgba(0, 24, 52, 1);
              &.active {
                color: rgba(42, 84, 159, 1);
              }
            }
          }
        }
      }
    }
  }
}
</style>

746

