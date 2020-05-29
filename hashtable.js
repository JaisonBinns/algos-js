//
// Data/Algo 1: Hashtable function
//
// Logic file
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

const hashTable = new HashTable();

hashTable.insert("test", "result");
hashTable.insert("MonsterEnergy", "Delicious");
hashTable.insert("Samsung", "TV");

console.log(hashTable.search("test"));

export default hashTable;
