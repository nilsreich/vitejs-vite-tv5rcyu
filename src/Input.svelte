<script>
	import { todos } from './lib/store.ts';
	let value=''
</script>

<form on:submit|preventDefault={todos.addTodo(value)}>
	<input type='text' bind:value={value}/>
	<button>submit</button>
</form>