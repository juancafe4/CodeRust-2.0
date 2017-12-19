let reverse_recursive = function(head) {
  //  no need to reverse if head is null 
  //  or there is only 1 node.
  if (!head || !head.next) {
    return head;
  }

  let reversed_head = reverse_recursive(
    head.next);
  
  head.next.next = head;
  head.next = null;
  return reversed_head;
};

let print_list = function (head) {
  while (
}
let head1 = {
  data: 7,
  next: {
    data: 14,
    mext: {
      data: 21,
      next: {
        data: 28,
        next: null
      }
    }
  }
}

console.log(reverse_recursive(head1));
