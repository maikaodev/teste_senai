<template>
  <img src="../assets/chocotone.jpg" alt="Chocotone" />
  <div class="content">
    <h3>fabricação de panetones e chocotones</h3>
    <p>
      O Curso de Iniciação Profissional em Fabricação de Panetones e Chocotones
      do SENAI Alagoas busca preparar os alunos para a fabricação...
    </p>
    <div>
      <span>Início: <strong>18/10/2021</strong></span>
      <br />
      <span>Investimento: <strong>6x de R$ 66,50</strong></span>
    </div>

    <a href="#">Confira</a>
  </div>
</template>
<script>
export default {
  name: 'CourseCard',
};
</script>

<style lang="scss" scoped>
img {
  object-fit: contain;
}

.content {
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 16px;
  padding: 0 8px;
  padding-bottom: 16px;

  border-radius: 0 0 8px 8px;

  h3 {
    font-weight: 700;
    text-transform: uppercase;
    color: #00489a;

    margin: 0;
  }
  p {
    font-size: 12px;
  }
  span {
    text-align: left;

    font-size: 14px;
    color: #00244d;
    strong {
      font-weight: bolder;
    }
  }
  a {
    text-decoration: none;
    width: 95%;

    display: flex;
    justify-content: center;
    align-self: center;

    padding: 8px;
    margin-top: 16px;

    background-color: #00489a;
    color: #fff;
    border-radius: 8px;

    cursor: pointer;
  }
}
</style>

