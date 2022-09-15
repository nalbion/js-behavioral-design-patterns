In order to build a chain, we need to add a `setNext(handler)` method to the `Handler` interface.

The `BaseHandler` needs to implement `setNext(handler)` - it should be enough to simply maintain a reference to the next `Handler` in a **private** field.

The `handle(request)` method will also need to forward the request to the next `Handler` in the chain.