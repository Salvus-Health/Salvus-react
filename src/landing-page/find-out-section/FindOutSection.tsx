import * as React from 'react';

const style = {
    checkAvailTextStyle: {
        fontSize: '3rem',
        fontWeight: 100,
        letterSpacing: '0.03em',
        marginLeft: '10%',
        textAlign: 'left' as 'left'
    },
    heartContainerStyle: {
      marginLeft: '-10%',
      marginTop: '10%',
      position: 'relative' as 'relative',
      zIndex: -1
    },
    heartFadeStyle: {
        // position: 'absolute' as 'absolute',
        // right: '15%',
        // top: '20%'
        // marginLeft: '30%',
        // zIndex: -1
    },
    heartWhiteOverlayStyle: {
        background: 'linear-gradient(91.33deg, #FFFFFF 9.28%, rgba(255, 255, 255, 0) 67.81%)',
        height: '100%',
        position: 'absolute' as 'absolute',
        top: 0,
        width: '100%'
    },
    paneStyle: {
        height: '90vh',
        // marginTop: '15vh',
        position: 'relative' as 'relative',
        width: '100vw'
    }
}



class FindOutSection extends React.Component {
    public render() {
        return(
            <div style={style.paneStyle}>
                <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                    <div>
                        <h1 style={{fontSize: '5rem'}}>Ready to begin?</h1>
                        <h5 style={style.checkAvailTextStyle}>Check availability in<br/> your area</h5>
                        <div>
                            <input />
                            <button>GO</button>
                        </div>
                    </div>
                    <div style={style.heartContainerStyle}>
                        <img src="assets/images/landing/heart-fade.png" style={style.heartFadeStyle}/>
                        <div style={style.heartWhiteOverlayStyle} />
                    </div>
                </div>
            </div>
        );
    }
}

export default FindOutSection;
