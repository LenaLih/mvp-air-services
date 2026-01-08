import type {Service} from "../../types/service.ts"
import {ServiceCard} from "../ServiceCard/ServiceCard.tsx"
import s from "./ServiceList.module.css"

type Props = {
    services: Service[]
    selected: Service[]
    onToggle: (service: Service) => void
};
export const ServiceList = ({services, selected, onToggle}: Props) => {
    return (
        <div className={s.listContainer}>
            {services.map(service => (
                <ServiceCard
                    key={service.id}
                    service={service}
                    isSelected={selected.some((s) => s.id === service.id)}
                    onToggle={onToggle}/>
            ))}
        </div>
    )
}