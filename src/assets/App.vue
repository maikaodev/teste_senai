<template>
  <header>
    <img src="./assets/logo-senai.png" alt="Logo" />
    <button>
      <img src="./assets/Nav menu.png" alt="Menu" />
    </button>
  </header>
  <section>
    <img src="./assets/Background-banner.png" alt="" />
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
    <ul v-for="unidade in unidades">
      <li>
        <Card
          :imagePath="unidade.imagePath"
          :title="unidade.title"
          :description="unidade.description"
        />
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
import Card from './components/Units_cards.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      unidades: [
        {
          imagePath: '../assets/senai_arapiraca.png',
          title: 'Senai Arapiraca',
          description:
            'As equipes do SESI orientam as empresas na implementação e no uso correto da ferramenta. ',
        },
        {
          imagePath: '../assets/senai_arapiraca.png',
          title: 'Senai Benedito Bentes',
          description:
            'As equipes do SESI orientam as empresas na implementação e no uso correto da ferramenta. ',
        },
        {
          imagePath: '../assets/senai_arapiraca.png',
          title: 'Senai Poço',
          description:
            'As equipes do SESI orientam as empresas na implementação e no uso correto da ferramenta. ',
        },
      ],
    };
  },
  methods: {},
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
}
section {
  width: 500px;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
  }
}
main {
  padding: 0 16px;
  h2 {
    font-size: 32px;
  }
  p {
    font-family: 'Open Sans';
    font-weight: 300;
    font-size: 16px;
  }
  ul {
    padding: 0;
    li {
      display: flex;
      height: 213px;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;

      border-radius: 10px;

      background-color: #f8f8f8;
      gap: 16px;
      list-style: none;
    }
  }
}
</style>

