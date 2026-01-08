import type {Service} from "../../types/service.ts"
import {Button} from "../Button/Button.tsx"
import s from "./ServiceCard.module.css"

type Props = {
    service: Service;
    isSelected: boolean;
    onToggle: (service: Service) => void;
};

export const ServiceCard = ({ service, isSelected, onToggle }: Props) => {
    return (
        <div className={s.card}>
            <div className={s.info}>
                <span className={s.title}>{service.title}</span>
                <span className={s.price}>{service.price} ₽</span>
            </div>

            <Button
                variant={isSelected ? "danger" : "primary"}
                onClick={() => onToggle(service)}
            >
                {isSelected ? "Убрать" : "Добавить"}
            </Button>
        </div>
    );
}
