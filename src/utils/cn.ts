import clsx, { type ClassArray } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...values: ClassArray): string {
	return twMerge(clsx(values))
}
