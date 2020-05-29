//Controller for HashTable DOM manipluation

//
//hash function
const hash = (key, size) => {
  let hashkey = 0;

  for (let i = 0; i < key.length; i++) {
    hashkey = key.charCodeAt(i);
  }

  return hashkey % size;
};

class HashTable {
  constructor() {
    this.size = 20; // # of visual nodes
    this.buckets = Array(this.size); //

    //use maps to iterate over each bucket to
    //handle potential any potential collision
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }

  insert(key, value) {
    let idx = hash(key, this.size);
    this.buckets[idx].set(key, value);
  }

  remove(key) {
    let idx = hash(key, this.size);
    let removedItem = this.buckets[idx].get(key);
    this.buckets[idx].delete(key);

    return removedItem;
  }

  search(key) {
    let idx = hash(key, this.size);
    let searchedItem = this.buckets[idx].get(key);

    return searchedItem;
  }
}

const hashT = new HashTable();

hashT.insert("testing", "result");
hashT.insert("testing", "result");
hashT.insert("test", "another");

//document.getElementById("table").

//function tableCreate() {
//generate table headers
//}

//NEED TO CREATE THE TABLE
//FUNCTION CREATES THE HEADERS
function createTableHead(table) {
  let thead = table.createTHead();
  let row = thead.insertRow();

  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);

    th.appendChild(text);
    row.appendChild(th);
  }
}

function createTable(table, data) {
  //for (let el of Object.entries(hashT)) {
  for (let [key, value] of Object.entries(hashT)) {
    let row = table.insertRow(); //inserts row for each element in data

    let cell = row.insertCell();
    let text = document.createTextNode("text");
    cell.appendChild(text);

    //for(key in elment){

    //use the key value to create the rows (buckets)
    //
    /*console.log(`${key}: ${value}`);
      for (let i = 0; i < value.length; i++) {
        console.log(value[i]);
         */
  }
}

let table = document.getElementById("hashtable");
let data = Object.keys(hashT);
createTable(table, hashT);
createTableHead(table, data);
