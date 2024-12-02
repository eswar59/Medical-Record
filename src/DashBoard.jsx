import { Graph } from "./Graph"
import { useRecoilValueLoadable } from "recoil"
import { patientsAtomFamily } from "./store/atoms/patient"

export function DashBoard() {     
    
    return (
        <div >
            <div style={{ background: '#FFFFFF ', borderRadius: '16px', opacity: '1' }}>
                <Diagnosis></Diagnosis>
            </div>
            <div style={{ background: '#FFFFFF ', borderRadius: '16px', opacity: '1' }}>
                <DiagnosisList></DiagnosisList>
            </div>           
            
        </div>
        
    )
}

function Diagnosis() {
    const patient = useRecoilValueLoadable(patientsAtomFamily("Jessica Taylor"))

    if (patient.state === 'loading') {
        return (
            <div>Loading...</div>
        )
    }

    const respValue = patient.contents.diagnosis_history[0].respiratory_rate.value
    const respLevels = patient.contents.diagnosis_history[0].respiratory_rate.levels
    const tempValue = patient.contents.diagnosis_history[0].temperature.value
    const tempLevels = patient.contents.diagnosis_history[0].temperature.levels
    const heartValue = patient.contents.diagnosis_history[0].heart_rate.value
    console.log(heartValue)
    const heartLevels = patient.contents.diagnosis_history[0].heart_rate.levels
    console.log(heartLevels)


    return (
        <div>            
            <div>
                <div style={{
                    paddingTop: '15px',
                    paddingLeft: '15px',
                    textAlign: 'left',
                    font: 'normal normal 800 24px/33px Manrope',
                    letterSpacing: '0px',
                    color: '#072635',
                    opacity: 1,

                }}>Diagnosis History</div><br></br>
                <BloodPressure  ></BloodPressure>    
            </div>
            
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr'
            }}>
                <div>
                    <SmallCard image='respiratory rate.svg' category="Respiratory Rate" value={`${respValue} bpm`} levels={respLevels} colorBg="#E0F3FA"></SmallCard>
                </div>
                <div>
                    <SmallCard image='temperature.svg' category="Temperature" value={`${tempValue} °F`} levels={tempLevels} colorBg="#FFE6E9"></SmallCard>
                </div>
                <div>
                    <SmallCard image='HeartBPM.svg' category="Heart Rate" value={`${heartValue} bpm`} levels={heartLevels} colorBg="#FFE6F1"></SmallCard>
                </div>
            </div>
        </div>

    )
}

function BloodPressure() {
    const patient = useRecoilValueLoadable(patientsAtomFamily("Jessica Taylor"))

    if (patient.state === 'loading') {
        return (
            <div>Loading...</div>
        )
    }
    const sysValue = patient.contents.diagnosis_history[0].blood_pressure.systolic.value
    const sysLevels = patient.contents.diagnosis_history[0].blood_pressure.systolic.levels
    const diaValue = patient.contents.diagnosis_history[0].blood_pressure.diastolic.value
    const diaLevels = patient.contents.diagnosis_history[0].blood_pressure.diastolic.levels


    return (
        <div style={{            
            width:'747px',
            backgroundColor: "#F4F0FE",
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            borderRadius: '16px',
            opacity: '1',
            marginLeft: '16px',
            marginTop: '10px'
        }}>
            <div > <GraphArea></GraphArea></div>
            <div>
                <GraphInference bpCategory="Systolic" bpValue={sysValue} bpLevels={sysLevels} bpColour="#E66FD2"></GraphInference>
                <GraphInference bpCategory="Diastolic" bpValue={diaValue} bpLevels={diaLevels} bpColour="#8C6FE6"></GraphInference>                
            </div>

        </div>
    )
}

function GraphInference({ bpCategory, bpValue, bpLevels, bpColour }) {

    const style = {
        textAlign: 'left',
        font: "normal normal bold 14px/19px Manrope",
        letterSpacing: '0px',
        textTransform: 'capitalize',
        opacity: '1',
        color: bpColour
    }

    return (
        <div style={{
            backgroundColor: "#F4F0FE",
            paddingTop: '20px',
            paddingBottom: '20px',
            paddingLeft: '30px',
            borderRadius: '16px'
        }}>
            <div style={style}>{bpCategory}</div>
            <div style={{
                textAlign: 'left',
                font: "normal normal bold 22px/30px Manrope",
                letterSpacing: '0px',
                color: '#072635',
                textTransform: 'capitalize',
                opacity: '1',
            }}>{bpValue}</div>
            <div style={{
                textAlign: 'left',
                font: "normal normal normal 14px/19px Manrope",
                letterSpacing: '0px',
                color: '#072635',
                textTransform: 'capitalize',
                opacity: '1',
            }}>{bpLevels}</div>
        </div>
    )
    
}

