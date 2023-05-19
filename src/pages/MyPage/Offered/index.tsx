import { AddressBox, AddressTitle, BuildingTab, ChangeMeter, CitySearchBox, ConditionBox, ConditionText, Meter, MeterBox, MinimumArea, NextBtn, OfferTitle, OfficeTab, PageCnt, SelectedCityInfo, SelectedNum, SubTabs, UserBox, UserInput, UserText } from "@/components/myPage/Offered";
import { useEffect, useState } from "react";
import { Select } from "antd";
import Image from "next/image";
import { CallAddress } from "@/pages/api/Sigungu";

export default function Offered() {
  const [meterToArea, setMeterToArea] = useState<number>(0);
  const [areaToMeter, setAreaToMeter] = useState<number>(0);

  const [subTab, setSubTab] = useState<number>(0);

  const CityList = [
    {value: "서울시 강서구", label: "서울시 강서구"},
    {value: "서울시 동대문구", label: "서울시 동대문구"},
    {value: "서울시 영등포구", label: "서울시 영등포구"},
    {value: "용인시 수지구", label: "용인시 수지구"},
    {value: "용인시 기흥구", label: "용인시 기흥구"},
    {value: "수원시 영통구", label: "수원시 영통구"},
  ];

  const changeMeters = (e: React.FormEvent<HTMLInputElement>) => {
    const inputNum: number = parseInt(e.currentTarget.value);
    return setMeterToArea(Math.ceil(inputNum / 3.3058));
  };

  const changeArea = (e: React.FormEvent<HTMLInputElement>) => {
    const inPutNum: number = parseInt(e.currentTarget.value);
    return setAreaToMeter(inPutNum / 3.3058);
  };

  const [pageCnt, setPageCnt] = useState(1);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagChange = (value: any) => {
    if(value.length <= 3) {
      setSelectedTags(value);
    };
  };

  let List: any = [];
  useEffect(() => {
    const CallAPiTest = async () => {
      List = await CallAddress(45);
      console.log(List);
    };
    CallAPiTest();
  })

  return (
    <>
      <OfferTitle>
        매물 제안서 받기
        &nbsp; 
        <span style={{ color: "#F16341" }} >
          {' ' + pageCnt + ' '} 
        </span>
        <PageCnt>
        &nbsp;
            / 3
        </PageCnt>
      </OfferTitle>
      <AddressBox>
        <AddressTitle>
          어디에 매물을 얻고 싶으신가요?
        </AddressTitle>
        <CitySearchBox>
          <Select
            mode="multiple"
            allowClear
            style={{ width: "500px"}}
            placeholder="시 / 군 / 구를 선택하세요"
            options={CityList}
            maxTagCount={3}
            value={selectedTags}
            onChange={handleTagChange}
            size="large"
          />
          {selectedTags.length <= 3 && (
            <SelectedCityInfo>
              선택 가능 갯수
              <SelectedNum>
                {selectedTags.length} 
              </SelectedNum>
              / 3
            </SelectedCityInfo>
          )} 
        </CitySearchBox>
      </AddressBox>
      <ConditionBox>
        <ConditionText>
          원하시는 매물 조건을 알려주세요.
        </ConditionText>
        <SubTabs>
          <BuildingTab subTab={subTab} onClick={() => setSubTab(0)}>
            상가
          </BuildingTab>
          <OfficeTab subTab={subTab} onClick={() => setSubTab(1)}>
            사무실
          </OfficeTab>
        </SubTabs>
        <MinimumArea>
          최소 희망 면적
          <Meter placeholder="ex. 300"  onChange={(e) => {changeMeters(e);}}/>
          <ChangeMeter placeholder="ex. 100" defaultValue={isNaN(meterToArea) ? 0 : meterToArea} onChange={(e) => {changeArea(e);}}/>
        </MinimumArea>
        <UserBox>
          사용 인원
          <UserInput placeholder="ex. 50" />
          <UserText>
            명
          </UserText>
        </UserBox>
      </ConditionBox>
      <NextBtn>
        다음
      </NextBtn>
    </>
  )
};