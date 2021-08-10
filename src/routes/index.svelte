<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	
	import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
	import TwitterIcon from '$lib/icons/GitHubIcon.svelte';
	import MailIcon from '$lib/icons/MailIcon.svelte';

</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main class="max-w-prose mx-auto p-5">
	<section>
		<h1>I'm Austin Wang</h1>
	</section>
	<section>
		<h2 class="sr-only">Contact me</h2>
		<div class="flex space-x-3">
			<a
				class="group"
				href="https://twitter.com/austinpcwang"
				target="_blank"
				rel="external noopener noreferrer"
			>
				<span class="sr-only">My Twitter</span>
				<TwitterIcon class="w-5 h-5 text-gray-500 group-hover:text-black transition" />
			</a>
			<a
				class="group"
				href="https://github.com/austinpower1258"
				target="_blank"
				rel="external noopener noreferrer"
			>
				<span class="sr-only">My GitHub</span>
				<GitHubIcon class="w-5 h-5 text-gray-500 group-hover:text-black transition" />
			</a>
			<a class="group" href="mailto: austinwang115@gmail.com">
				<span class="sr-only">My Mail</span>
				<MailIcon class="w-5 h-5 text-gray-500 group-hover:text-black transition" />
			</a>
		</div>
	</section>
</main>
