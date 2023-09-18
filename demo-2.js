/*
const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 },
    ];
    
    let minProduct = { name: "", price: 0};
    let maxProduct = { name:"", price: Number.MAX_VALUE}
    
    for(let product of products){
        if(product.price > maxProduct.price){
            maxProduct = product;
        }
        if(product.price < minProduct.price){
            minProduct = product;
        }
    }
    console.log(maxProduct)
    */
   /*
    function uniqueCharactersCheck(inputString) {
        const charSet = new Set();
    
        for (const char of inputString) {
            if (charSet.has(char)) {
                console.log("The input string contains duplicates.");
                return false;
            }
            charSet.add(char);
        }
        console.log("The input string contains only unique characters.");
        return true;
    }
    
    uniqueCharactersCheck("mithun")
    // OUTPUT: The input string contains unique characters.
    
    uniqueCharactersCheck("anurag")
    // OUTPUT: The input string contains duplicates.
    */
    function wordCounter(sentence) {
        const wordFrequencyMap = new Map();
    
        const words = sentence.split(/\s+/); // Split the sentence into words using whitespace as separator
    
        for (const word of words) {
            const cleanWord = word.toLowerCase().replace(',', ''); // Remove non-alphanumeric characters and convert to lowercase
    
            if (cleanWord.length > 0) {
                wordFrequencyMap.set(cleanWord, (wordFrequencyMap.get(cleanWord) || 0) + 1);
            }
        }
    
        return wordFrequencyMap;
    }
    
    const sentence = "please please submit your assignment on time, your assignments are important ";
    const result = wordCounter(sentence);
    
    console.log(result);
    
    
    
    