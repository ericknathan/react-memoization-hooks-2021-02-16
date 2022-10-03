import React, { memo, useEffect, useState } from "react";
import { Repository } from "./Repository";

export const RepositoryList = memo(({ getRepositories }) => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('facebook');

  useEffect(() => {
    getRepositories(query)
      .then(response => response.json())
      .then(data => setItems((data && data.items) || []));
  }, [getRepositories, query])

  return (
    <div className="list">
      <button
        className="float-btn-rocket"
        onClick={() => setQuery("rocketseat")}
      >
        🚀
      </button>
      <br />
      {items && items.map(result => <Repository key={result.id} {...result} />)}
    </div>
  )
})
