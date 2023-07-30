// Migration is similar to changing the schema of a database, whenever you're deploying a blockchain updating the state of the blockchain, need a migration to update the state of the blockchain
// numbers of migration says in which order the migrations need to be run in
// blockchain is essentially like a state 

// artifact is the abstraction of the smart contract so it understands how to put it on the blockchain
const TodoList = artifacts.require("TodoList");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};

// todoList = await TodoList.deployed()

// await keyword is to interact with the website in an asynchronous fashion
// await is saying wait for this finished result then save it into the todoList variable
// todoList is a variable to save the deployed todolist into a variable
