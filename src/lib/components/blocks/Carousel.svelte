<script lang="ts">
	import { PUBLIC_DIRECTUS_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	// import type { CarouselProps } from '$lib/types';
	import CtaButton from '../elements/CtaButton.svelte';

	let { carouselBlock } = $props();

	let assetURL = PUBLIC_DIRECTUS_URL + '/assets/';

	// Carousel Reference: https://www.nieknijland.nl/blog/make-a-responsive-carousel-with-just-css
	let listElement: HTMLUListElement;
	let itemWidth: number = 0;

	onMount(() => {
		const firstItem = listElement.querySelector('.item');
		if (firstItem) {
			itemWidth = (firstItem as HTMLElement).offsetWidth;
		}
	});

	function handleClick(direction: string) {
		if (!listElement || itemWidth === 0) return;
		const scrollAmount = direction === 'previous' ? -itemWidth : itemWidth;
		listElement.scrollBy({ left: scrollAmount, behavior: 'smooth' });
	}
</script>

<div class="bg-sand/10 col-span-12 px-10 py-10 text-center">
	<h2 class="py-5 text-4xl">{carouselBlock.heading}</h2>
	<div class="pb-10">{@html carouselBlock.content}</div>
	<ul
		class="flex snap-x snap-mandatory list-none gap-5 overflow-x-scroll overflow-y-hidden"
		bind:this={listElement}
	>
		{#each carouselBlock.benefits as benefit}
			<li class="item mb-10 w-full flex-shrink-0 snap-center lg:w-1/3">
				<div
					class="relative h-90 bg-cover bg-center"
					style="background-image: url('{assetURL}{benefit.item.image}');"
				>
					<div
						class="from-offwhite absolute bottom-0 z-10 h-1/3 w-full bg-linear-to-t to-transparent to-10%"
					></div>
				</div>
				<div
					class="flex h-full flex-col items-center justify-start"
					style="background: linear-gradient(360deg,{benefit.item.color}, #f2faf7 90%)"
				>
					<h2 class="mb-5 pt-5 text-2xl md:text-3xl">{benefit.item.heading}</h2>
					<div
						class="prose-li:md:mx-10 prose-li: prose-ul:text-left prose-li:list-disc prose-ul:text-lg ml-10"
					>
						{@html benefit.item.content}
					</div>
				</div>
			</li>
		{/each}
	</ul>
	<div class="flex items-center justify-center gap-2 pt-5">
		<button
			onclick={() => handleClick('previous')}
			class="bg-ice flex h-10 w-10 items-center justify-center p-1"
			><img src="icons/arrow-left.svg" alt="left arrow" /></button
		>
		<button
			onclick={() => handleClick('next')}
			class="bg-ice flex h-10 w-10 items-center justify-center p-1"
			><img src="icons/arrow-right.svg" alt="right arrow" /></button
		>
	</div>
</div>

<!-- <div class="col-span-12 m-10 text-center">
	<CtaButton buttonAction={openCalendly} buttonText="Beratungstermin vereinbaren"></CtaButton>
</div> -->

<style>
	ul {
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
</style>
