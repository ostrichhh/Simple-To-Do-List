document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const inputTitle = document.getElementById('task-title');
    const inputDesc = document.getElementById('task-desc');
    const taskSectionTitle = document.getElementById('task-section-title');

    function updateTaskSectionTitle() {
        if (taskList.children.length === 0) {
            taskSectionTitle.textContent = "No task to do";
        } else {
            taskSectionTitle.textContent = "Tasks";
        }
    }

    updateTaskSectionTitle(); 

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = inputTitle.value.trim();
        const description = inputDesc.value.trim();

        if (!title) {
            alert('Please enter a task title.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskHeader = document.createElement('div');
        taskHeader.classList.add('task-header');

        const taskTitle = document.createElement('h3');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = title;

        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('task-actions');

        const doneBtn = document.createElement('button');
        doneBtn.type = 'button';
        doneBtn.classList.add('mark-done');
        doneBtn.textContent = 'Mark as Done';

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

        actionsDiv.appendChild(doneBtn);
        actionsDiv.appendChild(deleteBtn);

        taskHeader.appendChild(taskTitle);
        taskHeader.appendChild(actionsDiv);

        const taskDesc = document.createElement('p');
        taskDesc.classList.add('task-desc');
        taskDesc.textContent = description;

        taskItem.appendChild(taskHeader);
        if (description) {
            taskItem.appendChild(taskDesc);
        }

        taskList.appendChild(taskItem);

  
        updateTaskSectionTitle();

      
        form.reset();

        doneBtn.addEventListener('click', () => {
            taskTitle.classList.toggle('done');
            doneBtn.textContent = taskTitle.classList.contains('done') ? 'Undo' : 'Mark as Done';
        });

    
        deleteBtn.addEventListener('click', () => {
            const confirmDelete = confirm("Are you sure you want to delete this task?");
            if (confirmDelete) {
                taskList.removeChild(taskItem);
                updateTaskSectionTitle(); 
            }
        });
    });
});
