#1 Debouncing
TL;DR: Basically an anti spam feature wherein we trigger the API after a set predefined interval!
Imagine you’re typing in a search box. You don’t want it to search on every keystroke, right? Debouncing waits until you stop typing for a set time (400ms in my case), then fires the search.
majorly seen implmented in Search bars, window resize events.

#2 Throttling
basically the same thing but used in a different scenario
It limits the execution of a function to once every X ms, even if it’s triggered multiple times
Throttling limits how often a function runs. Like, if you scroll like a maniac, it’ll only log “scrolling” every 200ms, not on every pixel.
it's seen in Scroll events, mousemove, API calls on scroll etc

#3 Event Delegation
Instead of adding an event listener to every child element, add just one listener to the parent ,tnen check event.target to figure out which child triggered it.
basically ,I’ll listen to the parent, and figure out which kid did it.
So Instead of adding event listeners to every single button, you add one to their parent. When a button is clicked, the parent hears it and checks who was clicked.
It's seen in Dynamic lists, tables with tons of rows.

#4 Garbage Collection
JS automatically cleans unused memory (variables with no references).
Basically it says I clean up your mess when you’re done with it.
JS automatically removes memory used by variables/objects you don’t need anymore. If nothing references it anymore, the garbage collector sweeps it.


#5 Web Workers
they help offload resource intensive task from the main loop to side threads
So They do the heavy lifting off the main thread, so your UI don’t freeze
