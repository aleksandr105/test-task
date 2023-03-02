import styled from '@emotion/styled';

export const Wrapper = styled.li`
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding: 28px 36px 36px 36px;
  position: relative;
`;

export const Logo = styled.img`
  left: 20px;
  top: 20px;
  position: absolute;
`;

export const Line = styled.div`
  left: 0px;
  position: absolute;
  margin-top: 18px;
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const PhotoWrapper = styled.div`
  position: absolute;
  left: calc(50% - 40px);
  top: calc(-40px + 4px);
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Photo = styled.img`
  border-radius: 50px;
  object-fit: cover;
  object-position: 50% 10%;
  width: 64px;
  height: 64px;
`;

export const Tweets = styled.p`
  text-align: center;
  margin-top: 88px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Followers = styled.p`
  margin-top: 16px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Btn = styled.button`
  margin-top: 26px;
  margin-left: auto;
  margin-right: auto;
  width: 196px;
  height: 50px;
  background: ${({ subscribed }) => (subscribed ? '#5CD3A8' : '#ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  display: block;
`;
