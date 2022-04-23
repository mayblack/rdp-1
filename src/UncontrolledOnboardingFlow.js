import React, { useState } from 'react';

export const UncontrolledOnboardingFlow = ({ children }) => {
    // const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex(currentIndex + 1);
    }
    
    const childrenArray = React.Children.toArray(children);
    const currentChild = childrenArray[currentIndex];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext });
    }

    return currentChild;
}
