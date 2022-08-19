import { getDate } from './app/dateFunction.js';
import { getCount } from './app/countFunction.js';
import {
  getNameFromStorage,
  setNameFromLocalStorage,
  LOCAL_STORAGE_KEY,
} from './app/localStorage.js';
import {
  todoItemTemplate,
  todosContainer,
  inputAdd,
  buttonAdd,
  buttonDeleteAll,
  inputSearch,
  buttonShowAll,
  buttonShowCompleted,
  buttonDeleteLast,
  spanCountActive,
  spanCountCompleted,
} from './app/todoElements.js';

//checking localStorage by key
let todos = getNameFromStorage(LOCAL_STORAGE_KEY) || [];

//creating an event on the Add key
buttonAdd.addEventListener('click', () => {
  if (inputAdd.value.trim()) {
    //creating a card object
    const todo = {
      id: todos.length + 1,
      date: getDate(),
      isChecked: false,
      text: inputAdd.value.trim(),
    };
    todos.push(todo);
    appendAndSet();
    inputAdd.value = '';
  }
});

//creating a card template
function createTodoItem(id, date, isChecked, text) {
  const todoElement = document.importNode(todoItemTemplate.content, true);
  const checkbox = todoElement.querySelector('[data-todo-checkbox]');
  checkbox.checked = isChecked;
  const todoDescription = todoElement.querySelector('[data-todo-description]');
  todoDescription.textContent = text;
  const todoDate = todoElement.querySelector('[data-todo-date]');
  todoDate.textContent = date;
  const todoRemoveButton = todoElement.querySelector('[data-button-remove]');
  const todoItem = todoElement.querySelector('[data-todo-item]');
  if (isChecked === true) {
    todoItem.classList.add('checked');
  }
  checkbox.addEventListener('change', (event) => {
    todos = todos.map((el) => {
      if (el.id === id) {
        el.isChecked = event.target.checked;
      }
      return el;
    });
    appendAndSet();
  });

  todoRemoveButton.addEventListener('click', () => {
    todos = todos.filter((el) => el.id !== id);
    appendAndSet();
  });

  return todoElement;
}

//add templates
function appendElements() {
  if (todos.length) {
    todos.forEach((el) => {
      const todoElement = createTodoItem(el.id, el.date, el.isChecked, el.text);
      todosContainer.appendChild(todoElement);
    });
  }
  const count = getCount(todos);
  spanCountActive.textContent = count.active;
  spanCountCompleted.textContent = count.completed;
}
appendElements();

function filteredAppendElements(todos) {
  if (todos.length) {
    todos.forEach((el) => {
      const todoElement = createTodoItem(el.id, el.date, el.isChecked, el.text);
      todosContainer.appendChild(todoElement);
    });
  }
}

//creating an event on the search input
inputSearch.addEventListener('input', () => {
  const searchString = inputSearch.value.trim();
  if (searchString) {
    const filterTodos = todos.filter((el) => el.text.includes(searchString));
    appendAndClear(filterTodos);
  } else {
    appendAndSet(todos);
  }
});

//creating an event on the DeleteAll button
buttonDeleteAll.addEventListener('click', () => {
  todos.splice(0, todos.length);
  appendAndSet();
});

//creating an event on the ShowCompleted button
buttonShowCompleted.addEventListener('click', () => {
  todos = todos.filter((el) => {
    if (el.isChecked === true) {
      return el;
    }
  });
  appendAndClear(todos);
});

//creating an event on the ShowAll button
buttonShowAll.addEventListener('click', () => {
  todos = getNameFromStorage(LOCAL_STORAGE_KEY) || [];
  const todos1 = [...todos];
  appendAndClear(todos1);
});

//creating an event on DeleteLast button
buttonDeleteLast.addEventListener('click', () => {
  todos.pop();
  appendAndSet();
});

function appendAndSet() {
  setNameFromLocalStorage(LOCAL_STORAGE_KEY, todos);
  clearList(todosContainer);
  appendElements();
}
appendAndSet();

function appendAndClear(todos) {
  clearList(todosContainer);
  filteredAppendElements(todos);
}

function clearList(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
