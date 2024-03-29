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
      try {
        const quoteData = await getRandQuote(animeName);
        setFavQuotes(quoteData);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
  };

  const handleFavoriteFavorite = (quoteToFavorite) => {
    const updatedQuotes = FavQuotes.filter((quote) => quote !== quoteToFavorite);
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
      title: 'Choose Fav',
      key: 'action',
      render: (text, record) => (
        <Button type="link" onClick={() => handleFavoriteFavorite(record)}>
          Favorite
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
