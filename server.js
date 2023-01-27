const fs = require("fs");

const saveFiles = async (fileName, data) => {
    fs.writeFileSync(
        fileName + '.json',
        data
    );
    console.log("export file", fileName, '.json');
}

const getRandomNumber = () => {
    let data = [30, 20, 10, 9, 8, 7, 6, 5, 3, 2];
    let array = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i]; j++) {
            array.push(i + 1);
        }
    }
    let random_index = Math.floor(Math.random() * 100);
    return array[random_index];

}

async function start() {
    try {
        const dataType = {
            '1': 'space',
            '2': 'star',
            '3': 'grey',
            '4': 'purple',
            '11': 'and',
            '12': 'green',
            '13': 'pink',
            '14': 'brown',
            '21': 'gold',
            '22': 'orange',
            '23': 'earth',
            '24': 'eye',
            '31': 'red',
            '32': 'white',
            '33': 'moon',
            '34': 'cap',
            '41': 'different',
            '42': 'dark',
            '43': 'light',
            '44': 'bubble',
            '111': 'face',
            '112': 'water',
            '113': 'blue',
            '114': 'head',
            '121': 'small',
            '122': 'black',
            '123': 'body',
            '124': 'beautiful',
            '125': 'reflect',
            '131': 'glass',
            '132': 'ice'
        }

        fs.readFile('data.txt', 'utf8', async function (err, data) {
            if (err) {
                console.log(err);
            }

            const contractsDir = "./json/";
            // console.log(data.split('\r\n'));
            const arrayData = data.split('\r\n');

            if (!fs.existsSync(contractsDir)) {
                fs.mkdirSync(contractsDir);
            }

            console.log(arrayData);

            for (let i = 0; i < arrayData.length; i++) {
                const trait_values = arrayData[i].split(',');

                const intelligence = getRandomNumber();
                const power = getRandomNumber();

                const metadata = {
                    "attributes": [
                        {
                            "trait_type": "intelligence",
                            "value": "" + intelligence
                        },
                        {
                            "trait_type": "background",
                            "value": trait_values[0]
                        },
                        {
                            "trait_type": "bot colour",
                            "value": trait_values[1]
                        },
                        {
                            "trait_type": "other special",
                            "value": trait_values[2]
                        },
                        {
                            "trait_type": "power",
                            "value": "" + power
                        }
                    ],
                    "description": "Passive Income Generating NFTs, funds will be invested in yield farming and high frequency trading and profits will be airdropped every month back to NFT holders in Star coins",
                    "name": "YieldBotz #" + (i + 1)
                }

                await saveFiles(
                    contractsDir + (i + 1),
                    JSON.stringify(metadata, undefined, 4)
                );
            }
        });

    }
    catch (err) {
        console.error(err);
    }
}

start();
