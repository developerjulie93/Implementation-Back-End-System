import React, { useRef, useEffect } from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';

const EditorBlock = styled(Responsive)`
    padding-top: 5rem;
    padding-bottom: 5rem;
`;
const TitleInput = styled.input`
    font-size: 3rem;
    outline: none;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[4]};
    margin-bottom: 2rem;
    width: 100%;
`;
const QuillWrapper = styled.div`
    .ql-editor{
        padding: 0;
        min-height: 320px;
        font-size: 1.125rem;
        line-height: 1.5;
    }
    .ql-editor.ql-blank::before{
        left: 0px;
    }
`;
const Editor=()=>{
    const quillElement =  useRef(null);
    const quillInstance = useRef(null);

    useEffect(()=>{
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'bubble',
            placeholder: 'Write down what you want...',
            modules: {
                toolbar: [
                    [{header: '1'}, {header: '2'}],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{list: 'ordered'}, {list: 'bullet'}],
                    ['blockquote', 'code-block', 'link', 'image'],
                ],
            },
        });
    }, []);
    return(
        <EditorBlock>
            <TitleInput placeholder='Title'></TitleInput>
            <QuillWrapper>
                <div ref={quillElement}></div>
            </QuillWrapper>
        </EditorBlock>
    );
};
export default Editor;