    const user=['Mukesh','Mithun','Rakesh','Manisha']

    function call(check){
        if(user.includes(check)){
            console.log(`Yes, ${check} is a valid user.`)
        }
        else{
            console.log(`No, ${check} is not valid user.`);
        }
    }
    call('Mithun')
    call('Someone')

