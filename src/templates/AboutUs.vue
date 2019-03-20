<template>
  <main class="index-container">
    <div class="index-content"> 
      <h1 class="title">
        About Us
      </h1>
      <div class="wrap">
        <article class="info">
          We are a group of junior developers learning the ways of the web. We are starting on our Full-Stack yourney thanks to the teachers and the team of EOI (Escuela de Organización Industrial). We are all from Tenerife and this is our first project
        </article>
      </div>
      <div class="team">
        <div
          v-for="dev in team"
          :key="dev.name"
          class="developer"
        >
          <img
            :src="dev.img"
            class="image"
            :alt="dev.img + 'image'"
          >
          <h3 class="name">
            {{ dev.name }}
          </h3>
          <div class="icons">
            <a :href="dev.github"> <i class="fab fa-github" /></a>
            <a :href="dev.linkedin"> <i class="fab fa-linkedin" /></a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name:'AboutUs',
  data() {
    return {
      team: [
        {
          name: 'Javier Pérez García',
          img: 'https://assets.recipemug.club/img/aboutus/javier.jpeg',
          github: 'https://github.com/JavierPerezGarcia',
          linkedin: 'https://www.linkedin.com/in/javier-p%C3%A9rez-garc%C3%ADa-ba5555171/'
        },
        {
          name: 'Richard Morales Luis',
          img: 'https://assets.recipemug.club/img/aboutus/richard.jpg',
          github: 'https://github.com/RichardMoralesLuis',
          linkedin: 'https://www.linkedin.com/in/richardmoralesluis/'
        },
        {
          name: 'Aythami Z. Martín González',
          img: 'https://assets.recipemug.club/img/aboutus/aythami.jpg',
          github: 'https://github.com/Aythamiza',
          linkedin: 'https://www.linkedin.com/in/aythami-z-martin-gonzalez-645676171/'
        },
        {
          name: 'Alejandro Castro de la Guardia',
          img: 'https://media.licdn.com/dms/image/C5603AQEngQGDLsXfTg/profile-displayphoto-shrink_100_100/0?e=1558569600&v=beta&t=HUet-68ooJri_NVQ_1C9J-CgCPtT668RQrhUfLc_oic',
          github: 'https://github.com/Guardiadelcastro',
          linkedin: 'https://www.linkedin.com/in/acastrodelaguardia/'
        },
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/variables'
@import '../styles/mixins'

.index-container
  max-width 100%
  right-gradient()
  padding 5px
  box-sizing border-box

.index-content
  box-sizing border-box
  min-height 100%
  padding 20px
  display flex
  flex-flow column
  align-items center
  justify-content flex-start
  background $background

.title, .table-title
  justify-self center
  font-family $font-title
  font-size 3em
  margin 0
  right-gradient()
  color transparent
  background-clip text
  margin 20px 0
.table-title
  font-size 2em

.wrap
  right-gradient()
  padding: 3px;
  margin 30px

.info
  color $dark
  font-size 1.5em
  text-align justify
  background $background
  margin 0
  padding 20px
.team
  display grid 
  grid-template-columns 1fr 1fr 1fr 1fr
  grid-template-rows auto
  grid-gap 5px
  .developer
    display grid
    grid-template-rows 2fr 1fr 1fr
    align-content center
    justify-content center
    padding 10px
    border-radius $br
    text-align center
    .image
      grid-row 1/2
      width 100px
      height 100px
      place-self center
      border-radius 50px
    .name
      grid-row 2/3
      font-size 0.75em
    .icons
      grid-row 3/4
      display flex
      flex-flow row nowrap
      justify-content space-evenly
      align-items center
      width 100%

a
  text-decoration none
 
i
  color $dark
  font-size 2em
  &:hover
    color $green

</style>

