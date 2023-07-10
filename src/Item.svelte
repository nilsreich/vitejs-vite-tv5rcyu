<script>
import { todos } from './lib/store.ts';
export let completed = ''
export let id =''
export let title = ''
</script>

	<div>
		<input type='checkbox' checked={completed} on:change={todos.toggleTodo(id)}/>
		<span style="text-decoration: {completed ? 'line-through' : 'none'}">{title}</span>
		<button on:click={todos.deleteTodo(id)}>del</button>
	</div>