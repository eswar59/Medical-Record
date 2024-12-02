import { useRecoilValueLoadable, useRecoilValue } from "recoil"
import { patientsAtomFamily } from "./store/atoms/patient"

export function CurrPatient() {
    return (
        <div >
            <PatientCard ></PatientCard>
            <LabReport></LabReport>
        </div>
    )
}

function PatientCard() {
    const patient = useRecoilValueLoadable(patientsAtomFamily("Jessica Taylor"))

    if (patient.state === 'loading') {
        return (
            <div>Loading...</div>
        )
    }

    const name = patient.contents.name

    const dob = patient.contents.date_of_birth    
    const date = new Date(dob);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(date);  
    console.log(typeof(formattedDate))

    const phoneNo= patient.contents.phone_number
    const emergencyContact = patient.contents.emergency_contact
    const insurance = patient.contents.insurance_type
    const gender = patient.contents.gender   
    const profiePhoto = patient.contents.profile_picture

    return (
        <div style={{ background: '#FFFFFF ', borderRadius: '16px', opacity: '1' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '40px',

            }}><img src={profiePhoto}></img></div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '20px',
                paddingBottom: '20px',
                textAlign: "center",
                font: "normal normal 800 24px/33px Manrope",
                letterSpacing: "0px",
                color: "#072635",
                opacity: 1
            }}>{name}</div>
            <DetailsCard topLine="Date Of Birth" bottomLine={formattedDate} iconURL='BirthIcon.png'></DetailsCard>
            <DetailsCard topLine="Gender" bottomLine={gender} iconURL='FemaleIcon.png'></DetailsCard>
            <DetailsCard topLine="Contact Info." bottomLine={phoneNo} iconURL='PhoneIcon.png'></DetailsCard>
            <DetailsCard topLine="Emergency Contacts" bottomLine={emergencyContact} iconURL='PhoneIcon.png'></DetailsCard>
            <DetailsCard topLine="Insurance Provider" bottomLine={insurance} iconURL='InsuranceIcon.png'></DetailsCard>
            <div style={{
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'center', 
                paddingBottom: '20px',
                paddingTop: '30px'
            }}><button style={{
                    width: '220px',
                    height: '41px',
                    border: 'none',
                    backgroundColor: '#01F0D0',
                    borderRadius: '41px',                    
                    font: 'normal normal bold 14px/19px Manrope',
                    letterSpacing: '0px',
                    color: '#072635',
                    opacity: '1'
                }}                  
            >Show All Information</button></div>
        </div>
    )
}

function DetailsCard({ topLine, bottomLine, iconURL }) {
    const patient = useRecoilValueLoadable(patientsAtomFamily("Jessica Taylor"))
    console.log(patient.contents.name)
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 4fr',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '20px'
        }}>
            <div style={{                
                display: 'flex',
                justifyContent: 'center'
            }}><img src={iconURL}></img></div>
            <div style={{paddingTop: '5px'}}>
                <div style={{                    
                    color: "#072635",
                    textTransform: "capitalize",                 
                    textAlign: 'left',
                    fontFamily: 'Manrope',
                    fontWeight: 'medium',
                    fontSize: '14px',
                    lineHeight: '19px',  
                    opacity: '1',
                }}>{topLine}</div>
                <div style={{
                    textAlign: "left",
                    font: "normal normal bold 14px/19px Manrope",
                    letterSpacing: "0px",
                    color: "#072635",
                    textTransform: "capitalize",
                    opacity: 1,
                }}>{bottomLine}</div>
            </div>
        </div>
    )
}

function LabReport() {
    const patient = useRecoilValueLoadable(patientsAtomFamily("Jessica Taylor"))

    if (patient.state === 'loading') {
        return (
            <div>Loading...</div>
        )
    }

    const labReport = patient.contents.lab_results

    return (
        <div style={{ background: '#FFFFFF ', borderRadius: '16px', opacity: '1' }}>
            <div style={{
                paddingTop: '15px',
                paddingLeft: '15px',
                textAlign: 'left',
                font: 'normal normal 800 24px/33px Manrope',
                letterSpacing: '0px',
                color: '#072635',
                opacity: 1,
                marginTop: '30px',
                paddingBottom: '20px',
                borderRadius: '16px'
            }}>Lab Results</div>            
            {labReport.map(function (item) {
                return <ReportContents report={item} ></ReportContents>
            })}
        </div>
    )
}

function ReportContents({ report }) {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '4fr 1fr',            
            paddingTop: '10px',
            paddingBottom: '10px',
            borderRadius: '16px'
        }}>
            <div style={{
                textAlign: 'left',
                font: 'normal normal normal 13px/18px Manrope',
                letterSpacing: '0px',
                color: '#072635',
                textTransform: 'capitalize',
                opacity: '1',
                paddingLeft: '30px'
            }}>{report}</div>
            <div><img src='download_FILL0_wght300_GRAD0_opsz24 (1).svg'></img></div>
        </div>
    )
}