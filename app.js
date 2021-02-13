//console.log("Any string");

let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

pronoun.forEach(item1 => {
    adj.forEach(item2 => {
        noun.forEach(item3 => {
            let output = item1.concat(item2.concat(item3, ".com"));
            console.log(output);
        })
    });
});

