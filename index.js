const fs = require('fs');
const randomWords = require('random-words')
// fs.writeFile( file, data, options, callback )

const editions = 200
for (let i = 0; i < editions; i++){

const aName = randomWords(3).join(' ')
const desc = randomWords(200).join(' ')
let imageTitle = i

let data = `{
    "version": "1",
    "name": "${aName}",
    "description": "${desc}",
    "image": "ipfs://QmaCA2KUUKpbjYcC6NuTNqgnx4RYP1DPx7fWUEz1TSUsVB/${imageTitle}.png",
    "attributes": [ null ],
    "properties": {
    "collection": "testColleciton",
    "collectionId": "testColleciton",
    "total_supply": "200",
    "external_url": "This can be cloudinary url",
    "animation_url": null
    },
    "localization": {
    "uri": null,
    "locales": [
    "en"
    ],
    "default": "en"
    }
    }`;

    try {
        fs.writeFileSync(`./jsonfiles/${imageTitle}.json`, data)
    } catch (err){
        console.log(err)
    }
}

console.log('Saved! - App Running')
// console.log(data)

