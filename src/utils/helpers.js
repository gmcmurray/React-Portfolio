export function minMaxLength(text, minLength, maxLength) {
    let result = true;
    if(text!=null){ result=(text.length>minLength && text.length<maxLength)}
    else{result = false}
    return result
}
 
export function validEmail(text) {
    const regex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
     
    return !regex.test(text);
}