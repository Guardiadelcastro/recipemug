<template>
  <nav class="about-us">
    <div class="title">
      About Us
    </div>
    <div class="description">
      <p class="text">
        Somos un grupo formado por 4 jóvenes entusiastas de la Informática y la Tecnología, que se están inicializando en el mundo de la programación web gracias a la docencia impartida por el profesorado de la Escuela de Organización Industrial (EOI). En concreto, ha sido durante nuestra estancia en el curso Full Stack organizado en Santa Cruz de Tenerife, el cual nos ha permitido empaparnos de los conocimientos necesarios para poder llevar a cabo nuestra propia página web.
      </p>  
    </div>
    <div class="members">
      <div class="developer A">
        <div class="box1">
          <div class="photo" />
        </div>
        <p class="name 1">
          Alejandro Castro de la Guardia
        </p>
        <div class="links">
          <a
            href="https://github.com/Guardiadelcastro"
            target="_blank"
          >
            <i class="fab fa-github" /> 
          </a>
          <a
            href="https://www.linkedin.com/in/acastrodelaguardia/"
            target="_blank"
          >
            <i class="fab fa-linkedin" />
          </a>
        </div>
      </div>
      <div class="developer B">
        <div class="box2" />
        <p class="name 2">
          Aythami Z. Martín González
        </p>
        <div class="links">
          <a
            href="https://github.com/Aythamiza"
            target="_blank"
          >
            <i class="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/aythami-z-martin-gonzalez-645676171/"
            target="_blank"
          >
            <i class="fab fa-linkedin" />
          </a>
        </div>
      </div>
      <div class="developer C">
        <div class="box3" />
        <p class="name 3">
          Richard Morales Luis
        </p>
        <div class="links">
          <a
            href="https://github.com/RichardMoralesLuis"
            target="_blank"
          >
            <i class="fab fa-github" />
          </a> 
          <a
            href="https://www.linkedin.com/in/richardmoralesluis/"
            target="_blank"
          >
            <i class="fab fa-linkedin" />
          </a>
        </div>  
      </div>
      <div class="developer D"> 
        <div class="box4" />
        <p class="name 4">
          Javier Pérez García
        </p>
        <div class="links">
          <a
            href="https://github.com/JavierPerezGarcia"
            target="_blank"
          >
            <i class="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/javier-p%C3%A9rez-garc%C3%ADa-ba5555171/"
            target="_blank"
          >
            <i class="fab fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name:'AboutUs',
  props: {}
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'

  .about-us
    background-image url('https://assets.recipemug.club/img/landing1.jpg')
    display flex
    flex-direction column
    align-items center
    margin 10px 12px 12px 10px
    transition-duration 0.7s
    -webkit-box-shadow: 3px 3px 3px 2px rgba(0,0,0,0.4)
    -moz-box-shadow: 3px 3px 3px 2px rgba(0,0,0,0.4)
    box-shadow: 3px 3px 3px 2px rgba(0,0,0,0.4)

  .title
    color $white
    font-family $font-title
    margin-top 15px
    font-size 2.2em
    padding-right 1px
    border-bottom 1.5px dashed $dark-grey
    text-shadow: rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px, rgb(0, 0, 0) -0.416147px 0.909297px 0px, rgb(0, 0, 0) -0.989992px 0.14112px 0px, rgb(0, 0, 0) -0.653644px -0.756802px 0px, rgb(0, 0, 0) 0.283662px -0.958924px 0px, rgb(0, 0, 0) 0.96017px -0.279415px 0px

  .description
    text-align justify
    font-family $font
    font-size 97%
    margin 15px 25px 0px 25px
    height 80px
    background $transparent
    text-shadow: 0px 0.1px 0px;
  
  .text
    margin 10px 10px

  .members
    //border 1px solid $black
    //margin 10px 10px
    display flex
    flex-direction row
    justify-content center
    align-items flex-start
    width 100%
    height 70%

  .developer
    //border 1px solid $black
    display flex
    flex-direction column
    justify-content flex-start
    align-items center
    height 100%
    width 280px
   
  .box1
    background-image url(https://assets.recipemug.club/img/aboutus/alejandro.jpg)
    background-size cover
    display flex
    align-items center
    justify-content center
    width 200px
    height 200px
    border 1px solid black
    margin 0px 0px 10px 0px
    border-radius 50%
    flex-direction column
    margin-top 10px

  .box2
    background-image url(https://assets.recipemug.club/img/aboutus/aythami.jpg)
    background-size cover
    display flex
    align-items center
    justify-content center
    width 200px
    height 200px
    border 1px solid black
    margin 0px 0px 10px 0px
    border-radius 50%
    flex-direction column
    margin-top 10px

  .box3
    background-image url(https://assets.recipemug.club/img/aboutus/richard.jpg)
    background-size cover
    display flex
    align-items center
    justify-content center
    width 200px
    height 200px
    border 1px solid black
    margin 0px 0px 10px 0px
    border-radius 50%
    flex-direction column
    margin-top 10px
  
  .box4
    background-image url(https://assets.recipemug.club/img/aboutus/javier.jpeg)
    background-size cover
    display flex
    align-items center
    justify-content center
    width 200px
    height 200px
    border 1px solid black
    margin 0px 0px 10px 0px
    border-radius 50%
    flex-direction column
    margin-top 10px

  .links
    flex-direction row
  
  .name
    margin-top 15px
    color $black
    font-family $font
    text-decoration none
    font-size 97%
    border-bottom 1px dashed $black
  
  a
    margin 5px
    font-size 2em
    color $black
    :hover
      color $purple
 
</style>

