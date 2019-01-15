import * as React from 'react';

import "./StoriesSection.css";
import StoryBlock from './Story-Block';

class StoriesSection extends React.Component {
    public render() {
        return (
            <div className="landing-stories--container" id="stories">
                <div className="landing-stories--grid">
                    <StoryBlock />
                </div>
            </div>
        );
    }
}

export default StoriesSection;