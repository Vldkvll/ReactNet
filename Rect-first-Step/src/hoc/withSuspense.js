import {Suspense} from "react";
import React from "react";

const withSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<div>Loading...</div>}>
                <section>
                    <Component {...props} />
                </section>
            </Suspense>

}};

export default withSuspense;