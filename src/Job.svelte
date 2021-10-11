<script>
    import Section from './Section.svelte';
</script>

<Section title="Job" classes="p-3 md:p-2 lg:p-0 w-full md:w-4/5 lg:w-3/5 xl:w-2/4 transition-all duration-100">
    <div class="flex flex-row shadow rounded-md p-4 clipped-bg gap-4 items-stretch w-full">
        <img src="intpowers.png" alt="Interactive Powers logo" class="hidden sm:inline-block w-36 h-auto bg-white rounded-md shadow self-center"/>
        <div classe="self-stretch">
            <h2 class="text-lg md:text-2xl font-medium mb-1">Telecom Engineer at Interactive Powers</h2>
            <p class="md:text-xl mb-3">We do awesome video and audio stuff with WebRTC and VoIP.</p>
            <p class="text-sm md:text-base text-gray-600">Check our webpage <a class="font-medium" href="https://interactivepowers.com" title="Home page of Interactive Powers">interactivepowers.com</a> to find more about us!</p>
            <p class="text-sm md:text-base text-gray-600">You can also reach us on Twitter at <a class="font-medium" href="https://twitter.com/ivrpowers" title="Interactive Powers Twitter">@ivrpowers</a></p>
        </div>
    </div>
</Section>

<style>
    @media (min-width: 640px) {
        .clipped-bg {
            background: rgb(255,110,95);
            background: linear-gradient(45deg, rgba(255,110,95,1) 115px, rgba(255,255,255,1) 115px);
        }
    }

    a:hover {
        color: #ff6e5f;
    }
</style>