import React from 'react'
//Editor :is methoe to create run time editer pleace document pad le
import { Editor } from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'


// controller: is methode to pass property to all control compone in from

export default function RTE({name,control,lebel,defaultValue =""}) {  


  return (
    <div className='w-full'>
      {lebel && <lebel className = 'inline-block mb-1 pl-1'>
      {lebel}
      </lebel>
      }
{/* //pass value main from to call her */}
      <Controller
     name={name || "content"}
     control={control}
     // is field me kuch bhi change to render ker deta hai and document pad le
     render={({field:{onchange}}) =>(

  
    <Editor
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
            
     )}
      />
    </div>
  )
}


