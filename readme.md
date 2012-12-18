## usage: 

__1.__ Embeb __stacktrace.js__ file before the end of the `head` tag.

```html
<script src="./stacktrace.js"></script>
```
__2.__ Then, you can get an array everywhere whatever(whenever) u wnat. it named `StackTrace`.

```js
alert(StackTrace.join('\n\n'));
```

__3.__ if a `url` is specific, the error will automaticlly sent to the url using a `post` method.

