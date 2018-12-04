<template>
    <div class="web-nav">
        <nav class="nav-bar">
            <div class="new-recipe">
                <font-awesome-icon icon="plus-square" />
            </div>
            <div class="user-settings">
                <font-awesome-icon icon="user-circle" />
                <button class="new">USER</button>
            </div>
        </nav>
    </div>
</template>

<style>
    .nav-bar{
        background: #82e863;
        position: absolute;
        top: 0;
        left: 0;
        min-width: 100%;
        display: grid;
        grid-template-columns: repeat(11, 1fr);
        grid-template-rows: 1fr;
        grid-gap: 10px;
        min-height: 50px;
        justify-items: center;
        align-items: center;
        box-shadow: 1px 2px 4px 0 rgba(0,0,0,.3);
    }

    .new-recipe {
        grid-column: 10 / 11;
    }

    .user-settings {
        grid-column: 11 / 12;
    }

    
</style>

