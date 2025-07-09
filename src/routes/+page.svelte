<script lang="ts">
	import CardGroup from '$lib/components/blocks/CardGroup.svelte';
	import Carousel from '$lib/components/blocks/Carousel.svelte';
	import Hero from '$lib/components/blocks/Hero.svelte';
	let { data } = $props();
	import Modal from '$lib/components/blocks/Modal.svelte';

	let metaData = data.page;

	function getBlock(blockName: string) {
		return data.page.blocks.find((block: any) => block.collection === blockName)?.item;
	}

	let heroBlock = getBlock('block_hero');
	let cardBlock = getBlock('block_cardgroup');
	let carouselBlock = getBlock('block_carousel');

	console.log(data.page.blocks);
</script>

<svelte:head>
	<title>{metaData.title}</title>
</svelte:head>
<Modal></Modal>
<Hero {heroBlock}></Hero>
<CardGroup {cardBlock}></CardGroup>
{#if carouselBlock}
	<Carousel {carouselBlock}></Carousel>
{/if}
