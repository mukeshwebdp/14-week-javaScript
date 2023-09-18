const students=[
    {
        name: 'Mithun', marks: 95,},
    {
        name: 'Prabir', marks: 75,},
    {
        name: 'Alka', marks: 92,},
    {
        name: 'Shivam', marks: 70,},
    {
        name: 'Farman', marks: 99,},
]
    //check 90 upper marks 
    
    function check(callStudent){
        //sorting name in array
        let sortName= students.filter((sName) =>
        sName.name ===callStudent)
        console.log(sortName)
        // sorting marks in array

        // result= students.filter((sMarks) => sMarks.marks > 90)
        // console.log(result)

        if(students.name === callStudent){
            if(students.marks > 90){
                console.log(`Congratulatoins ${callStudent} ! You have cleared the exam.`)
            }else{
                console.log(`Sorry ! You have not cleared the exam.`)
            }
            return true;
        }
        else{
            console.log(`Invalid User`)
        }
    }
    check('Prabir')