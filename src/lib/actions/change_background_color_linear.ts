// src/lib/actions/scroll-range.ts
export function scrollRange(
	p0: HTMLImageElement,
	params: {
		start: number | string;
		end: number | string;
		property?: string;
		min?: number;
		max?: number;
		valueCSSunit?: string;
	} = {
		start: 0,
		end: 300,
		property: '--scroll-progress',
		min: 0,
		max: 1
	}
) {
	const handleScroll = () => {
		const startPx = parseValue(params.start);
		const endPx = parseValue(params.end);
		const y = window.scrollY;
		let value = 0;

		if (y < startPx) value = params.min ?? 0;
		else if (y > endPx) value = params.max ?? 1;
		else {
			const progress = (y - startPx) / (endPx - startPx);
			const min = params.min ?? 0;
			const max = params.max ?? 1;
			value = min + progress * (max - min);
		}
		document.documentElement.style.setProperty(
			params.property || '--scroll-progress',
			`${value.toString()}${params.valueCSSunit ?? ''}`
		);
	};

	handleScroll();
	window.addEventListener('scroll', handleScroll);

	return {
		destroy() {
			window.removeEventListener('scroll', handleScroll);
		}
	};
}

function parseValue(value: number | string): number {
	if (typeof value === 'number') return value;
	if (value.endsWith('svh')) {
		return (parseFloat(value) / 100) * window.innerHeight;
	}
    else if (value.endsWith('svw')) {
        return (parseFloat(value) / 100) * window.innerWidth;
    }
	return parseFloat(value); // fallback
}
