1. getElementById is only for id and getElementsByClassName is only for class but querySelector is for id , class and element(p,h1,etc) but it select only the first one that matches
querySelectorAll is like querySelector but it can select all that matches
2. by createElement and appendChild
3. when a event happens the parent can also know that the event has happened
4. adding listener all together instead of add them separately and is useful because its more faster 
5. preventDefault() stops browser to act as normally when a event happens
stopPropagation() doesn't let the parent know about the child event that occurred