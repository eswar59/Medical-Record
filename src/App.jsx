import { useState } from 'react'
import { TopBar } from './TopBar'
import { DashBoard } from './DashBoard'
import { CurrPatient } from './CurrPatient'
import { Patients } from './Patients'
import { RecoilRoot } from 'recoil'

function App() {
  

  return (
    <RecoilRoot>
      <div style={{
        position: 'absolute',
        
        background: '#F6F7F8 0% 0% no-repeat padding-box',
        opacity: 1,
      }}>
        <TopBar ></TopBar>
        <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '20px' }}>
          <div >
            <Patients />
          </div>
          <div >
            <DashBoard />
          </div>
          <div >
            <CurrPatient />
          </div>
        </div>


      </div>

    </RecoilRoot>    
      
  )
}

export default App
