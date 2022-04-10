<script>
    export let name;
    export let logo;
    export let description;
    export let url;
    export let displayURL;
</script>

<article class="flex flex-row flex-wrap items-center shadow rounded-md p-4 bg-white">
    <img src={logo} alt={`${name} logo`} class="hidden sm:inline-block sm:w-1/3"/>
    <section class="sm:w-2/3 p-2">
        <h1 class="text-lg md:text-2xl font-medium drop-shadow-sm">{name}</h1>
        <p class="max-w-full text-sm">{description}</p>
    </section>
    <small class="w-full px-2 sm:pl-0">
        Visit at <a href={url} class="font-medium hover:underline">{displayURL}</a>
    </small>
</article>