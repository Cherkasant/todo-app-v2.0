//Variables
const todoItemTemplate = document.querySelector('[data-todo-item-template]');
const todosContainer = document.querySelector('[data-todo-container]');
const inputAdd = document.querySelector('[data-input-add]');
const buttonAdd = document.querySelector('[data-button-add]');
const buttonDeleteAll = document.querySelector('[data-button-deleteall]');
const inputSearch = document.querySelector('[data-input-search]');
const buttonShowAll = document.querySelector('[data-button-showall]');
const buttonShowCompleted = document.querySelector('[data-button-showcomp]');
const buttonDeleteLast = document.querySelector('[data-button-deletelast]');
const spanCountActive = document.querySelector('[data-count-active]');
const spanCountCompleted = document.querySelector('[data-count-completed]');

export {
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
};
