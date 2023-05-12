import {
  DetailBox,
  DetailContent,
  DetailLine,
  DetailProBox,
  EndLine,
  ImgBox,
  Repl,
  UserInfoBox,
} from '@/components/community/DetailContents';
import { Megazine } from '../../../../../types/Megazine';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { BackArrow, GongtalkBox } from '@/components/community/Icon';
import Image from 'next/image';
import {
  RegiDate,
  TitleText,
  UserName,
} from '@/components/community/DetailText';
import moment from 'moment';
import RenderCarousel from '../../Carousel';

interface Props {
  megazine: Megazine;
}

const MegazineDetail: NextPage<Props> = ({ megazine }) => {
  return (
    <>
      <DetailBox>
        <BackArrow>
          <Image src={'/BackArrow.png'} alt="BackArrow" width={9} height={16} />
        </BackArrow>
        <GongtalkBox>공톡 매거진</GongtalkBox>
        <TitleText>{megazine.title}</TitleText>
        <UserInfoBox>
          <DetailProBox>
            <Image src={'/ProPic.png'} alt="ProPic" width={40} height={40} />
          </DetailProBox>
          <UserName>공실앤톡</UserName>
          <RegiDate>
            {moment(megazine.date).format('YYYY.MM.DD HH:mm')}
          </RegiDate>
        </UserInfoBox>
        <DetailLine />
        <DetailContent>{megazine.content}</DetailContent>
        <ImgBox>
          <RenderCarousel />
        </ImgBox>
        <EndLine />
        <Repl placeholder="댓글을 입력해보세요" />
      </DetailBox>
    </>
  );
};

export default MegazineDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const megazines = (await import('../../../../../../MegazineDummy.json'))
    .default;
  const paths = megazines.map((megazine: Megazine) => ({
    params: { id: megazine.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const megazines = (await import('../../../../../../MegazineDummy.json'))
    .default;
  const megazine = megazines.find(
    (megazine: Megazine) => megazine.id === params?.id
  );
  return { props: { megazine } };
};
