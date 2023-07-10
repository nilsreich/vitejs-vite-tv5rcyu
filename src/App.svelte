<script>
  let value = '';
  let search=''
  let showAll=true

let todos = []
  function addTodo() {
    if (value.trim() === '') return; // Skip adding empty todos
    const newTodo = {
      id: crypto.randomUUID(),
      title: value,
      done: false
    };
    todos = [...todos, newTodo];
    value = ''; // Reset input value
  }

  function toggle(id) {
    todos = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
  }

  function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
  }


</script>
  <input type="text" bind:value={search} />
  <select bind:value={showAll}>
<option value={true}>all</option>
<option value={false}>completed</option>
</select>


<form on:submit|preventDefault={addTodo}>
  <input type="text" bind:value={value} />
</form>

<h1>Todos</h1>
{#each todos as todo (todo.id)}
{#if todo.title.includes(search) && (showAll || todo.done)}
<div>
  <button
    style="text-decoration: {todo.done ? 'line-through' : 'none'}"
    on:click={() => toggle(todo.id)}
  >
    {todo.title}
  </button>
  <button on:click={() => deleteTodo(todo.id)}>del</button>
</div>
{/if}
{/each}
