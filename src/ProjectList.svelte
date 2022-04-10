<script>
    import Section from './Section.svelte';
    import Project from './Project.svelte';

    export let projects;
</script>

<Section title="Projects" classes="p-3 md:p-2 lg:p-0 md:w-3/4 max-w-screen-md">
    <ul class="flex flex-row flex-wrap gap-4 justify-center">
        {#each projects as project}
            <li class="project-wrapper"><Project {...project}/></li>
        {/each}
    </ul>
</Section>

<style lang="postcss">
    @media (min-width: 640px) {
        .project-wrapper {
            width: calc(50% - 20px);
        }
    }
</style>