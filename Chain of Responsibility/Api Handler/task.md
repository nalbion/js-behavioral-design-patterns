Implement a simple API handler

## `GET /api/hello`
- Provide a greeting using the `name` parameter:

  `{ statusCode: 200, body: 'Hello World!' }`

- If `name` parameter is not provided - **throw**:

  `{ status: 400, body: 'name is required' }`

- `POST` request is not supported - **throw**:

  `{ statusCode: 405, body: 'Method Not Allowed' }`

<div class="hint">
  You can use <code>new URL(request.url)</code> to parse the method, pathname etc from the request.
</div>

<div class="hint">
  You can use <code>url.searchParams.get('name')</code> to extract the `name` parameter
</div>

<div class="hint">
  Don't forget to call <code>super.handle(request)</code> to pass the message on to the next handler
if the file is not found
</div>
