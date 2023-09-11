<script lang="ts">
	import '../../app.css';
	import "flowbite/dist/flowbite.css";

	import Header from '../../lib/components/Header.svelte';
    import Footer from '../../lib/components/Footer.svelte';
</script>

<div id="theme-container" class="bg-primary">
	<div>
		<main>
			<slot />
		</main>
	</div>
</div>