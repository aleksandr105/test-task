import { CardItem } from 'components/CardItem/CardItem';
import { List } from './CardList.styled';
import db from '../../db/db.json';
import { useEffect, useState } from 'react';

export const CardList = () => {
  const [storage, setStorage] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('arrId')) return;
    setStorage(JSON.parse(localStorage.getItem('arrId')));
  }, []);

  return (
    <List>
      {db.map(el => (
        <CardItem data={el} key={el.id} dataStorage={{ storage, setStorage }} />
      ))}
    </List>
  );
};
