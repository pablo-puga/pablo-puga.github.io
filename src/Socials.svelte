<script>
    export let rrss;
</script>

<section class="flex flex-col items-center">
    <h2 class="text-2xl md:text-3xl font-medium mb-3">You can find me at</h2>
    <ul class="flex flex-row flex-wrap justify-center gap-5 text-xl">
        {#each rrss as network}
        <article class="social flex flex-row items-center transition-all duration-200 hover:text-2xl" style={`--hover-color: ${network.color}`}>
            <svg
                aria-hidden="true"
                class="fa-icon"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${network.icon[0]} ${network.icon[1]}`}
            >
                <path fill="currentColor" d={network.icon[4]}/>
            </svg>
            <h3 class="inline-block ml-1">
                <a href={network.link} title={network.name}>{network.display}</a>
            </h3>
        </article>
        {/each}
    </ul>
</section>

<style>
    .fa-icon {
        overflow: hidden;
        width: 1em;
        height: 1em;
        display: inline-block;
    }

    .social:hover {
        color: var(--hover-color);
    }
</style>