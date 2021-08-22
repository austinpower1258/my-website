<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

	import Youtube from './Youtube.svelte';
</script>

<svelte:head>
	<title>Violin</title>
</svelte:head>

<div class="max-w-prose mx-auto bg-green-100">
	<h1 class="font-bold text-5xl lg:text-6xl py-6 text-green-600">My Repertoire</h1>

	<p>Tchaikovsky Violin Concerto in D Major</p>
	<Youtube videoId="n2O-vOvN18w" />
	<br />
	<p>Mendelssohn Violin Concerto in E Minor, I. Allegro Moderato</p>
	<Youtube videoId="NiKyjeeri0Q" />
</div>
