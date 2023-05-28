import {
  BackArrowBox,
  BoardTitle,
  ContentsBox,
  ContentsInput,
  NewPostBox,
  NewPostText,
  NowUpload,
  RegisterBtn,
  UploadBox,
  UploadText,
} from '@/components/community/NewPost';
import { Modal, Select } from 'antd';
import Upload, { RcFile, UploadFile, UploadProps } from 'antd/es/upload';
import Image from 'next/image';
import React, { useState } from 'react';
import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { css } from '@emotion/css';

interface DraggableUploadListItemProps {
  originNode: React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
  file: UploadFile<any>;
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export default function NewPost() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1)
    );
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const [postForm, setPostForm] = useState({
    menuName: '',
    title: '',
    contents: '',
    uploads: fileList,
  });

  const handleMenu = (value: string) => {
    setPostForm((prevState) => {
      return {
        ...prevState,
        menuName: value,
      };
    });
  };

  const DraggableUploadListItem = ({
    originNode,
    file,
  }: DraggableUploadListItemProps) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({
      id: file.uid,
    });
    const style: React.CSSProperties = {
      transform: CSS.Transform.toString(transform),
      transition,
      cursor: 'move',
    };
    const className = isDragging
      ? css`
          a {
            pointer-events: none;
          }
        `
      : '';

    return (
      <div
        ref={setNodeRef}
        style={style}
        className={className}
        {...attributes}
        {...listeners}
      >
        {/* hide error tooltip when dragging */}
        {file.status === 'error' && isDragging
          ? originNode.props.children
          : originNode}
      </div>
    );
  };

  const sensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setFileList((prev) => {
        const activeIndex = prev.findIndex((i) => i.uid === active.id);
        const overIndex = prev.findIndex((i) => i.uid === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };
  return (
    <>
      <NewPostBox>
        <NewPostText>신규 게시글 작성</NewPostText>
        <BackArrowBox>
          <Image
            src={'/BackArrow.png'}
            alt="BackArrow"
            width={30}
            height={30}
          />
        </BackArrowBox>
        <Select
          defaultValue="질문/답변"
          style={{ width: 330, left: 30, top: 180 }}
          onChange={handleMenu}
          options={[
            { value: 'QnA', label: '질문/답변' },
            { value: 'FreeBoard', label: '자유게시판' },
            { value: 'KnowHow', label: '노하우' },
            { value: 'Review', label: '후기' },
          ]}
        />
        <BoardTitle placeholder="제목을 입력해주세요." />
        <ContentsBox>
          <ContentsInput placeholder="내용을 입력해주세요." />
        </ContentsBox>
        <UploadBox>
          <UploadText>사진 등록</UploadText>
          <NowUpload>
            최대 10장 업로드 가능
            <div
              style={{
                marginLeft: '8px',
                marginRight: '5px',
                color: '#F16341',
              }}
            >
              {fileList.length}
            </div>
            / 10
          </NowUpload>
          <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
            <SortableContext
              items={fileList.map((i) => i.uid)}
              strategy={verticalListSortingStrategy}
            >
              <div style={{ position: 'absolute', top: '100px' }}>
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                  multiple={true}
                  maxCount={10}
                  itemRender={(originNode, file) => (
                    <DraggableUploadListItem
                      originNode={originNode}
                      file={file}
                    />
                  )}
                >
                  {fileList.length >= 11 ? null : uploadButton}
                </Upload>
              </div>
            </SortableContext>
          </DndContext>
          <RegisterBtn>게시글 등록</RegisterBtn>
        </UploadBox>
        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </NewPostBox>
    </>
  );
}
