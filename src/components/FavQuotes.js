import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import getRandQuote from '../api/getRandQuote';

const FavQuotes = () => {
  const [FavQuotes, setFavQuotes] = useState([]);

  useEffect(() => {
    loadFavQuotes();
  }, []);

  const loadFavQuotes = async (animeName) => {
    const storedQuotes = localStorage.getItem('FavQuotes');
    if (!storedQuotes) {

      try {
        const quoteData = await getRandQuote(animeName);
        setFavQuotes([quoteData]);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }

      const defaultQuotes = FavQuotes;
      localStorage.setItem('FavQuotes', JSON.stringify(defaultQuotes));
      storedQuotes = JSON.stringify(defaultQuotes);
    }
    setFavQuotes(JSON.parse(storedQuotes));

  };

  const handleRemoveFavorite = (quoteToRemove) => {
    const updatedQuotes = FavQuotes.filter((quote) => quote !== quoteToRemove);
    setFavQuotes(updatedQuotes);
    localStorage.setItem('FavQuotes', JSON.stringify(updatedQuotes));
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
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button type="link" onClick={() => handleRemoveFavorite(record)}>
          Remove
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h1>Favorite Quotes</h1>
      <Table dataSource={FavQuotes} columns={columns} pagination={false} bordered rowKey={(record) => record.quote} />
    </div>
  );
};

export default FavQuotes;
