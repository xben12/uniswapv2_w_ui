const  { useEffect, useState, useRef } = require("react") ;
const  ethers =require("ethers");

const init = async () => {
    console.log('####################### lets go!');


    let network = Object.create( {} )



    const url = 'https://eth-sepolia.g.alchemy.com/v2/7PO0tChTBqUkCF9SpnVjScXGdD7Rsgut';

    network.provider = new ethers.providers.JsonRpcProvider(url);
    network.signer = await network.provider.getSigner();
    
    console.log(network.signer)

}

init();