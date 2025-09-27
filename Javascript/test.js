const prompts = require('prompts');



async function main() {
    const results = await prompts({
        type: 'text',
        name: 'value',
        message: 'Please enter a value',
    })

    console.log(reverse(results.value));
}

main();


function reverse(value) {
    const valueArr = value.split('');
    return valueArr.reverse().join('');
}

