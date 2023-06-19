<script>
    export let apkFileName;
  
    function downloadApk() {
      const apkFilePath = `./apk/${apkFileName}`;
      const link = document.createElement('a');
      link.href = apkFilePath;
      link.download = apkFileName;
      link.click();
    }
  </script>
  
  <button on:click={downloadApk}>Download APK</button>