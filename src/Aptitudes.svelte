<script>
    import Section from './Section.svelte';

    export let keywords = [];
    const baseFontSize = 12;
    const colors = {
        'red': 'bg-red-200',
        'yellow': 'bg-yellow-200',
        'green': 'bg-green-200',
        'blue': 'bg-blue-200',
        'indigo': 'bg-indigo-200',
        'purple': 'bg-purple-200',
        'pink': 'bg-pink-200',
    };

    const getRandomColor = (() => {
        let prevColor = undefined;

        return () => {
            const colorList = Object.assign({}, colors);
            if (prevColor) delete colorList[prevColor];
            const randomIndex = Math.floor(Math.random() * Object.keys(colorList).length);
            const selectedColor = Object.keys(colorList)[randomIndex];
            prevColor = selectedColor;
            return colorList[selectedColor];
        };
    })();

    const scaleFontWeight = weight => {
        const scaledWeight = Math.floor(weight * 1000);
        if (scaledWeight <= 300) return 'font-thin';
        if (scaledWeight <= 600) return 'font-normal';
        return 'font-bold';
    };

    const parsedKeywords = keywords.map(kw => ({
        text: kw.text,
        fontSize: baseFontSize + Math.ceil(baseFontSize * kw.weight),
        fontWeight: scaleFontWeight(kw.weight),
        bgColor: getRandomColor(),
    }));
</script>

<Section title="Aptitudes" classes="p-3 md:p-2 lg:p-0 md:w-2/4 lg:w-2/5 transition-all duration-100">
    <ul class="flex flex-row flex-wrap gap-3 items-center content-center justify-center font-mono">
        {#each parsedKeywords as word}
        <li class={`px-2 shadow-sm rounded ${word.bgColor} ${word.fontWeight}`} style={`font-size: ${word.fontSize}px`}>{word.text}</li>
        {/each}
    </ul>
</Section>

<style>
</style>