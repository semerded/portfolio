import { writable } from "svelte/store";

export const offerStep = writable<number>(0);
export const offerChoice = writable<string>('');