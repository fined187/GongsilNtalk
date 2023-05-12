import {
  MYoutubeBox,
  MYoutubeContents,
  MYoutubeContentsBox,
  MYoutubeContentsDetail,
  MYoutubeContentsTitle,
  MYoutubeFooter,
  MYoutubeImg,
  MYoutubeLine,
  MYoutubeProfileBox,
  MYoutubeProfileName,
} from '@/components/community/MYoutube';
import Image from 'next/image';

type Props = {
  post: any;
  yPosts: any;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function MYoutube({ post, yPosts, setCurrentPage }: Props) {
  return (
    <>
      <MYoutubeBox>
        {post?.map((a: any, i: number) => {
          return (
            <div key={i}>
              <MYoutubeContents>
                <MYoutubeProfileBox>
                  <MYoutubeProfileName>공실앤톡</MYoutubeProfileName>
                </MYoutubeProfileBox>
                <MYoutubeContentsBox>
                  <MYoutubeContentsTitle>{a.title}</MYoutubeContentsTitle>
                  <MYoutubeContentsDetail>{a.contents}</MYoutubeContentsDetail>
                  <MYoutubeFooter>
                    {a.date + ' '} {'추천 ' + a.reco + ' '} {'댓글 ' + a.repl}
                  </MYoutubeFooter>
                  <Image
                    src={'/YImage'}
                    alt="YImage"
                    width={92}
                    height={92}
                    style={{
                      position: 'absolute',
                      left: '250px',
                      marginTop: '-20px',
                    }}
                  />
                </MYoutubeContentsBox>
              </MYoutubeContents>
              <MYoutubeLine />
            </div>
          );
        })}
      </MYoutubeBox>
    </>
  );
}
