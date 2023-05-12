import {
  ContentsBox,
  ProfileBox,
  YContents,
  YFooter,
  YUsername,
  Ytitle,
} from '@/components/community/ContentsBox';
import { EmptyBox, Line, NoticeBox } from '@/components/community/NoticeBox';
import Notice from '../../Notice';
import Image from 'next/image';
import Paging from '../../Paging';
import Link from 'next/link';

type Props = {
  post: any;
  mPosts: any;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Megazine({ post, mPosts, setCurrentPage }: Props) {
  return (
    <>
      <Notice />
      <EmptyBox />
      <ContentsBox>
        {post?.map((a: any, i: number) => {
          return (
            <div key={i}>
              <ProfileBox>
                <Image
                  src={'/ProPic.png'}
                  alt="ProPic"
                  width={30}
                  height={30}
                  style={{
                    marginBottom: '16px',
                  }}
                />
                <YUsername>공실앤톡</YUsername>
              </ProfileBox>
              <div>
                <Image
                  src={'/YImage.png'}
                  alt="YImage"
                  width={154}
                  height={108}
                  style={{
                    position: 'absolute',
                    left: '600px',
                    marginTop: '-20px',
                  }}
                />
              </div>
              <Link href={`/Community/Contents/Megazine/posts/${a.id}`}>
                <Ytitle>{a.title}</Ytitle>
              </Link>
              <YContents>{a.content}</YContents>
              <YFooter>
                {a.date + ' '} {'추천 ' + a.reco + ' '} {'댓글 ' + a.repl}
              </YFooter>
              <Line />
            </div>
          );
        })}
        <Paging totalPosts={mPosts?.length} paginate={setCurrentPage} />
      </ContentsBox>
    </>
  );
}
