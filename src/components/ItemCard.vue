<template>
    <div class="item-card">
        <img :src="item.imageUrl" alt="">
        <div class="description">
            <div class="description-inner">
                <h2>{{ item.name }}</h2>
                <p>{{ item.description }}</p>
            </div>
            <div class="description-inner static">
                <div class="action-bar">
                    <span class="price valign-inner">{{ item.cost_per_hour }}₽</span>
                    <round-button :variant="`white`" @click="check()">Добавить</round-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            age_id: Number,
            cost_per_hour: Number,
            description: String,
            name: String,
            season_id: Number,
            imageUrl: String
        }
    },
    data: () => ({
        
    }),
    methods: {
        check() {
            console.log('button clicked')
        }
    }
}
</script>

<style scoped>
    img {
        width: -webkit-fill-available;
    }

    h2 {
        margin-bottom: 10px;
    }
    
    .item-card {
        max-width: 380px;
        height: 300px;
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        cursor: pointer;

        background-color: white;
        border: 1px solid var(--color-platinum-gray);
        border-radius: 20px;
    }

    .item-card * {
        color: white;
    }

    .item-card:hover {
        /* transition: transform .1s cubic-bezier(.29, 1.01, 1, -0.68); */
        transition: box-shadow .2s ease-in-out;
        /* transform: translateY(-10px); */
        border-color: var(--color-main-accent);
        box-shadow: 0 0 0 5px var(--color-main-layer);
    }

    .description {
        position: absolute;
        box-sizing: border-box;
        bottom: 0;
        width: 100%;
        height: 45%;

        transition: height .2s ease-in-out;
        background-color: var(--color-main-accent-transparent);
        border-radius: 20px;
    }

    .description:hover {
        height: 80%;
    }

    .description-inner {
        box-sizing: border-box;
        width: 100%;
        padding: 20px;
    }

    .description-inner.static {
        padding-top: 25px;
        position: absolute;
        bottom: 0;

        background: rgb(106,124,241);
        background: linear-gradient(0deg, rgba(106,124,241,1) 0%, rgba(106,124,241,1) 0%, rgba(106,124,241,1) 77%, rgba(106,124,241,0) 100%);
    }

    .action-bar {
        display: flex;
        box-sizing: border-box;
        width: 100%;
        justify-content: space-between;
    }

    span.price {
        font-size: 24px;
        font-weight: 900;
    }

    #button-add.button {
        display: block;
        width: 100%;
        margin-bottom: 20px;
    }

    .item-card-inner {
        height: 200px;
    }

    .button {
        /* border-radius: 30px!important; */
    }
</style>