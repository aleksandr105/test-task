import {
  Wrapper,
  Logo,
  Line,
  PhotoWrapper,
  Photo,
  Tweets,
  Followers,
  Btn,
} from './CardItem.styled';
import logo from '../../svg/Logo.svg';
import picture from '../../svg/picture2 1.svg';

export const CardItem = ({ data, dataStorage }) => {
  const { avatar, id, followers, tweets, user } = data;
  const { storage, setStorage } = dataStorage;
  const subscribed = storage.some(el => el === id);
  const totalFollowers = subscribed ? followers + 1 : followers;
  const formattedNumber = totalFollowers
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const subscribe = () => {
    if (!subscribed) {
      const newStorage = [...storage, id];
      setStorage(newStorage);
      localStorage.setItem('arrId', JSON.stringify(newStorage));
    }
    if (subscribed) {
      const newStorage = storage.filter(el => el !== id);
      setStorage(newStorage);
      localStorage.setItem('arrId', JSON.stringify(newStorage));
    }
  };

  return (
    <Wrapper>
      <Logo src={logo} alt="logo" />
      <img src={picture} alt="emblem" />
      <Line>
        <PhotoWrapper>
          <Photo src={avatar} alt={user} />
        </PhotoWrapper>
      </Line>
      <Tweets>{tweets} tweets</Tweets>
      <Followers>{formattedNumber} Followers</Followers>
      <Btn type="button" onClick={subscribe} subscribed={subscribed}>
        {subscribed ? 'Following' : 'Follow'}
      </Btn>
    </Wrapper>
  );
};
