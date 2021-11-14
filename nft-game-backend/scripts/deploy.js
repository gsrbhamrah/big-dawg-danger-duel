const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyNFTGame');

    const gameContract = await gameContractFactory.deploy(
      ['fish man', 'goblin boy', 'classy fellow'], // character names
      ['https://i.imgur.com/KSqTKFZ.jpg',
      'https://i.imgur.com/2ROSK4v.jpg',
      'https://i.imgur.com/vC4uNpg.jpg'], // character images
      [300, 100, 200], // character hp
      [50, 150, 100], // character violence

      "ENTROPY", // boss name
      "https://i.imgur.com/aZnnc8a.jpg", // boss image
      10000, // boss hp
      25 // boss violence
    );

    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
    
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();