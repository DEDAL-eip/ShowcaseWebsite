<script lang="ts">
	import '../../app.css';
	import "flowbite/dist/flowbite.css";

	import Header from '../../lib/components/fr/Header.svelte';
    import Footer from '../../lib/components/fr/Footer.svelte';
</script>

<div id="theme-container" class="bg-primary">
	<div>
		<main>
			<slot />
		</main>
	</div>
</div>