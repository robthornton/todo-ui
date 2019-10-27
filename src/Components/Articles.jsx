import React, {useEffect, useState} from 'react';
import Axios from 'axios';

/*
 * This code was just part of an example/tutorial. Probably best to ignore or
 * delete it.
 */

const useDataqApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);

  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await Axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{data, isLoading, isError}, setUrl];
};

function Articles() {
  const [query, setQuery] = useState('redux');
  const [{data, isLoading, isError}, doFetch] = useDataqApi(
    'https://hn.algolia.com/api/v1/search?query=redux',
    {hits: []}
  );

  return (
    <>
      <form
        onSubmit={(event) => {
          doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.hits.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Articles;
