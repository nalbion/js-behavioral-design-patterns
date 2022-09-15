The core of the chain of responsibility pattern is the `Handler`.

Create a `Handler` interface with an abstract `handle` method 
which takes a `Request` object and returns a `Response`.

<div class="hint">
<pre>
class Handler {
  method(param);
}
</pre>
</div>
