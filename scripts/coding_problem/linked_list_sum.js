/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let traversell = (node,arr) => {
        arr.push(node.val);
        if(node.next)
        {
            traversell(node.next,arr)
        }
        return arr;
    }
    let arr1 = traversell(l1,[]);
    let arr2 = traversell(l2,[]);
    
    let sumArray = [];
    let carry=0;
    
    for(var i=0;i<Math.min(arr1.length,arr2.length);i++)
    {
       let ssum =  arr1[i] + arr2[i] + carry;
       let s = ssum > 9 ?  Math.floor(ssum%10) : ssum
       sumArray.push(s)
       carry = ssum > 9 ?  1 : 0
    }
    
    if(arr1.length != arr2.length){
        let array_to_process = arr1.length === Math.max(arr1.length,arr2.length) ? [...arr1] : [...arr2]
        
        array_to_process.splice(0,Math.min(arr1.length,arr2.length));
        
        for(var i=0;i<array_to_process.length;i++)
        {
           let ssum =  array_to_process[i] + carry;
           let s = ssum > 9 ?  Math.floor(ssum%10) : ssum
           sumArray.push(s)
           carry = ssum > 9 ?  1 : 0
        }
    }
    
    if(carry===1){
        sumArray.push(carry)
    } 
    
    let head = sumArray.reverse().reduce((acc, curr) => {
      if (acc == null) {
        acc = new ListNode(curr);

      } else {
        acc = new ListNode(curr, acc);
      }
      return acc;
    }, null);
    
    return head;
};