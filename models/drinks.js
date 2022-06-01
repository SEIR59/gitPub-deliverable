let drinks = [
    {
      name: "cruddy mary",
      price: 132,
      image: "https://imgur.com/Va5iIw5",
    },
    {
      name: "index on the beach",
      price: 68,
      image: "https://imgur.com/XV2aPa2",
    },
    {
      name: "hack & coke",
      price: 1,
      image: "https://imgur.com/rLOXFRI",
    },
    {
      name: "whiskey-value pair",
      price: 11,
      image: "https://imgur.com/a7rmkoS",
    },
    {
      name: "404 horsemen",
      price: 202,
      image: "https://imgur.com/FLucOLr",
    },
    {
      name: "if stateMint julep",
      price: 2,
      image: "https://imgur.com/yaoK0Dg",
    },
    {
      name: "APIPA",
      price: 43,
      image: "https://imgur.com/qAhA7pi",
    },
    {
      name: "node to joy",
      price: 56,
      image: "https://imgur.com/MbVdwZz",
    },
];


for (let i = 0; i < drinks.length; i++){
  let restName = drinks[i].name.slice(1)
  drinks[i].name = drinks[i].name[0].toUpperCase() + restName
}

module.exports = drinks