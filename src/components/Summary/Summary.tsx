import type {Service} from "../../types/service.ts"
import {Button} from "../Button/Button.tsx"
import s from "./Summary.module.css"

type Props = {
    selected: Service[],
}
export const Summary = ({selected}: Props) => {
    const total = selected.reduce((sum, s) => sum + s.price, 0)

    return (
        <div className={s.summary}>
            <h2>Итого</h2>

            {selected.length === 0 ? (
                <p className={s.empty}>Услуги не выбраны</p>
            ) : (
                <>
                    {selected.map((service) => (
                        <div className={s.row} key={service.id}>
                            <span>{service.title}</span>
                            <span>{service.price} ₽</span>
                        </div>
                    ))}

                    <div className={s.total}>
                        <span>Сумма</span>
                        <span>{total} ₽</span>
                    </div>
                </>
            )}

            <Button
                fullWidth
                disabled={selected.length === 0}
            >
                Оформить заказ
            </Button>
        </div>
    );
}