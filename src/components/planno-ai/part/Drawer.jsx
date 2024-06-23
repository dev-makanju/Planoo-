import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';

export default function AnchorTemporaryDrawer(props) {
  const [ stateData, setStateData] = useState({
    right: false,
  });

  useEffect(() => {
    setStateData({ ...stateData, right: props.openDrawer });
  },[props.openDrawer])

  return (
    <div>
        <React.Fragment>
          <Drawer
            anchor='right'
            open={stateData.right}
            onClose={props.closeDrawer}
            PaperProps={{
                sx: {
                  width: '400px',
                  padding: '1rem',
                }
            }}
          >
            <div className='modal-header-container'>
                <span>T</span> <h1>End to End Test</h1>
                </div>
                <hr/>
                <div className='custom-tag'>
                    <h1>Key deliverables</h1>
                    <ul>
                    <li>Enginerring report</li>
                    <li>Proposal</li>
                    <li>Design Drawing</li>
                    </ul>

                    <div className='custom-tag'>
                
                    </div>
                </div>
          </Drawer>
        </React.Fragment>
    </div>
  );
}
