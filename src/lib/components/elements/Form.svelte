<script lang="ts">
	import { Confetti } from 'svelte-confetti';
	let formIds = [
		{
			id: 'name',
			label: 'Name*',
			input: 'text'
		},
		{
			id: 'street',
			label: 'Street*',
			input: 'text'
		},
		{
			id: 'zip',
			label: 'ZIP*',
			input: 'text'
		},
		{
			id: 'ort',
			label: 'Town*',
			input: 'text'
		},
		{
			id: 'email',
			label: 'Email Address*',
			input: 'email'
		},
		{
			id: 'phone',
			label: 'Phone*',
			input: 'tel'
		}
	];

	let submitting = $state(false);
	let message = $state('');
	let success = $state(false);

	/** @param {Event} event */
	async function handleSubmit(event: Event) {
		event.preventDefault();
		submitting = true;
		message = '';

		try {
			const formData = new FormData(event.target as HTMLFormElement);
			const response = await fetch('/api/sendmail', {
				method: 'POST',
				body: formData
			});

			const result = await response.json();
			success = result.success;
			message =
				result.message ||
				(success ? 'Great! We have received your request!' : 'Sorry! Something went wrong.');

			if (success) {
				if (event.target) {
					(event.target as HTMLFormElement).reset();
				}
			}
		} catch (error) {
			success = false;
			message = 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.';
			console.error('Form submission error:', error);
		} finally {
			submitting = false;
		}
	}
</script>

<form id="kontaktformular" class="flex flex-col" method="POST" onsubmit={handleSubmit}>
	{#each formIds as formElement}
		<div class="pb-2">
			<label class="font-bold" for={formElement.id}>{formElement.label}</label><br />
			<input
				name={formElement.id}
				type={formElement.input}
				class="focus:outline-ice border-dark-blue w-full rounded-lg p-2 focus:border-none"
				required
			/>
		</div>
	{/each}
	{#if success}
		<div class="fixed -top-1.5 left-0 flex h-screen w-screen justify-center overflow-hidden">
			<Confetti
				x={[-5, 5]}
				y={[0, 0.1]}
				delay={[300, 2000]}
				infinite
				duration={5000}
				amount={300}
				fallDistance="100vh"
			/>
		</div>
	{/if}
	<!-- Honeypot field to prevent spam -->
	<input name="website" type="text" style="display:none" aria-hidden="true" tabindex="-1" />

	{#if message}
		<div
			class={`mt-4 rounded p-3 ${success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
		>
			{message}
		</div>
	{/if}

	<button
		class="bg-ice text-dark-blue mt-6 w-full rounded-lg px-5 py-3 text-xl font-bold hover:scale-105 hover:cursor-pointer"
		type="submit"
		disabled={submitting}
	>
		{submitting ? 'Sending...' : 'Request Information'}
	</button>
</form>
