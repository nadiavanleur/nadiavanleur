import React from 'react';

const splitString = (string: string, className: string) => string.split(" ").map((node, i) => <span className={className} key={i}>{node}</span>);

export default splitString;