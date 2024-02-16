<script>
    export let nom;
    export let image;
</script>
<style>
    h4 {
        color: red;
    }
    img {
        width: 25vw;
        height: 25vh;
    }
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
        background-color: lightgray;
        padding: 1em;
        border-radius: 4em;
    }
</style>

<section>
    <h4>{nom}</h4>
    <img src={image} alt={nom}>
</section>