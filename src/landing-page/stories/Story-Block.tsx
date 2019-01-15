import * as React from 'react';

const ellipseContainer = {
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between',
    margin: 'auto',
    minWidth: '80px',
    width: '15%',
}

const ellipseStyle = {
    backgroundColor: 'gray',
    borderRadius: '100%',
    height: '14px',
    width: '14px',
}

class StoryBlock extends React.Component {
    public render() {
        return (
            <>
                <img src="assets/images/landing/stories-ambulance.png" />
                <div>
                    TEXT
                </div>

                <div className="landing-stories--grid-carousel">
                    <div style={{...ellipseContainer }}>
                        <div style={ellipseStyle}/>
                        <div style={ellipseStyle}/>
                        <div style={ellipseStyle}/>
                        <div style={ellipseStyle}/>
                    </div>
                </div>
            </>
        );
    }
}

export default StoryBlock;

