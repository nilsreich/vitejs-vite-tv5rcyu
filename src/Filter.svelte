<script lang='ts'>
import {filters} from './lib/store.ts'
let value = ''
let filter= 'all'

function updateFilter(){
      if (value.trim() === '') return filters.setFilter('', filter);
filters.setFilter(value, filter)
}
</script>


<form on:submit|preventDefault={updateFilter}>
<input type='text' placeholder="Search..." bind:value={value}/>
<select bind:value={filter}>
<option value='completed'>completed</option>
<option value='all'>all</option>
</form>