import {AppRootStateType} from "./store";


export const loadState = (key: string) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (startValue: number, maxValue: number) => {
    try {
        localStorage.setItem('startValue', JSON.stringify(startValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
    } catch {
        // ignore write errors
    }
};