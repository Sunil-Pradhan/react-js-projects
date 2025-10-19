import Calculator from "./components/Calculator"
import Greeting, { WelcomeMessage } from "./components/Greeting"
import ProductCard from "./components/ProductCard"
import TaskList from "./components/TaskList"
import { UserCard, UserStats } from "./components/UserProfile"

function App() {


  return (
    <div className="app">
      {/* Your First Component */}
      <section className="section">
        <Greeting />
        <WelcomeMessage />
      </section>


      {/* Importing/Exporting Components */}
      <section className="section">
        <h2>User Profile</h2>
        <UserCard />
        <UserStats />
      </section>


      {/* Writing Markup with JSX */}
      <section className="section">
        <h2>Product Display</h2>
        <ProductCard />
      </section>

      {/* JavaScript in JSX */}
      <section className="section">
        <Calculator />
      </section>


      {/* Advanced JSX Usage */}
      <section className="section">
        <TaskList />
      </section>


    </div>
  )
}

export default App
