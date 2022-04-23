import React, { useState } from 'react';

export const UncontrolledOnboardingFlow = ({ children }) => {
    // const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const childrenArray = React.Children.toArray(children);
    const currentChild = childrenArray[currentIndex];

    return (
        <>
            {currentChild}
            <button onClick={() => setCurrentIndex(currentIndex -1)} disabled={currentIndex === 0}>
                Previous
            </button>
            <button onClick={() => setCurrentIndex(currentIndex + 1)} disabled={currentIndex === childrenArray.length - 1}>
                Next
            </button>
        </>
    );
}
