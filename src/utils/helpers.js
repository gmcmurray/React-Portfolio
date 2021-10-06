export function minMaxLength(text) {
    let result = true;
    if(text !== null || ""  ){result=true}
    else if (text === null || ""){result = false}
    return result
}
 
export function validEmail(text) {
    const regex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
     
    return regex.test(text);
}