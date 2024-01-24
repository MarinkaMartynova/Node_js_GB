# Install
```bash
$ npm install mandarin_generate_random_password --save
```
## Usage

#### `generate([length])`

Generate one password with the given options. Returns a string.

```javascript
const generate = require('mandarin_generate_random_password');

const password = generate.generateRandomPassword(10);

// 'uEyMTw32v9' Generation of a 10-character password
console.log(password);
```