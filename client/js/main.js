import FormComponent from "./components/form-component.js";
import TogetherLetsValidator from "./helpers/validators/together-lets-validator.js";
import ApiService from "./helpers/api-service.js";

const togetherList = document.querySelector('.js-together-list');

const displayTogetherList = ({
  completed,
  title,
  id,
}) => {
  const togetherItem = document.createElement('div');
  togetherItem.className = 'together-list__item';

  const checkbox = document.createElement('div');
  checkbox.className = 'checkbox ';
  if (completed) checkbox.classList.add('checked');
  checkbox.addEventListener('click', async () => {
    await ApiService.updateTogetherLets({
      id,
      completed: !checkbox.classList.contains('checked')
    });

    checkbox.classList.toggle('checked');
  });

  const todoItemText = document.createElement('div');
  todoItemText.className = 'together-list__item__text';
  todoItemText.innerText = title;

  const btnDelete = document.createElement('button');
  btnDelete.className = 'button bi bi-trash';
  btnDelete.addEventListener('click', async () => {
    await ApiService.deleteTogetherLets(id);
    togetherItem.remove();
  });

  togetherItem.append(
    checkbox,
    todoItemText,
    btnDelete
  );
  togetherList.insertAdjacentElement('afterBegin', togetherItem);
}

const formAddTodo = new FormComponent(
  '.js-add-together-form',
  TogetherLetsValidator,
  async ({ title }) => {
    const createdTogetherList = await ApiService.createTogetherLets({ title });
    displayTogetherList(createdTogetherList);
  }
);

const todos = await ApiService.fetchTogetherLets();
todos.forEach(displayTogetherList);
