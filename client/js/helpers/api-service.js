const fetchTogetherLets = async () => {
  const response = await fetch('http://localhost:1337/todos');
  const todos = await response.json();

  return todos;
};

const createTogetherLets = async ({ title }) => {
  const response = await fetch(
    'http://localhost:1337/todos',
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        completed: false
      })
    }
  );

  const reponseData = await response.json();

  return reponseData;
};

const updateTogetherLets = async ({ id, ...props }) => {
  const response = await fetch(
    `http://localhost:1337/todos/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(props)
    }
  );

  const reponseData = await response.json();

  return reponseData;
}

const deleteTogetherLets = async (id) => {
  await fetch(`http://localhost:1337/todos/${id}`, { method: 'DELETE' });
};

const ApiService = {
  fetchTogetherLets,
  createTogetherLets,
  updateTogetherLets,
  deleteTogetherLets,
};

export default ApiService;
