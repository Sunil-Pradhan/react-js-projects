// Default export - can be imported with any name
function Greeting() {
  return <h1>Hello, Welcome to React!</h1>;
}

// Named export - must be imported with the exact name
export function WelcomeMessage() {
  return <p>We're glad to have you here!</p>;
}

export default Greeting;
