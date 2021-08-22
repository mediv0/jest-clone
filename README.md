<div align="center">
	<p align="center">
		<img src="https://i.imgur.com/AvfiGpY.png">
	</p>
  <h1 align="center">tehst - jest clone</h1>
  <p align="center">very simple testing framework inspired by jest</p>
</div>


⚠️ this is not production ready, This is just for learning if you are interested

this is simple testing framework that uses node js worker threads to isolate your tests and run them in a safe environment


## Usage
create your test files with .spec.js extension

## API

#### **`group`**
Groups your tests

#### **`test`**
Run the test



## simple usage

```js
// inside test.spec.js
const sum = (a, b) => {
    return a + b;
}

group("test group", () => {
    const r1 = sum(1, 2);
    test("1 + 2 should be 3", r1).toBe(3); 
});
```

check for return type
```js
// inside test.spec.js
const sum = (a, b) => {
    return a + b;
}

group("test group", () => {
    const r1 = sum(1, 2);
    test("return type should be integer", typeof r1).toBe("number"); 
});
```

## Testing APIs
#### **`toBe`**
check if given values are equal


## Dev
run code with `node cli.js` command

## TODO
- [ ] mock fucntion
- [ ] more api options
