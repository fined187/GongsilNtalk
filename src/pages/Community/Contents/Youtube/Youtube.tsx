import { Line } from '@/components/community/NoticeBox';
import {
  ContentsBox,
  MovingBox,
  ProfileBox,
  YContents,
  YFooter,
  YUsername,
  Ytitle,
} from '@/components/community/ContentsBox';
import Image from 'next/image';
import Paging from '../../Paging';
import {
  OrderBox,
  Updated,
  Recommend,
  Repl,
  ClickedOrder,
} from '@/components/community/OrderBy';
import { useState } from 'react';
import { MovingSpan } from '@/components/community/TabSpan';
import Notice from '../../Notice';
import Link from 'next/link';

type Props = {
  post: any;
  yPosts: any;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Youtube({ post, yPosts, setCurrentPage }: Props) {
  const [clickedOrder, setClickedOrder] = useState<number>(0);

  const handleClick = (number: number) => {
    setClickedOrder(number);
  };

  return (
    <>
      <Notice />
      <ContentsBox>
        <OrderBox>
          <Updated
            clickedOrder={clickedOrder === 0}
            onClick={() => {
              handleClick(0);
            }}
          >
            <ClickedOrder
              clickedOrder={clickedOrder === 0}
              onClick={() => {
                handleClick(0);
              }}
            />
            최신순
          </Updated>
          <Recommend
            clickedOrder={clickedOrder === 1}
            onClick={() => {
              handleClick(1);
            }}
          >
            <ClickedOrder
              clickedOrder={clickedOrder === 1}
              onClick={() => {
                handleClick(1);
              }}
            />
            추천순
          </Recommend>
          <Repl
            clickedOrder={clickedOrder === 2}
            onClick={() => {
              handleClick(2);
            }}
          >
            <ClickedOrder
              clickedOrder={clickedOrder === 2}
              onClick={() => {
                handleClick(2);
              }}
            />
            댓글순
          </Repl>
        </OrderBox>
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
              <Link href={`/Community/Contents/Youtube/posts/${a.id}`}>
                <Ytitle>{a.title}</Ytitle>
                <YContents>{a.contents}</YContents>
                <YFooter>
                  {a.date + ' '} {'추천 ' + a.reco + ' '} {'댓글 ' + a.repl}
                </YFooter>
              </Link>
              <Line />
            </div>
          );
        })}
        <Paging totalPosts={yPosts?.length} paginate={setCurrentPage} />
      </ContentsBox>
      <MovingBox>
        <MovingSpan>공톡 유튜브 추천글</MovingSpan>
      </MovingBox>
    </>
  );
}
