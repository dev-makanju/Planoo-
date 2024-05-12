export function reduceText(text, num){
    return text.substring(0 , num)
}

export function formatTime(date){
    const new_date = new Date();
    return `${new_date.getFullYear()}-${(new_date.getMonth() + 1).toString().padStart(2, '0')}-${new_date.getDate().toString().padStart(2, '0')}`;
}