<script context="module" lang="ts">
	export const prerender = true;
	import Milky_Way from '/src/assets/milkywaygalaxy.png';
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main class="max-w-prose mx-auto">
	<section>
		<h1 class="font-bold text-5xl lg:text-6xl my-10 text-gray-900">Hi, I'm Austin Wang</h1>
		<div class="prose my-10 py-2">
			<p>I love astronomy!</p>
			<img src={Milky_Way} alt="The Milky" />
		</div>
	</section>
</main>
