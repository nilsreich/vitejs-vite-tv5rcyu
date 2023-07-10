import { writable } from 'svelte/store';

function createTodos() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    addTodo: (todo) =>
      update((n) => [
        ...n,
        { title: todo, completed: false, id: crypto.randomUUID() },
      ]),
    deleteTodo: (id) => update((n) => n.filter((item) => item.id !== id)),
    toggleTodo: (id) =>
      update((n) =>
        n.map((item) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        )
      ),
  };
}

function createFilters() {
  const { subscribe, set, update } = writable({ search: '', filter: 'all' });

  return {
    subscribe,
    setFilter: (search, filter) => set({ search: search, filter: filter }),
  };
}

export const filters = createFilters();

export const todos = createTodos();
