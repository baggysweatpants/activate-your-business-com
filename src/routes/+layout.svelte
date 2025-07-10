<script lang="ts">
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div
	class="from-ice to-offwhite sticky min-h-screen bg-gradient-to-tr bg-cover bg-fixed bg-no-repeat"
>
	<Header></Header>
	<div id="twelve-grid" class="bg-offwhite max-w-8xl mx-auto grid grid-cols-12">
		{@render children()}
		<Footer></Footer>
	</div>
</div>
