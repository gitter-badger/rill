# Context

  A Rill Context encapsulates node's `request` and `response` objects
  into a single object which provides helpful methods for writing
  web applications and APIs.

  A `Context` is created _per_ request, and is provided to middleware
  as the first argument. In an es6 capable environment it is easy to pull
  out parts of the context that you need (as seen in some examples) like so
  `{ req, res, locals }`.

```js
app.use((ctx)=> {
  ctx.req; // is a Rill request.
  ctx.res; // is a Rill response.
  ctx.locals; // a place to store local variables.
});
```

## API

  `Context` specific methods and accessors.

### ctx.req

  A Rill `Request` object.

### ctx.res

  A Rill `Response` object.

### ctx.locals

  An object created during each incomming request that allows passing data between each middleware function.

### ctx.throw(status, [message], [properties])

  Helper method to throw an error with a `.status` property.

```js
this.throw(403);
this.throw(400, 'name required');
```

  For example `this.throw(400, 'name required')` is equivalent to:

```js
const err = new Error('name required');
err.status = 400;
throw err;
```

  You may optionally pass a `properties` object which is merged into the error as-is, useful for decorating machine-friendly errors which are reported to the requester upstream.

```js
this.throw(401, 'access_denied', { user: user });
```

Rill uses [@rill/error](https://github.com/rill-js/error) to create errors.

### ctx.assert(value, status, [msg], [properties])

  Helper method to throw an error similar to `.throw()`
  when `!value`. Similar to node's [assert()](http://nodejs.org/api/assert.html)
  method.

```js
this.assert(this.state.user, 401, 'User not found. Please login!');
```
