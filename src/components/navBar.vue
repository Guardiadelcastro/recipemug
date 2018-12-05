<template>
    <div class="web-nav">
        <nav class="nav-bar">
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
        grid-template-columns: 100px 600px auto 100px 100px;
        min-height: 50px;
        justify-items: center;
        align-items: center;
        box-shadow: 1px 2px 4px 0 rgba(0,0,0,.3);
    }
    .new-box {
        background:#82e863;
        height: 70%;
        width: 35%;
        border: 2px dashed #3F250B;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
    }
    .new-recipe {
        color:#3F250B;
    }
    .user-box {
        background:#82e863;
        height: 70%;
        width: 35%;
        border: 2px dashed #3F250B;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
    }   
    .user-settings {
        color: #3F250B;
    }
</style>

