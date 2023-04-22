import 'react-quill/dist/quill.snow.css';
import StyledQuill from "./style";
import QuillProps from "./types";

export default function Quill({text,setText}:QuillProps){
    return  <StyledQuill
        value={text}
        onChange={setText}
        modules={{
            toolbar: [
                [{ 'header': [1, 2,3,4,5,6, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'direction': 'rtl' }],
                [{ 'align': [] }],
                ['link'],
                ['image'],
                ['video'],

                ['clean']
            ]}}
    />
}