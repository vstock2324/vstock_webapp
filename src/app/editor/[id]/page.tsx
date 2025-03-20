
import { Editor } from "../_components/Editor";

export default async function EditorIDPage({params}:{params:Promise<{id:string}>}){
    const id=(await params).id;
    console.log(id);
    return <>
     <Editor/>
         </>
}