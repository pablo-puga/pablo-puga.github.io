<script>
    export let classes;
    const classList = classes 
        ? `flex flex-col items-center ${classes.toString()}` 
        : 'flex flex-col items-center';
</script>

<section class={classList}>
    <slot></slot>
</section>