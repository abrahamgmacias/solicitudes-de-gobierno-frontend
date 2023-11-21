import Card from "../atoms/Card";
import React from "react";

export default function BookCard(props) {
    const traverseObject = (obj) => {
        return Object.entries(obj).map(([key, value]) => {
          if (typeof value === 'object' && value !== null) {
            // If the value is an object, recursively traverse it
            return (
              <div key={key}>
                <p>{key}:</p>
                <div style={{ marginLeft: '20px' }}>{traverseObject(value)}</div>
              </div>
            );
          } else {
            // If the value is not an object, display the key and value on the same line
            return (
              <p key={key}>
                <span style={{ fontWeight: 'bold' }}>{key}:</span> {value}
              </p>
            );
          }
        });
      };
    
    
    return (
        <Card className="bg-white p-8 rounded shadow-md mx-auto mt-4 max-w-md" render={ () => (
            traverseObject(props.bookData)
        )}/>
    )
}