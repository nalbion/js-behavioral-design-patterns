The application needs an error handler that will sit at the root of our chain 
and handle various error scenarios:

- If the chain throws 'Unauthorized', respond with `{ status: 401, body: 'Unauthorized' }`
- If the chain return null, respond with `{ status: 404, body: 'Not Found' }`
- If the chain throws something that contains a `status` field, respond with that error.
- For any other exceptions, respond with `{ status: 500, body: 'Internal Server Error' }`
- Otherwise, return the response from the chain.
