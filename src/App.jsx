import Fotter from "./Components/Fotter"
import Overview from "./Components/Overview"
import Sidebar from "./Components/Sidebar"
import Table from "./Components/Table"
import Topbar from "./Components/Topbar"
import Transactions from "./Components/Transactions"


function App() {

  return (
    <div className="bg-white-50">
      <Sidebar />

      <div className="border-b border-black-150 sm:pl-64 bg-white-500">
        <Topbar />
      </div>
      
      <div className=" m-5 mb-0 sm:ml-64 grid gap-8">
        <Overview />
        <div className="grid gap-6">
          <Transactions />
          <Table />
        </div>
        <Fotter/>
      </div>

    </div>
  )
}

export default App