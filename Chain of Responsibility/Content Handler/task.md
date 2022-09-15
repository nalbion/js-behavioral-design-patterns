Let's allow our app to serve some static content.

Implement `ContentHandler.handle(request)` so that it returns a 200 status and the file string in the body. 

<div class="hint">
  You can use <code>new URL(request.url)</code> to parse the method, pathname etc from the request.
</div>

<div class="hint">
  Don't forget to call <code>super.handle(request)</code> to pass the message on to the next handler
if the file is not found
</div>
