<script>
    import { page } from '$app/stores';
    import ApkDownloadButton from '../../routes/download/ApkDownloadButton.svelte';

    let apkFileName = 'Dedal.apk';

    function changeToFrench() {
        const url = "/fr" + $page.url.pathname

        window.location.href=url
	}
</script>

<header class="w-full z-50 sticky top-0 flex items-center px-2 text-lg backdrop-blur-sm transition-transform ease-in md:px-6 bg-white">
    <nav class="flex flex-grow">
        <a href="/" class="mr-4 text-2xl font-thin md:mr-8">
            <img src="/Dedal_logo.png" class="mr-3 h-6 sm:h-9" alt="Dedal_logo" />
            <div class="text-2xl font-semibold whitespace-nowrap">
                DEDAL
            </div>
        </a>
        <ul class="mr-4 font-bold flex flex-grow items-center gap-4 md:gap-8">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
            <li>
                <a href="/roadmap">roadmap</a>
            </li>
            <li>
                <a href="/nouveauté">nouveauté</a>
            </li>
            <li>
                <a href="/blog">blog</a>
            </li>
            <ApkDownloadButton {apkFileName} />

        </ul>
    </nav>
    <div class="flex items-center gap-4 md:gap-8">
        <button on:click={changeToFrench}>🇫🇷</button>
        <!-- <button class="bg-secondary rounded-lg font-bold text-white p-2" onclick="window.location.href='/download';" href="/download">Download</button> -->
    </div>
</header>