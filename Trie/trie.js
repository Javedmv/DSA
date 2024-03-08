class Node{
    constructor(){
        this.children = {};
        this.isWordEnd = false;
    }
}
class Trie{
    constructor(){
        this.root = new Node();
    }
    insert(word){
        let currentNode = this.root;
        for(let i = 0 ;i < word.length ; i++){
            let charToInsert = word[i];
            if(!(charToInsert in currentNode.children)){
                currentNode.children[charToInsert] = new Node();
            }
            currentNode = currentNode.children[charToInsert];
        }
        currentNode.isWordEnd = true;
    }
    contains(word){
        let currentNode = this.root;
        for(let i = 0 ;i < word.length ;i++){
            let charToFind = word[i];
            if(!(charToFind in currentNode.children)){
                return false;
            }
            currentNode = currentNode.children[charToFind];
        }
        return currentNode.isWordEnd;
    }
    startsWithPrefix(prefix){
        let currentNode = this.root;
        for(let i = 0;i < prefix.length; i++){
            let charToFind = prefix[i];
            if(!(charToFind in currentNode.children)){
                return false;
            }
            currentNode = currentNode.children[charToFind];
        }
        return true;
    }
}
const trie = new Trie();

trie.insert("athul");

trie.insert("athulya");

console.log(trie.contains("athul"));

console.log(trie.startsWithPrefix("ath"));