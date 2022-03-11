import { useFetch } from './custom-hooks/useFetch';

const App = () => {
  const [result, error, isLoading] = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div>{error && <p>Error: {error}</p>}</div>
      {result && result.map((item, index) => <p key={index}>{item.name}</p>)}
    </>
  );
};

export default App;
