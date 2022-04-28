<script lang="ts">
    var video = "Tipdonosor_trailer.mp4";

    const download = async () => {
        console.log("DOWNLOAD")
        console.log(video)
        const file = new Blob([video], { type: "video/mp4"})
        const nav = (window.navigator as any);

        if (nav.msSaveOrOpenBlob) {
            nav.msSaveOrOpenBlob(file, "file.mp4")
        } else {
            let a = document.createElement("a"),
                url = URL.createObjectURL(file)
            
            a.href = url
            a.download = "file.mp4"
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
            <img src="Smartphone_logo.png" class="m-auto" alt="Smartphone_logo" />
            <p class="text-6xl text-white font-bold">Telecharger DEDAL</p>
        </div>
        <p class="text-2xl text-white tracking-widest">Emmenez votre guide du routard 2.0 sur votre appareil.</p>
        <div class="flex justify-center">
              <select id="version_select" class="form-select text-center font-bold appearance-none block px-3 py-1.5 text-white bg-secondary rounded-lg shadow-lg transition ease-in-out m-0" aria-label="Default select example">
                  <option value="1">v1</option>
                  <option value="2">v2</option>
                  <option value="3">v3</option>
                  <option value="4" selected>v4</option>
              </select>
              <button class="btn font-bold text-white py-5 px-12 rounded-lg shadow-lg bg-secondary" on:click={download}>
                Telecharger
                </button>
          </div>
    </div>
</div>

