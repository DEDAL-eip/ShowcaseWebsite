<script context="module" lang="ts">
    export const load = async({fetch}) => {
        const res = await fetch("/api/apkVersions")
        const data = await res.json()
        var versions: any[] = []

        data.data.map((version: string|any[]) => {
          versions.push(version.slice(19, -4))
        })

        return {
            props: {
                versions
            }
        }
    }
</script>

<script lang="ts">
    export let versions

    var video = "Tipdonosor_trailer.mp4";
    const download = async () => {
        var select = document.getElementById("version_select")
        const res = await fetch("/api/apkDownload")

        const file = new Blob([video], { type: "video/apk"})
        const nav = (window.navigator as any);

        if (nav.msSaveOrOpenBlob) {
            nav.msSaveOrOpenBlob(file, "Test.apk")
            setTimeout(() => {  window.location.href="/" }, 5000);
        } else {
            let a = document.createElement("a"),
                url = URL.createObjectURL(file)
            
            a.href = url
            a.download = "Test.apk"
            document.body.appendChild(a)
            a.click()
            setTimeout(function () {
                document.body.removeChild(a)
                window.URL.revokeObjectURL(url)
            }, 0)
        }
    }
</script>

<svelte:head>
	<title>DEDAL: Telechargement</title>
</svelte:head>

<div class="flex min-h-screen bg-primary bg-gradient-to-tl from-secondary">
    <div class="m-auto text-center space-y-10">
        <div>
            <img src="/Smartphone_logo.png" class="m-auto" alt="Smartphone_logo" />
            <p class="text-6xl text-white font-bold">Telecharger DEDAL</p>
        </div>
        <p class="text-2xl text-white tracking-widest">Emmenez votre guide du routard 2.0 sur votre appareil.</p>
        <div class="flex justify-center">
            <select id="version_select" class="form-select text-center font-bold appearance-none block px-3 py-1.5 text-white bg-secondary rounded-lg shadow-lg transition ease-in-out m-0" aria-label="Default select example">
                {#each versions as version}
                    <option value={version}>{version}</option>
                {/each}
            </select>
            
            <button class="btn font-bold text-white py-5 px-12 rounded-lg shadow-lg bg-secondary" on:click={download} type="button" data-modal-toggle="defaultModal">
                Telecharger
            </button>
            
            <!-- Main modal -->
            <div id="defaultModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 h-modal md:h-full">
                <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <!-- Modal header -->
                        <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Merci d'avoir telecharger Dedal
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                            </button>
                        </div>
                        <!-- Modal body -->
                        <div class="p-6 space-y-6">
                            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Ca veut vraiment dire beaucoup pour nous
                            </p>
                            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                               Vous allez etre rediriger a la page d'acceuil bientot
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

