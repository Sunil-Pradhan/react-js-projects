function Calculator() {
  // JavaScript variables
  const num1 = 15;
  const num2 = 3;
  const userName = "Alice";

  // JavaScript expressions
  const sum = num1 + num2;
  const product = num1 * num2;
  const isEven = num1 % 2 === 0;

  // JavaScript object
  const user = {
    name: "Bob",
    level: "Intermediate"
  };

  // JavaScript array
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="calculator">
      <h1>JavaScript in JSX Examples</h1>

      {/* Using variables */}
      <section>
        <h2>Variable Display</h2>
        <p>Number 1: {num1}</p>
        <p>Number 2: {num2}</p>
        <p>User: {userName}</p>
      </section>

      {/* Using expressions */}
      <section>
        <h2>Mathematical Expressions</h2>
        <p>Sum: {sum}</p>
        <p>Product: {product}</p>
        <p>Division: {num1 / num2}</p>
        <p>Is {num1} even? {isEven ? "Yes" : "No"}</p>
      </section>

      {/* Using object properties */}
      <section>
        <h2>Object Access</h2>
        <p>User Name: {user.name}</p>
        <p>Level: {user.level}</p>
        <p>Full Info: {user.name} - {user.level}</p>
      </section>

      {/* Using array methods */}
      <section>
        <h2>Array Operations</h2>
        <p>Numbers: {numbers.join(", ")}</p>
        <p>Sum of array: {numbers.reduce((a, b) => a + b, 0)}</p>
        <p>Even numbers: {numbers.filter(n => n % 2 === 0).join(", ")}</p>
      </section>

      {/* Conditional rendering */}
      <section>
        <h2>Conditional Display</h2>
        {num1 > 10 && <p>{num1} is greater than 10</p>}
        {num2 < 5 ? <p>{num2} is small</p> : <p>{num2} is large</p>}
      </section>

      {/* Function calls */}
      <section>
        <h2>Function Results</h2>
        <p>Uppercase name: {userName.toUpperCase()}</p>
        <p>Current date: {new Date().toLocaleDateString()}</p>
        <p>Random number: {Math.random()}</p>
      </section>
    </div>
  );
}

export default Calculator;
