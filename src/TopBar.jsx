export function TopBar() {
    const doctor_image = 'senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png'
    const doctor_name = "Dr. Jose Simmons"
    const doctor_specialisation="General Practioner"
    return (
        <div>
            <div style={{ paddingLeft: '18px', alignItems: 'center', display: 'grid', gridTemplateColumns: '1fr 3fr 1fr 0.2fr', top: '18px', left: '18px', width: '1564px', height: '72px', background: '#FFFFFF 0% 0% no-repeat padding-box', borderRadius: '70px', opacity: '1' }}>
                <Logo></Logo>
                <MiddleBar></MiddleBar>
                <DoctorBar style={{ background: 'lightblue' }} image={doctor_image} name={doctor_name} specialisation={doctor_specialisation}></DoctorBar>                
                <Settings></Settings>
            </div>
        </div>
    )
}

function Logo() {
    return (
        <div sytle={{  top: '30px', left: '50px', width: '211px', height: '48px', background: "transparent url('/TestLogo.png') 0% 0 % no-repeat padding-box", opacity: '1' }}>
            <img src='TestLogo.svg'></img>
        </div>
    )
}

function MiddleBar() {

    const overview_icon = 'home_FILL0_wght300_GRAD0_opsz24.svg'
    const patients_icon = 'group_FILL0_wght300_GRAD0_opsz24.svg'
    const schedule_icon = 'calendar_today_FILL0_wght300_GRAD0_opsz24.svg'
    const message_icon = 'chat_bubble_FILL0_wght300_GRAD0_opsz24.svg'
    const transactions_icon = 'credit_card_FILL0_wght300_GRAD0_opsz24.svg'

    return (
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <MiddleButton title="Overview" iconURL={overview_icon} ></MiddleButton>
            <MiddleButton title="Patients" iconURL={patients_icon} ></MiddleButton>
            <MiddleButton title="Schedule" iconURL={schedule_icon} ></MiddleButton>
            <MiddleButton title="Message" iconURL={message_icon} ></MiddleButton>
            <MiddleButton title="Transactions" iconURL={transactions_icon} ></MiddleButton>            
        </div>
    )
}

function DoctorBar({image, name, specialisation}) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> 
            <img style={{ paddingRight: '4px' }} src={image}></img>
            <div>
                <div style={{                    
                    font: 'normal normal bold 14px/19px Manrope',
                    letterSpacing: 'var(--unnamed-character-spacing-0)',
                    color: '#072635',
                    textAlign: 'left',
                    opacity: 1,
                    }}>{name}</div>
                <div style={{
                    font: 'normal normal normal 14px/19px Manrope',
                    letterSpacing: 'var(--unnamed-character-spacing-0)',
                    color: '#707070',
                    textAlign: 'left',
                    opacity: 1,
                }}>{specialisation}</div>
            </div>
        </div>
    )
}

function Settings() {
    return (
        <div>
            <img style={{ paddingRight: '12px' }} src='settings_FILL0_wght300_GRAD0_opsz24.png'></img>
            <img src='more_vert_FILL0_wght300_GRAD0_opsz24.png'></img>
        </div>
    )
}

function MiddleButton({title, iconURL}) {
    return (        
        <div style={{paddingRight: '6px'}}>
            <button style={{ border: 'none', backgroundColor: 'transparent', borderRadius: '41px', top: '34px', left: '601px', width: '122px', height: '41px' }}
                onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#01F0D0';
                e.target.style.color = '#072635';
            }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#000';
                }}>
                <div style={{ display: 'flex', alignItems: 'center' , justifyContent:'center'}}>
                    <img style={{ paddingRight: '4px' }} src={iconURL}></img><span >{title}</span>
                </div>               

            </button>
        </div>
    )
}