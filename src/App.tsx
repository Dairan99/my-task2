import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./utils/quertClient"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Header/>
          <main>
            
          </main>
        <Footer/>
    </QueryClientProvider>
  )
}

export default App
