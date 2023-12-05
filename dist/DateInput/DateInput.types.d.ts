import { InputProps } from "../Input";
export interface DateInputProps extends InputProps {
    date?: Date | string | number | null;
    onChangeDate?: (date: Date | null) => void;
}
