export function getCount(todos) {
  return todos.reduce(
    (total, current) => {
      if (current.isChecked) {
        total.completed += 1;
      } else {
        total.active += 1;
      }
      return total;
    },
    { active: 0, completed: 0 }
  ));
}
