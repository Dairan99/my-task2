import { QueryClientProvider } from "@tanstack/react-query"
import UserList from "./components/userList"
import { queryClient } from "./api/queryClient"
import Counter from "./test/Counter"
import ProductList from "./test/ProductList"
import { ThemeProvider } from "./context/Context"
import MyComponent from "./context/MyComponent"



function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <main>
          <UserList/>
          <ProductList/>
          <Counter/>
          <MyComponent/>
        </main>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
