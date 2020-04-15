<script context="module">
  import client from '../lib/apollo';
  import GET_POSTS from '../queries/GET_POSTS';

  export async function preload() {
    return {
      cache: await client.query({
        query: GET_POSTS,
      }),
    };
  }
</script>

<script>
  import { setClient, restore, query } from 'svelte-apollo';

  export let cache;
  restore(client, GET_POSTS, cache.data);
  setClient(client);

  const posts = query(client, { query: GET_POSTS });
</script>

<svelte:head>
  <title>Hacker News</title>
</svelte:head>

<h1>Hacker News</h1>

{#await $posts}
  <span>Loading…</span>
{:then result}
  {#if result.data}
    <ul>
      {#each result.data.posts.data as post}
        <li>
          <p>
            <strong>ID: {post.id}</strong>
            {post.title}
          </p>
        </li>
      {/each}
    </ul>
  {:else}
    <p>ERROR!!</p>
  {/if}
{/await}

<p>This is the 'about' page. There's not much here.</p>
