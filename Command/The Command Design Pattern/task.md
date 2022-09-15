The [Command](https://refactoring.guru/design-patterns/command) pattern 
(also described well at [Patterns.dev](https://www.patterns.dev/posts/command-pattern/)) 
turns a request into a request into an object that contains all relevant information about the request.

The command pattern decouples the application from the implementation classes/methods and
may be useful when you are dealing with **instructions which change the systems state**.

Commands can be:

- queued
- delayed/scheduled
- handled as undo/redo actions
- logged for reproduction of bugs

<a href="//www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612?&linkCode=li2&tag=dubbiebee07-20&linkId=c5edec6e46a749a9a2baa30e5b073703&language=en_US&ref_=as_li_ss_il" target="_blank">
  <img src="https://m.media-amazon.com/images/I/51szD9HC9pL._SL160_.jpg">
</a>

In this lesson we use the command pattern to create an SVG. 
We could call the methods of the SVG class directly, but by using the command pattern 
it could be adapted to send the commands to a robot in the physical world.


If you click the **Run** button below, the app will run and print the Hello World response to the console.

Click **Next** to get started building more functionality into the app. 