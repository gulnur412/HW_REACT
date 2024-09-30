import React, { useState } from 'react';

export const UrlInput = () => {
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie=()=>{
title: value
id: Date.now().toString()
    }

    handleChange(newMovie)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        value={url}
        onChange={handleChange}
        placeholder="Введите URL"
        required
      />
      {/* <button type="submit">Отправить</button> */}
    </form>
  );
};
