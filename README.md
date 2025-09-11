1. Closure Counter

A closure is just a function that “remembers” the variables around it, even after the outer function has finished running.

i made a makeCounter func, which runs once sand sets up the count = 0.

It returns another function (the actual counter).

Every time you click the button, that inner function runs, but it still remembers the same count variable so it keeps incrementing.

That’s why the counter goes 1 --> 2 --> 3… instead of resetting.



2. Async/Await Weather API fetch



1. console.log("Start");   // runs immediately
2. setTimeout(..., 1000);  // scheduled, won’t run yet
3. await fetch(...);       // JS pauses here until weather data comes back
4. console.log("Fetch finished:", data);
5. console.log("End");
6. After ~1s → Timeout callback finally runs

JS Call Stack (runs line by line):
 Start --> Schedule Timeout --> Wait for async event(fetch) --> Fetch completed --> End


meanwhile in the Callback Queue :
 
 --> Timeout finished (after 1s)   

Event Loop:
 First clears call stack
  Then picks Timeout callback from queue
  Runs it at the end


event loop stack was appended and the changes can be viewed in the (console)call stack!