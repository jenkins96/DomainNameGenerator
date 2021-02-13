
// Variables Declaration
let pronoun = ["the", "our", "you", "they", "it"];
let adj = ["great", "big", "pretty", "awesome", "conservative"];
let noun = ["jogger", "racoon", "mountain", "music", "ships"];
let domain = [".be", ".es", ".org", ".int", ".tel", ".tv", ".travel", ".biz"]

// Using forEach();
pronoun.forEach(item1 => {
    adj.forEach(item2 => {
        noun.forEach(item3 => {
            domain.forEach(item4 => {
                let output = item1.concat(item2.concat(item3.concat(item4)));
                console.log(output);
            });
            
        });
    });
});

