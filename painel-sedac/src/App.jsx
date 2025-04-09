import GraficoBarra from "./components/GraficoBarra"
import ThemeToggle from "./components/ThemeToggle"
import GraficoDonut from "./components/GraficoDonut"


import './App.css'

export function App() {

  return (
    <>

      <div className="min-h-screen bg-background text-foreground p-6">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <div className="flex justify-center">
          <GraficoDonut />
        </div>
      </div>
    </>
  )
}


