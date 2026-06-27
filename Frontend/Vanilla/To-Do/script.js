const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const add = document.getElementById('addTaskBtn');
const clearCompleted = document.getElementById('clearCompletedBtn');
const clearAll = document.getElementById('clearAllBtn');

    add.addEventListener('click', () => {
        const task = taskInput.value;
        if (task) {
            createTask(task);
            taskInput.value = '';
        }
    });

    clearAll.addEventListener('click', () => {
        taskList.innerHTML = '';
    });

    clearCompleted.addEventListener('click', () => {
        const tasks = taskList.querySelectorAll('li');
        tasks.forEach(task => {
            const checkbox = task.querySelector('input[type="checkbox"]');
            if (checkbox.checked) {
                task.remove();
            }
        });
    });
    
    function createTask(task) {
        const li = document.createElement('li');
        li.appendChild(document.createElement('input')).type = 'checkbox';
        li.appendChild(document.createTextNode(task));
        taskList.appendChild(li);
    };