function SmallCard({ image, category, value, levels, colorBg }) {
    
    const style = {
        height: '242px',
        width: '228px',        
        borderRadius: '16px',
        marginTop: '25px',
        marginLeft: '16px',
        marginBottom: '20px',
        backgroundColor: colorBg
    }
    return (
        <div style={style}>
            <div style={{
                paddingLeft: '16px',
                paddingTop: '16px',                
            }}><img src={image}></img> </div>
            <div style={{
                paddingLeft: '16px',
                textAlign: 'left',
                fontFamily: 'Manrope', 
                fontWeight: '500', 
                fontSize: '16px',
                lineHeight: '22px', 
                letterSpacing: '0px',
                textTransform: 'capitalize',
                opacity: '1',
            }}>{category}</div>
            <div style={{
                paddingLeft: '16px',
                textAlign: 'left',
                font: 'normal normal 800 30px/41px Manrope',
                letterSpacing: '0px',                  
                opacity: '1',
                paddingBottom: '20px',
            }}>{value}</div>
            <div style={{
                paddingLeft: '16px',
                textAlign: 'left',
                font: 'normal normal normal 14px/19px Manrope',
                letterSpacing: '0px',                
                textTransform: 'capitalize',
                opacity: '1',
            }}>{levels}</div>            
        </div>
    )
}



function GraphArea() {
    return (
        <div>
            <div style={{                
                display: 'grid',
                gridTemplateColumns: '1fr 1fr '
            }}>
                <div style={{
                    backgroundColor: "#F4F0FE",
                    textAlign: 'left',
                    font: 'normal normal bold 18px/24px Manrope',
                    letterSpacing: '0px',
                    color: '#072635',
                    textTransform: 'capitalize',
                    opacity: 1,
                    paddingLeft: '30px',
                    paddingBottom: '8px',
                    borderRadius:'16px',
                    paddingTop:'10px'
                }}>Blood Pressure</div>                
                <div style={{
                    paddingTop: '15px',
                    backgroundColor: "#F4F0FE",
                    textAlign: 'right',
                    font: 'normal normal normal 14px/19px Manrope',
                    letterSpacing: '0px',
                    color: '#072635',
                    opacity: 1,
                    paddingRight: '16px',
                    paddingBottom: '8px'
                }}>Last 6 Months</div>
            </div>
            <div style={{paddingLeft:'20px', paddingBottom: '10px'}}><Graph></Graph> </div>
        </div>
    )
}

function DiagnosisList() {
    const patient = useRecoilValueLoadable(patientsAtomFamily("Jessica Taylor"))

    if (patient.state === 'loading') {
        return (
            <div>Loading...</div>
        )
    }
    
    const diagList = patient.contents.diagnostic_list

    return (
        <div>
            <div style={{
                paddingTop: '15px',
                paddingLeft: '15px',
                textAlign: 'left',
                font: 'normal normal 800 24px/33px Manrope',
                letterSpacing: '0px',
                color: '#072635',
                opacity: 1,
                marginTop: '30px',
                paddingBottom: '20px'
            }}>Diagnostic List</div>
            <TableTitle></TableTitle>
            {diagList.map(function (item) {
                return <TableContents name={item.name} description={item.description} status={item.status}></TableContents>
            })}                       
        </div>
    )
}

function TableTitle() {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr 1fr',
            placeItems: 'center',
            width: '726px',
            height: '48px',
            backgroundColor: '#F6F7F8',
            borderRadius: '16px',
            marginLeft: '26px',
            textAlign: 'left',
            font:'normal normal bold 14px / 19px Manrope',
            letterSpacing: '0px',
            color: '#072635',
            opacity: '1',
        }}>
            <div>Problem/Diagnosis</div>
            <div>Description</div>
            <div>Status</div>

        </div>
    )
}

function TableContents({name, description, status}) {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr 1fr',
            placeItems: 'center',
            width: '726px',
            height: '48px',            
            borderRadius: '16px',
            marginLeft: '26px',
            textAlign: 'left',
            font: 'normal normal normal 14px/19px Manrope',
            letterSpacing: '0px',
            color: '#072635',
            opacity: '1',            
        }}>
            <div>{name}</div>
            <div>{description}</div>
            <div>{status}</div>

        </div>
    )
}