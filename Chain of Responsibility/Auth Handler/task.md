Some of the APIs should only be accessible to authorized users.

Implement `handle(request)` so that it throws `Unauthorized` if unauthorized users
attempt to access `/api` endpoints other than those listed below.

## POST /api/auth/login
Returns `{ status: 200, body: 'OK' }`

## POST /api/auth/sign-up
Returns `{ status: 200, body: 'OK' }`



