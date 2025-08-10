import { LaravelPaginator } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}


export const convertToDataTable = <T>(paginator: LaravelPaginator<T>): T[] => {
    const data = paginator?.data || [];

    console.log(paginator)
    console.log(data)

    return data;
}
