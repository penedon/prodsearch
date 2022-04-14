<template>
    <div class="aboutBlock">
        <h5>{{$t('contact')}}</h5>
        <br>
        <div class="row">
            <div class="col d-sm-none"></div>
            <a v-for="entry in contacts" :key="entry.name" class="col-3 col-sm-4"
                    :href="entry.url"
                    :title="entry.url"
                    target="_blank">
                <div class="aboutIcon">
                    <font-awesome-icon :icon="[entry.iconType, entry.icon]" />
                </div>
                <p v-show="!entry.hover">{{entry.name}}</p>
                <p v-show="entry.hover">{{entry.value}}</p>
            </a>
            <div class="col d-sm-none"></div>
        </div>
        
    </div>
</template>

<script>
export default {
    computed: {
        contacts () {
            return [
                {name: 'Gustavo Penedo', icon: 'user', iconType: "fa", value: 'Gustavo F Penedo', url: null, hover:false},
                {name: 'Email', icon: 'envelope', iconType: "fa", value: null, url: 'mailto:gustavo-penedo@hotmail.com', hover:false},
                {name: 'LinkedIn', icon: 'linkedin-in', iconType: "fab", value: null, url: 'https://www.linkedin.com/in/gustavopenedo/', hover:false}
            ]
        }
    }
}
</script>

<style scoped>
    .aboutBlock {
        position: absolute;
        bottom: 0;
        padding: 20px;
        left: 50%;
        width: 500px;
        transform: translateX(-50%);
        color: var(--var-secondary-color) !important;
    }
    .aboutIcon {
        display: inline-block;
        position: relative;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: var(--var-primary-color);
        transition: background-color 0.3s ease;

    }
    a {
        text-decoration: none !important;
    }
    a:hover .aboutIcon {background-color: var(--var-primary-color-light);}
    .aboutIcon svg {
        position: absolute;
        width: 50%;
        height: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #f4f4f4;
    }
</style>