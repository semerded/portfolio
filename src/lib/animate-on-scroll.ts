import { browser } from '$app/environment';

let observer;

if (browser) {
	observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('ob-show');
				entry.target.classList.remove('ob-hide');
			} else {
				if (entry.target.classList.contains('ob-infinite')) {
					entry.target.classList.remove('ob-show');
					entry.target.classList.add('ob-hide');
				}
			}
		});
	});
}

export const intersectionObserver = observer;
