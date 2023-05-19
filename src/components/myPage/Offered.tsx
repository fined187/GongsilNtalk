import styled from "styled-components";

type Props = {
  subTab: number
}

export const AddressBox = styled.div`
  @media screen and (max-width: 768) {
    
  }
  position: absolute;
  display: flex;
  top: 140px;

  box-sizing: border-box;
  width: 976px;
  height: 217px;
  left: 472px;

  background-color: #ffffff;
  border: 1px solid #F0F0F0;
  border-radius: 10px;

`;

export const OfferTitle = styled.span`
  @media screen and (max-width: 768px) {
    
  }
  position: absolute;
  width: 360px;
  height: 30px;
  left: 853px;
  top: 96px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #2A2828;
`;

export const PageCnt = styled.span`
  @media screen and (max-width: 768px) {
    
  }
  position: absolute;
  width: 46px;
  height: 30px;
  left: 170px;
  top: 0px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #9B9B9B;
`;

export const AddressTitle = styled.span`
  position: absolute;
  width: 229px;
  height: 23px;
  left: 22px;
  top: 20px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #000000;
`;

export const CitySearchBox = styled.div`
  position: absolute;
  top: 61px;
  left: 22px;
`;

export const SelectedCityInfo = styled.span`
  position: absolute;
  width: 135px;
  height: 18px;
  left: 0px;
  top: 45px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #666666;
`;

export const ConditionBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 976px;
  height: 327px;
  left: 472px;
  top: 370px;

  background-color: #ffffff;
  border: 1px solid #F0F0F0;
  border-radius: 10px;
`;

export const ConditionText = styled.span`
  position: absolute;
  width: 240px;
  height: 23px;
  left: 22px;
  top: 20px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #000000;
`;

export const SubTabs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;

  position: absolute;
  width: 155px;
  height: 40px;
  left: 22px;
  top: 61px;
`;

export const BuildingTab = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;
  left: 0px;

  width: 65px;
  height: 40px;

  
  border-radius: 50px;
  
  flex: none;
  order: 0;
  flex-grow: 0;
  
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  
  border: ${(props) => `${props.subTab === 0 ? '1px solid #F16341' : '1px solid #D5D5D5'}}`};
  background: ${(props) => `${props.subTab === 0 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}}`} ;
  color: ${(props) => `${props.subTab === 0 ? '#F16341' : '#9E9E9E'}}`};
  cursor: pointer;
`;

export const OfficeTab = styled.div<Props>`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;

  left: 75px;
  gap: 10px;
  width: 80px;
  height: 40px;
  border-radius: 50px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  color: ${(props) => `${props.subTab === 1 ? '#F16341' : '#9E9E9E'}}`};
  background-color:${(props) => `${props.subTab === 1 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}}`};
  border: ${(props) => `${props.subTab === 1 ? '1px solid #F16341' : '1px solid #D5D5D5'}}`};
  cursor: pointer;
`;

export const MinimumArea = styled.div`
  position: absolute;
  top: 119px;
  left: 22px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #686564;
`;

export const Meter = styled.input`
  position: absolute;
  top: 22px;
  width: 130px;
  height: 44px;
  padding: 12px 0px 12px 14px;

  gap: 10px;

  border: 1px solid #D5D4D4;
  border-radius: 5px;

`;

export const MeterBox = styled.div`
  position: absolute;
  top: 2px;
  left: 160px;
`;

export const ChangeMeter = styled.input`
  position: absolute;
  width: 130px;
  height: 44px;
  padding: 12px 0px 12px 14px;
  left: 180px;
  top: 22px;

  border: 1px solid #D5D4D4;
  border-radius: 5px;
`;

export const UserBox = styled.div`
  position: absolute;
  width: 328px;
  height: 90px;
  left: 22px;
  top: 180px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: #686564;
`;

export const UserInput = styled.input`
  display: flex;
  width: 305px;
  height: 44px;
  position: absolute;
  padding: 12px 0px 12px 14px;
  top: 70px;
  border: 1px solid #D5D4D4;
  border-radius: 5px;
`;

export const UserText = styled.span`
  position: absolute;
  top: 80px;
  left: 320px;
`;

export const NextBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  gap: 4px;

  color: #ffffff;
  position: absolute;
  width: 150px;
  height: 46px;
  left: 1298px;
  top: 950px;

  background: #F16341;
  border-radius: 5px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
`;

export const SelectedNum = styled.span`
  color: #F16341;
  margin-left: 5px;
  margin-right: 5px;
`;