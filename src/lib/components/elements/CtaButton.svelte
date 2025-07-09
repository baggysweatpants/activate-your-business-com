<script lang="ts">
	let { buttonText, buttonAction } = $props();
</script>

<button
	onclick={buttonAction}
	class="bg-ice text-dark-blue hover:bg-dark-blue hover:text-offwhite rounded-2xl px-3 py-2 font-bold hover:scale-105 hover:shadow-sm md:text-lg"
>
	{buttonText}
</button>
