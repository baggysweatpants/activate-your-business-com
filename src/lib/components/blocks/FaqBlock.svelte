<script lang="ts">
	// import type { FaqProps } from '$lib/types';

	let { faqBlock } = $props();
</script>

<div class="bg-offwhite col-span-12 flex flex-col items-center px-10 py-20 text-lg">
	<h2 class="pb-10 text-center text-4xl">{faqBlock.heading}</h2>
	{#each faqBlock.questions as faq}
		<details class="border-dark-blue w-full max-w-2xl border-b-1 py-5">
			<summary class="flex cursor-pointer items-center justify-center font-bold select-none">
				<span class="w-full text-center">{faq.item.question}</span>
				<span
					class="faq-icon bg-ice ml-auto h-5 w-5 flex-shrink-0 rounded-full bg-[url('/icons/plus.svg')] bg-cover transition-transform duration-300"
				></span>
			</summary>
			<p class="pt-5">{faq.item.answer}</p>
		</details>
	{/each}
</div>

<style>
	details[open] .faq-icon {
		transform: rotate(90deg);
		background-color: #143752;
	}
</style>
