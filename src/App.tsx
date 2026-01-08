import './App.css'
import {useState} from "react"
import {ServiceList} from "./components/ServiceList/ServiceList.tsx"
import {Summary} from "./components/Summary/Summary.tsx"
import {servicesMock} from "./data/servicesMock.ts"
import type {Service} from "./types/service.ts"

function App() {
    const [selected, setSelected] = useState<Service[]>([])

    const toggleService = (service: Service) => {
        setSelected((prev) =>
            prev.some((s) => s.id === service.id)
                ? prev.filter((s) => s.id !== service.id)
                : [...prev, service]
        );
    };

    return (
        <>
            <div className="container">
                <h1>Дополнительные услуги</h1>
                <div className="layout">
                    <ServiceList services={servicesMock} selected={selected} onToggle={toggleService}/>
                    <Summary selected={selected}/>
                </div>
            </div>
        </>
    )
}

export default App
