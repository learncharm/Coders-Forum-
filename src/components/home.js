import React from 'react'
import { Button, Uploader  } from 'rsuite';

import  'rsuite/dist/rsuite.min.css'


export default function home() {
  const styles = {
    lineHeight: '200px'
  };
  return (
    <div>
       <Uploader action="//jsonplaceholder.typicode.com/posts/" draggable>
      <div style={styles}>Click or Drag files to this area to upload</div>
    </Uploader>
    
     <Button>Ghost</Button>

    </div>
  )
}
