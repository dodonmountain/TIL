<template>
    <div class="TodoList">
        <h2>{{ category }}</h2>
        <hr>
        <input v-model="newTodo" type="text">
        <button @click="addTodo">추가</button><br>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.content }}
            <button @click="removeTodo(todo.id)">삭제</button>
        </li>
        <hr>
    </div>
</template>

<script>
    export default {
        props: {
            category: {
                type: String,
                required: true,
            }
        },
        data: function () {
            return {
                todos: [],
                newTodo: ''
            }
        },
        methods: {
            addTodo() {
                this.todos.push({
                    id: Date.now(),
                    content: this.newTodo
                })
                this.newTodo = ''
            },
            removeTodo(removeTodoId) {
                this.todos = this.todos.filter(todo => {
                    return removeTodoId !== todo.id
                })
            }
        }
    }
</script>

<style lang="">

</style>