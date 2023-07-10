<script lang='ts'>
import { todos, filters } from './lib/store.ts';
import Item from './Item.svelte'
</script>

{#each $todos as item}
{#if item.title.includes($filters.search) && ($filters.showAll  || item.completed)}
<Item completed={item.completed} id={item.id} title={item.title}/>
  {/if}
{/each}