import React ,{useState} from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
const CopyText = ({text}) => {

    const [copy, setCopy]= useState(false)

    return (
        <div>
            <CopyToClipboard 
                text={text}
                onCopy={()=>setCopy(true)}
                >
                    {copy?<p className="badge badge-success">Coppied</p>
                        :
                        <button className="btn btn-link" style={{marginTop:-5}}>Copy</button>}

            </CopyToClipboard>
            
        </div>
    )
}

export default CopyText
