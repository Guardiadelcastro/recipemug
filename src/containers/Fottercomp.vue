<template>
  <footer>
    <div class="container">
      <ul class="bd-footer-links">
        <div class="link">
          <RouterLink to="/">
            Home
          </RouterLink>
        </div>
        
        <div class="link">
          <a
            href="https://github.com/Guardiadelcastro/recipemug"
            target="_blank"
          >
            Github front.
          </a>
        </div>
        <div class="link">
          <a
            href="https://github.com/Guardiadelcastro/recipemug-backend"
            target="_blank"
          >
            Github Backend.
          </a>
        </div>
        <div>
          <p>The page has been developed by a group of students from the EOIFULLSTACK course</p>
        </div>
      </ul>
    </div>
  </footer>
</template>

<style lang="stylus" scoped>
.container
  display: flex
  height: 100%
  background-color red
  flex-direction: column
  align-content right 
</style>
