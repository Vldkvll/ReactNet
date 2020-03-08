//
// export const required = (value) => {
//     if (!value){ return undefined
// }
//
//     return "Field is require";
// };
//
// export const maxLengthCreator = (maxLength) => (value) =>
//     { return (value && value.length) > maxLength ? `Must be ${maxLength} characters or less` : undefined
//     // if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
//     //
//     // return undefined;
// };


export const required = value => value ? undefined : 'Required';

export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;