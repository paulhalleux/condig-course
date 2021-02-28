import React from "react";

export default function Loader({loading}: {loading: boolean}){
    return <div className={(loading ? '' : 'none ') + 'loader'}>
        <div className="lds-roller">
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    </div>
}