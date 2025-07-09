<script lang="ts">
	import Hero from '$lib/components/blocks/Hero.svelte';
	let { data } = $props();
	import Modal from '$lib/components/blocks/Modal.svelte';

	let metaData = data.page;
	let heroBlock = data.page.blocks[0].item;
</script>

<svelte:head>
	<title>{metaData.title}</title>
</svelte:head>
<Modal></Modal>
<Hero {heroBlock}></Hero>
