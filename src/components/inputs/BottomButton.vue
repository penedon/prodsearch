<template>
    <button class="outer-button">
        <div class=" container-lg">
            {{$t('compare')}}
        </div>
    </button>
</template>

<style scoped>
    .outer-button {
        position: fixed;
        left: 0;
        height: 52px;
        z-index: 499;
        width: 100vw;
        background-color: var(--var-primary-color);
        color: white;
    }
    .outer-button:hover {
        background-color: var(--var-primary-color-light);
    }
</style>