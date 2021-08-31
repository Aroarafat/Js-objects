// console.log(this);
const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDeyArrow: () => {
        console.log(this);
    },
    treatDeyInside: function () {
        const myArrow = () => console.log(this);
        myArrow();
    },
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('here5555', this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}

function add() {
    console.log(this);
}


// QUIZES

// const obj ={a:1, b:7, c:3, length:2};

// console.log(Object.keys(obj).length);


// const obj1= {module: 35, video:2};

// const obj2= {module: 35, video:2};

// console.log(obj1 === obj2);


// const getGirlFriend= (name = "chokina")=>"name"; 
// console.log(getGirlFriend());