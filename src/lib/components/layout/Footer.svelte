<script lang="ts">
	import { onMount } from 'svelte';

	let currentYear: number;

	onMount(() => {
		currentYear = new Date().getFullYear();
	});
</script>

<div class="bg-dark-blue col-span-12 p-10 py-15">
	<div class="text-offwhite mx-auto flex flex-col items-center gap-5 md:w-1/2">
		<p class="text-center">Activate Your Business is an iniative by miha bodytec UK.</p>
		<p class="text-center">
			miha bodytec UK is responsible for the technical implementation and operation of this site.
			Their <a
				class="underline"
				href="https://www.miha-bodytec.com/en/privacy-policy"
				target="_blank">Privacy Policy</a
			> applies.
		</p>

		<hr class="w-1/2" />
		<p class="text-center">©{currentYear} made with ❤️ in Gersthofen</p>
	</div>
</div>
