<script lang="ts">
	let { blockType, blockData = null } = $props();
</script>

<div class="col-span-12 border-l-4 border-yellow-400 bg-yellow-50 px-10 py-10">
	<div class="flex">
		<div class="flex-shrink-0">
			<svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
				<path
					fill-rule="evenodd"
					d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
		<div class="ml-3">
			<h3 class="text-sm font-medium text-yellow-800">
				Block Not Found: {blockType}
			</h3>
			<div class="mt-2 text-sm text-yellow-700">
				<p>The requested block "{blockType}" could not be loaded.</p>
				{#if blockData}
					<details class="mt-2">
						<summary class="cursor-pointer font-medium">Show available data</summary>
						<pre class="mt-2 overflow-auto rounded bg-yellow-100 p-2 text-xs">{JSON.stringify(
								blockData,
								null,
								2
							)}</pre>
					</details>
				{:else}
					<p class="mt-1 text-xs">No data available for this block.</p>
				{/if}
			</div>
		</div>
	</div>
</div>
