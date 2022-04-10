<script>
    import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
    import { faTools } from '@fortawesome/free-solid-svg-icons';
 
    import Aptitudes from './Aptitudes.svelte';
    import CookieConsentBanner from './CookieConsentBanner.svelte';
    import FaIcon from './FaIcon.svelte';
    import Job from './Job.svelte';
    import ProjectList from './ProjectList.svelte';
    import Section from './Section.svelte';
    import Settings from './Settings.svelte';
    import Socials from './Socials.svelte';

    import { cookieConsent } from './cookie-store';

    const projects = [
        {
            name: 'Knowledge',
            logo: 'knowledge.png',
            description: 'Collection of commands, programming pieces or general technical concepts.',
            displayURL: 'knowledge.pablopugaperalta.com',
            url: 'https://knowledge.pablopugaperalta.com'
        },
    ];

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

    const aptitudes = [
        { text: 'PHP', weight: 1 },
        { text: 'JavaScript', weight: 1 },
        { text: 'NodeJS', weight: 1 },
        { text: 'Linux', weight: 0.6 },
        { text: 'Bash', weight: 0.6 },
        { text: 'HTML', weight: 0.5 },
        { text: 'SIP', weight: 1 },
        { text: 'VoIP', weight: 0.7 },
        { text: 'Asterisk', weight: 1 },
        { text: 'VoiceXML', weight: 0.6 },
        { text: 'C', weight: 0.6 },
        { text: 'C++', weight: 0.8 },
        { text: 'Git', weight: 0.2 },
        { text: 'MySQL', weight: 0.6 },
        { text: 'MongoDB', weight: 0.3 },
        { text: 'EC2', weight: 0.4 },
        { text: 'S3', weight: 0.2 },
        { text: 'Symfony', weight: 0.4 },
        { text: 'React', weight: 0.5 },
        { text: 'VueJS', weight: 0.2 },
    ];
    
    const shuffleArray = array => {
        const copy = Array.from(array);
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = copy[i];
            copy[i] = copy[j];
            copy[j] = temp;
        }
        return copy;
    }

    $: showCookieConsentBanner = $cookieConsent === undefined;
    let displaySettings = false;
</script>

<svelte:head>
    {#if $cookieConsent !== false}
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-F4YTG3EY7B"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-F4YTG3EY7B');
    </script>
    {/if}
</svelte:head>

<article class="font-sans text-gray-800 flex flex-col items-center gap-5">
    {#if displaySettings}
        <Settings bind:displaySettings={displaySettings}/>
    {:else}
        <button class="settings-icon hover:text-indigo-700 hover:filter hover:drop-shadow-lg" on:click={() => (displaySettings = !displaySettings)}>
            <FaIcon path={faTools.icon[4]} width={faTools.icon[0]} height={faTools.icon[1]}/>
        </button>
    {/if}
    <h1 class="name text-4xl filter drop-shadow md:text-5xl font-bold text-center mt-16 mb-5 tracking-wider transition-all duration-100">Pablo Puga Peralta</h1>

    <Section title="Who am I?" classes="text-center p-3 md:p-2 lg:p-0 md:w-3/4 max-w-screen-md">
        <p class="text-base md:text-xl">
            I am a Telecom Engineer specialized on modern communication technologies. I like to develop things in JavaScript, PHP, C and C++ and I am a great fan of automatizing all possible tasks. 
        </p>
    </Section>

    <ProjectList projects={projects}/>

    <Job/>

    <Aptitudes keywords={shuffleArray(aptitudes)}/>

    <Socials {rrss}/>

    {#if showCookieConsentBanner}
    <CookieConsentBanner/>
    {/if}
</article>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .name {
        text-shadow: 0 1px 2px rgba(31, 41, 55, 0.20);
    }

    .settings-icon {
        @apply text-gray-700 fixed top-1 right-1 w-8 h-8 text-xl transition-colors duration-200;
    }
</style>
