<script lang='ts'>
  import { filters } from './lib/store';

  let value = '';
  let showAll = false;

  function updateFilter() {
    if (value.trim() === '') {
      return filters.setFilter('', showAll);
    }
    filters.setFilter(value, showAll);
  }
</script>

<form on:change|preventDefault={updateFilter}>
  <input type='text' placeholder="Search..." bind:value={value} />
  <select bind:value={showAll}>
    <option value={false}>completed</option>
    <option value={true}>all</option>
  </select>
</form>
