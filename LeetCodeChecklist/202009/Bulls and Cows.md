##### Solution

One loop to check bulls, second loop to check cows

##### Code

```javascript
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bull = 0
    let cow = 0
    secret = secret.split('')
    guess = guess.split('')
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secret[i]) {
            bull++
            guess[i] = '-'
            secret[i] = '+'
            continue
        }
    }
    for (let i = 0; i < guess.length; i++) {
        for (let j = 0; j < secret.length; j++) {
            if (guess[i] === secret[j]) {
                cow++
                guess[i] = '-'
                secret[j] = '+'
                break
            }
        }
    }
    return `${bull}A${cow}B`
};
```

