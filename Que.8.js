
function calculateDate(event){
    let cuurentDate = new Date().getDate();
    let eventDate = new Date(event).getDate();

    return eventDate-cuurentDate;
}
    console.log(calculateDate(`2023-09-25`));