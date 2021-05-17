import React from 'react';

export const withSuspense = (Component) => {
    return (props) => <React.Suspense fallback={''}>
        <Component {...props}/>
    </React.Suspense>
}

