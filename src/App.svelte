<script>
    import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

    import Section from './Section.svelte';
    import Socials from './Socials.svelte';

    const rrss = [
        {
            name: 'Twitter',
            icon: faTwitter.icon,
            display: '@Malevolo92',
            link: 'https://twitter.com/Malevolo92',
            color: '#00acee',
        },
        {
            name: 'Linkedin',
            icon: faLinkedin.icon,
            display: 'Pablo Puga Peralta',
            link: 'https://www.linkedin.com/in/pablopugaperalta',
            color: '#0e76a8',
        },
        {
            name: 'GitHub',
            icon: faGithub.icon,
            display: 'pablo-puga',
            link: 'https://github.com/pablo-puga',
            color: '#6e5494',
        },
    ];
</script>

<article class="font-sans text-gray-800 flex flex-col items-center gap-5">
    <h1 class="text-4xl font-bold text-center mt-16 mb-5 tracking-wider">Pablo Puga Peralta</h1>

    <Section title="Who am I?" classes="text-center p-3 md:p-2 lg:p-0 md:w-3/4 transition-all duration-100">
        <p class="text-base md:text-xl">
            I am a Telecom Engineer specialized on modern communication technologies. I like to develop things in JavaScript, PHP, C and C++ and I am a great fan of automatize all possible tasks. 
        </p>
    </Section>

    <!-- Trabajo actual -->

    <!-- Aptitudes -->
    <!-- https://www.npmjs.com/package/d3-cloud -->

    <Socials {rrss}/>
</article>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
