class Node {
  constructor(value = null, next = null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor(node) {
    this.head = node

  }

  iterate(callback) {
    let compare = this.head

    while (compare !== null) {
      callback(compare)
      compare = compare.next

    }
    return this.head

  }

  // print each node's value on its own line
  // use your iterate method to be DRY! Don't get caught in the code rain, brrr.
  print() {
    this.iterate((node)=> console.log(node.value))

  }

  // find the node with the target value and return it
  // if not found return null, use your iterate method to be DRY!
  find(target) {
    this.iterate((node) => {
      if (node.value == target) {
        return node
      } 
    })
  }

  // add the node to the start of the list, no nodes should be removed
  addFirst(node) {

  }

  // add node to end of list, no nodes should be removed
  // you may wish to use the iterate method
  addLast(node) {

  }

  // remove the first Node in the list and update head
  // and return the removed node
  removeFirst() {

  }

  // remove the tail node, iterate may be helpful
  // return the node you just removed
  removeLast() {

  }

  // replace the node at the given index with the given node
  replace(idx, node) {

  }

  // insert the node at the given index
  // no existing nodes should be removed or replaced
  insert(idx, node) {

  }

  // remove the node at the given index, and return it
  remove(idx) {

  }
}


if (require.main === module) {
  // add your own tests in here
  // const node1 = new Node()
  // console.log(node1.value)
  // console.log(node1.next)

  // const node2 = new Node("hi", new Node('bye'))
  // console.log(node2.value)
  // console.log(node2.next)

  // const list = new LinkedList(node1)
  // console.log(list.head)

  // const list2 = new LinkedList(node2)
  // console.log(list2.head)


  const testhead = new Node('hi again', new Node('but why?'))
  const list3 = new LinkedList(testhead)
  console.log(list3.find('but why?'))
  
}

module.exports = {
  Node, LinkedList
};
