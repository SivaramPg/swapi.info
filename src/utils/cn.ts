import type { ClassArray } from "clsx"
import clsx from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...values: ClassArray): string {
	return twMerge(clsx(values))
}
