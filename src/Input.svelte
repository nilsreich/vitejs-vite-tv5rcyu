<script>
	import { todos } from './lib/store.ts';
	let value=''

  function addTodo(){
       if (value.trim() === '') return
todos.addTodo(value)
value=''
  }
</script>

<form on:submit|preventDefault={addTodo}>
	<input type='text' bind:value={value}/>
	<button>submit</button>
</form>