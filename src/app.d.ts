// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type AlignX = 'left' | 'center' | 'right' | 'space-between' | 'space-around' | 'space-evenly';
	type AlignY = 'top' | 'center' | 'bottom' | 'space-between' | 'space-around' | 'space-evenly';
}

export {};
