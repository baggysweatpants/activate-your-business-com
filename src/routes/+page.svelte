<script lang="ts">
	import CardGroup from '$lib/components/blocks/CardGroup.svelte';
	import Hero from '$lib/components/blocks/Hero.svelte';
	import Modal from '$lib/components/blocks/Modal.svelte';
	import FallbackBlock from '$lib/components/blocks/FallbackBlock.svelte';
	import FaqBlock from '$lib/components/blocks/FaqBlock.svelte';
	import CarouselBlock from '$lib/components/blocks/CarouselBlock.svelte';
	import CtaBlock from '$lib/components/blocks/CtaBlock.svelte';

	let { data } = $props();

	let metaData = data?.page || {};

	function getBlock(blockName: string) {
		return data?.page?.blocks?.find((block: any) => block.collection === blockName)?.item;
	}

	let heroBlock = getBlock('block_hero');
	let cardBlock = getBlock('block_cardgroup');
	let carouselBlock = getBlock('block_carousel');
	let faqBlock = getBlock('block_faq');
	let ctaBlock = getBlock('block_cta');
</script>

<svelte:head>
	<title>{metaData?.title || 'Activate Your Business'}</title>
</svelte:head>

<Modal />

{#if heroBlock}
	<Hero {heroBlock} />
{:else}
	<FallbackBlock blockType="block_hero" blockData={null} />
{/if}

{#if cardBlock}
	<CardGroup {cardBlock} />
{:else}
	<FallbackBlock blockType="block_cardgroup" blockData={null} />
{/if}

{#if carouselBlock}
	<CarouselBlock {carouselBlock} />
{:else}
	<FallbackBlock blockType="block_carousel" blockData={null} />
{/if}

{#if faqBlock}
	<FaqBlock {faqBlock}></FaqBlock>
{:else}
	<FallbackBlock blockType="block_faq" blockData={null} />
{/if}

{#if ctaBlock}
	<CtaBlock {ctaBlock}></CtaBlock>
{:else}
	<FallbackBlock blockType="block_faq" blockData={null} />
{/if}
