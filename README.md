# PolkaBlocks

> Check development build [here](https://polkablocks.onrender.com/)

PolkaBlocks is Scratch for Smart Contracts, designed for the Polkadot Ecosystem :)

It serves as an educational platform that empowers developers to learn and create [ink!](https://use.ink/) smart contracts using a visual, block-based programming interface.

# Overview
PolkaBlocks is a blockchain education platform that focuses on promoting knowledge of ink! smart contracts among new and existing developers. 

By leveraging an intuitive, puzzle-like interface, PolkaBlocks allows users to generate ink! programs by arranging lego-like blocks. This approach simplifies the smart contract development process and makes it accessible to both beginners and experienced developers.

# Key Features
- **Visual Programming Interface:** Users can create smart contracts by arranging blocks that represent various elements of ink! syntax, making the learning process more engaging and less intimidating.
  
- **Customizable Blocks:** Developers can create new blocks or customize existing ones to fit specific programming needs.
  
- **Educational Focus:** PolkaBlocks is designed to cater to learners at all stages, from beginners to advanced developers, providing the necessary tools and blocks to write secure and efficient smart contracts on Polkadot.

# How It Works
PolkaBlocks uses [Blockly](https://developers.google.com/blockly/guides/create-custom-blocks/extensions), an open-source library from Google, to provide a drag-and-drop interface for creating smart contracts. Here’s a high-level overview of how the system works:

- **Puzzle Blocks:** Each puzzle block represents a piece of the ink! programming language, such as a function, variable, or control structure. Users drag these blocks onto the workspace to create a visual representation of their smart contract.
  
- **Block Customization:** Users can define custom blocks or modify existing blocks to better suit the specific needs of their smart contract. This flexibility ensures that PolkaBlocks can grow with the user's increasing proficiency.
  
- **Code Generation:** Once the blocks are arranged, PolkaBlocks converts the visual blocks into ink! code through a code generator. The generator is designed to parse the structure and relationships between blocks, producing syntactically correct and ready-to-deploy ink! smart contracts.
  
- **Execution and Testing:** The generated code can be tested and deployed within the Polkadot ecosystem. Future iterations of PolkaBlocks aim to integrate directly with Polkadot's architecture, allowing users to run and deploy their contracts seamlessly.





# Development
To set up PolkaBlocks locally, follow these steps:

Clone the github repository:

```bash
git clone git@github.com:pacxlab/cairoblocks.git

cd cairoblocks
```

Fetch the `cyn/polkadot-scratch` branch to access PolkaBlocks:

```bash
git fetch --all
```

Switch to the `cyn/polkadot-scratch` branch:

```bash
git checkout cyn/polkadot-scratch
```
Install the dependencies and run the codebase locally:

```bash
# install dependencies
npm i

# run codebase locally
npm start
```


# Roadmap

The current roadmap for PolkaBlocks focuses on the following key milestones:

## Customization of Puzzle Blocks:
- Fully customize the existing puzzle blocks to suit learners at all stages, from beginner to advanced.

- Introduce additional blocks that represent more complex ink! constructs.

## Design and Implement Code Generator:
- Develop and refine the code generator that converts puzzle block configurations into syntactically correct ink! code.
 
- Ensure that the code generator can handle all possible configurations of the puzzle blocks, producing error-free code.

## Integration with Polkadot Architecture:
- Link the generated ink! code with the Polkadot ecosystem, allowing for code execution and testing directly within the platform.

- Explore possibilities for deeper integration, such as connecting to existing parachains or developing a new parachain dedicated to educational purposes.

## Future Expansion:
- If needed, design a specialized parachain that supports the educational initiatives of PolkaBlocks, offering a sandbox environment for learners to experiment with their smart contracts.
  
- Continue to improve the platform based on user feedback, adding features that enhance the learning experience.