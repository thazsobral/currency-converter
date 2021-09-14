import React from "react";
import "./style.css"

export default function CurrencyCard({ name, code, high, value }) {
    return (
        <>
            <div className="card">
                <h3 className="currency-name">{name}</h3>
                <p className="currency-code">{code}</p>
                <p className="currency-value">R$ {parseFloat(high).toFixed(2)}</p>
                <p className="currency-converted">R$ {(value*high).toFixed(2)}</p>
            </div>
        </>
    );
};