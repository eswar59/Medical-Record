export function Patients() {
    
    return (
        <div style={{ background: '#FFFFFF 0% 0% no-repeat padding-box', borderRadius: '16px', opacity:'1'}}>
            <TitleCard></TitleCard>
            <Patient name="Emily Williams" image='Layer 8.png' gender="Female" age="18"></Patient>
            <Patient name="Emily Williams" image='Layer 8.png' gender="Female" age="18"></Patient> {/* loop over patients list using map*/}
            <Patient name="Emily Williams" image='Layer 8.png' gender="Female" age="18"></Patient>
            <Patient name="Emily Williams" image='Layer 8.png' gender="Female" age="18"></Patient>
            <Patient name="Emily Williams" image='Layer 8.png' gender="Female" age="18"></Patient>
            <Patient name="Emily Williams" image='Layer 8.png' gender="Female" age="18"></Patient> {/* loop over patients list using map*/}
            <Patient name="Emily Williams" image='Layer 8.png' gender="Female" age="18"></Patient>
            <Patient name="Emily Williams" image='Layer 8.png' gender="Female" age="18"></Patient>
            <Patient name="Emily Williams" image='Layer 8.png' gender="Female" age="18"></Patient>
            <Patient name="Emily Williams" image='Layer 8.png' gender="Female" age="18"></Patient> {/* loop over patients list using map*/}
            <Patient name="Emily Williams" image='Layer 8.png' gender="Female" age="18"></Patient>
            <Patient name="Emily Williams" image='Layer 8.png' gender="Female" age="18"></Patient>
        </div>
    )
}

function TitleCard() {
    return (
        <div style={{ paddingTop:'20px', marginBottom: '30px', display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 'px' }} >
            <div style={{
                paddingLeft: '30px',
                paddingTop: '10px',
                 width: '100px', height: '33px' ,textAlign: 'left',
                font: 'normal normal 800 24px/33px Manrope',
                letterSpacing: '0px',
                color: '#072635',
                opacity: 1 }}>Patients</div>
            <div ><img style={{ paddingTop: '15px', paddingLeft:'30px' }} src='search_FILL0_wght300_GRAD0_opsz24.png'></img></div>
        </div>
    )    
}

function Patient({image, name, gender, age}) {
    return (
        <div style={{  marginTop:'30px', marginBottom:'30px',  height:'48px', display: 'grid', gridTemplateColumns: '2fr 6fr 2fr' }}>
            <div style={{paddingLeft: '20px'}}><img src={image}></img></div>
            <div style={{paddingTop: '10px'}}>
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
                }}>{gender}
                    {age}</div>                
                
            </div>
            <div style={{ paddingTop: '10px', paddingLeft:'30px' }}>
                <img src='more_horiz_FILL0_wght300_GRAD0_opsz24.png'></img>
            </div>
        </div>
    )
}