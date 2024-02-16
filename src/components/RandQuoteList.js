import React, { useState, useEffect } from 'react';
import { Table, Input } from 'antd';
import getRandQuote from '../api/getRandQuote';

const { Search } = Input;

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

const RandQuoteList = () => {
  const [quote, setQuote] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async (animeName) => {
    try {
      const quoteData = await getRandQuote(animeName);
      setQuote(quoteData);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleSearch = (value) => {
    setSearchText(value);
    fetchRandomQuote(value);
  };

  const filteredQuote = quote.filter(
    (item) =>
      item.anime.toLowerCase().includes(searchText.toLowerCase()) ||
      item.character.toLowerCase().includes(searchText.toLowerCase()) ||
      item.quote.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h1>Random Quotes</h1>
      <Search placeholder="Search quotes by anime name" onSearch={handleSearch} style={{ marginBottom: '20px' }} />
      <Table
        dataSource={filteredQuote}
        columns={columns}
        pagination={false}
        bordered
        rowKey={(record) => record.quote}
      />
    </div>
  );
};

export default RandQuoteList;
