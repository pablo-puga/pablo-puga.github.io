<script>
    export let classes = "";
    export let title = "";

    const classList = classes 
        ? `flex flex-col items-center ${classes.toString()}` 
        : 'flex flex-col items-center';
</script>

<section class={classList}>
    {#if title}
    <h2 class="text-2xl md:text-3xl font-medium mb-3">{title}</h2>
    {/if}
    <slot></slot>
</section>