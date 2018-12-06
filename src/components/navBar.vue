<template>
    <div class="web-nav">
        <nav class="nav-bar">
            <div class="search-box">
                <input class="search" type="text" placeholder="What would you like to cook today?">
            </div>
            <div class="new-box">
                <div class="new-recipe">
                    <font-awesome-icon icon="plus-square" />
                </div>
            </div>
            <div class="user-box">
                <div class="user-settings">
                    <font-awesome-icon icon="user" />
                </div>
            </div>
        </nav>
    </div>
</template>

<style lang="postcss">
    .nav-bar{
        background: #82e863;
        position: absolute;
        top: 0;
        left: 0;
        min-width: 100%;
        display: grid;
        grid-template-columns: 170px 700px auto 100px 100px;
        grid-gap: 7px;
        min-height: 50px;
        align-items: center;
        box-shadow: 1px 2px 4px 0 rgba(0,0,0,.3);
    }
    .search-box {
        grid-column: 2 / 3;
        margin-left: 50px;
    }
    .search {
        width: 450px;
        height: 25px;
        border-radius: 50px;
        border: 2px solid #3F250B;
        padding-left: 10px;
        outline: none;
    }
    .new-box {
        grid-column: 4 / 5;
        background:#82e863;
        height: 70%;
        width: 35%;
        border: 2px dashed #3F250B;
        border-radius: 2px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
    }
    .new-recipe {
        color:#3F250B;
    }
    .user-box {
        grid-column: 5 / 6;
        background:#82e863;
        height: 70%;
        width: 35%;
        border: 2px dashed #3F250B;
        border-radius: 2px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
    }   
    .user-settings {
        color: #3F250B;
    }
</style>

