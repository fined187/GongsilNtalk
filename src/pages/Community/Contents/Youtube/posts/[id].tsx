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
import { Megazine, Youtube } from '../../../../../types/Megazine';
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
  youtube: Youtube | undefined;
}

const YoutubeDetail: NextPage<Props> = ({ youtube }) => {
  return (
    <>
      <DetailBox>
        <BackArrow>
          <Image src={'/BackArrow.png'} alt="BackArrow" width={9} height={16} />
        </BackArrow>
        <GongtalkBox>공톡 매거진</GongtalkBox>
        <TitleText>{youtube?.title}</TitleText>
        <UserInfoBox>
          <DetailProBox>
            <Image src={'/ProPic.png'} alt="ProPic" width={40} height={40} />
          </DetailProBox>
          <UserName>공실앤톡</UserName>
          <RegiDate>
            {moment(youtube?.date).format('YYYY.MM.DD HH:mm')}
          </RegiDate>
        </UserInfoBox>
        <DetailLine />
        <DetailContent>{youtube?.contents}</DetailContent>
        <ImgBox>
          <Image src={'/YImage'} alt="YImage" width={100} height={100} />
        </ImgBox>
        <EndLine />
        <Repl placeholder="댓글을 입력해보세요" />
      </DetailBox>
    </>
  );
};

export default YoutubeDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const youtubes = (await import('../../../../../../YoutubeDummy.json'))
    .default;
  const paths = youtubes.map((youtubes: Youtube) => ({
    params: { id: youtubes.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const youtubes = (await import('../../../../../../YoutubeDummy.json'))
    .default;
  const youtube = youtubes.find(
    (youtubes: Youtube) => youtubes.id === params?.id
  );
  return { props: { youtube } };
};
