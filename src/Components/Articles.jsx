import React, {useState} from 'react';

function Article() {
  const [data, setData] = useState({hits: []});

  return (
    <ul>
      {data.hits.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default Article;
