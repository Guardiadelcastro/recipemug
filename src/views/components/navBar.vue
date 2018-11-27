<template>
    <div class="web-nav">
        <nav class="nav-bar">
            <div class="newRecipe">
                <a href=""></a>
                <p>NEW</p>
            </div>
            <div class="userSettings">
                <a href=""></a>
                <p>ICON</p>
            </div>
        </nav>
    </div>
</template>

<style>
    .nav-bar{
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: 1fr;
        grid-gap: 10px;
        min-height: 50px;
        justify-items: center;
        align-items: center;
        box-shadow: 1px 2px 4px 0 rgba(0,0,0,.3);
    }
</style>

