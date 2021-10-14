<script>
    export let classes = "";
    export let title = "";

    const classList = classes 
        ? `page-section md:mb-5 ${classes.toString()}` 
        : 'page-section md:mb-5';
</script>

<section class={classList}>
    {#if title}
    <h2 class="text-2xl md:text-3xl font-medium mb-3">{title}</h2>
    {/if}
    <slot></slot>
</section>

<style lang="postcss">
    .page-section {
        @apply mb-3 flex flex-col items-center transition-all duration-100;
    }
</style>