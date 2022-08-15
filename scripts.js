const KEY_TASKS = "tasks";

const todoApp = {
    data() {
        return {
            tasks: [],
            newTask: {}
        }
    },
    methods: {
        addTask: function () {
            if (!this.newTask.name) {
                alert('Name is necessary');
                return;
            }

            this.tasks.push(this.newTask);
            this.newTask = {};
            localStorage.setItem(KEY_TASKS, JSON.stringify(this.tasks));
        },
        clearAllTasks: function () {
            this.tasks = [];
            localStorage.setItem(KEY_TASKS, '');
        },
        updateLocalStorage() {
            localStorage.setItem(KEY_TASKS, JSON.stringify(this.tasks));
        }
    },
    created() {
        let tasks = localStorage.getItem(KEY_TASKS);
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }
}

Vue.createApp(todoApp).mount('#app');