<script>
    import Section from './Section.svelte';
    import FaIcon from './FaIcon.svelte';

    export let rrss = [];
</script>

<Section title="You can find me at">
    <ul class="flex flex-row flex-wrap justify-center gap-5 text-xl">
        {#each rrss as network}
        <li class="social flex flex-row items-center transition-all duration-200 hover:underline" style={`--hover-color: ${network.color}`}>
            <FaIcon path={network.icon[4]} width={network.icon[0]} height={network.icon[1]}/>
            <h3 class="inline-block ml-1">
                <a href={network.link} title={network.name}>{network.display}</a>
            </h3>
        </li>
        {/each}
    </ul>
</Section>

<style>
    .social:hover {
        color: var(--hover-color);
    }
</style>