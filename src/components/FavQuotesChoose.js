import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';

const FavQuotes = () => {
  const [FavQuotes, setFavQuotes] = useState([]);

  useEffect(() => {
    loadFavQuotes();
  }, []);

  const loadFavQuotes = async (animeName) => {
    const storedQuotes = localStorage.getItem('FavQuotes');
    setFavQuotes(JSON.parse(storedQuotes));
  };

  const columns = [
    {
      title: 'Anime',
      dataIndex: 'anime',
      key: 'anime',
    },
    {
      title: 'Character',
      dataIndex: 'character',
      key: 'character',
    },
    {
      title: 'Quote',
      dataIndex: 'quote',
      key: 'quote',
    },
  ];

  return (
    <div>
      <h1>Favorite Quotes Choosen</h1>
      <Table dataSource={FavQuotes} columns={columns} pagination={false} bordered rowKey={(record) => record.quote} />
    </div>
  );
};

export default FavQuotes;
