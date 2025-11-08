import { Header } from "./components/opalp-calc-ui/header";
import { InputCard } from "./components/opalp-calc-ui/input-card";
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const handleCalculate = (data: {
    balance: number;
    startDate: Date;
    endDate: Date;
  }) => {
    console.log("Received data:", data);
  };

  return (
    <div className="min-h-screen space-y-4 bg-background-light text-[#1b1718] dark:bg-background-dark dark:text-white transition-colors duration-300">
      <Header />

      <main className="flex justify-center items-center px-4">
        <InputCard onCalculate={handleCalculate} />
      </main>
      
      <ToastContainer />
    </div>
  );
}

export default App;
