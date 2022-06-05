<script>
    import Section from './Section.svelte';
    import Project from './Project.svelte';

    export let projects;
</script>

<Section title="Projects" classes="p-3 md:p-2 lg:p-0 w-full md:w-4/5 lg:w-3/5 max-w-screen-md">
    <ul class="flex flex-row flex-wrap gap-4 justify-between items-stretch">
        {#each projects as project}
            <li class="project-wrapper"><Project {...project}/></li>
        {/each}
    </ul>
</Section>

<style lang="postcss">
    .project-wrapper {
        @apply w-full;
    }

    @media (min-width: 640px) {
        .project-wrapper {
            width: calc(50% - 10px);
        }
    }
</style>