<script lang="ts">
	import { t } from 'svelte-i18n';
	import Button from '../button.svelte';
</script>

<footer>
	<div class="copyright">
		<p>{$t('footer.copyright')}</p>
		<p>{$t('footer.credits')} <a href="/about-me">Sem Van Broekhoven</a></p>
	</div>
	<div class="contact">
		<Button href="/contact">{$t('footer.email')}</Button>
		<div class="socials">
			<a href="https://github.com/dotsem" aria-label="Github"><i class="fa-brands fa-github"></i></a
			>
			<a href="https://www.linkedin.com/in/sem-van-broekhoven/" aria-label="LinkedIn"
				><i class="fa-brands fa-linkedin"></i></a
			>
			<a href="https://www.instagram.com/sem_van_broekhoven/" aria-label="Instagram"
				><i class="fa-brands fa-instagram"></i></a
			>
			<a href="https://www.facebook.com/profile.php?id=100089528472654" aria-label="Facebook"
				><i class="fa-brands fa-facebook"></i></a
			>
		</div>
	</div>
</footer>

<style>
	footer {
		padding: 48px 2rem;
		width: 100%;
		background-color: var(--nav);
		display: flex;
        flex-wrap: wrap-reverse;
		justify-content: space-evenly;
		align-items: center;

		> div {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
            width: fit-content;

			&.copyright {
				display: flex;
				flex-direction: column;
                text-align: center;

				p {
					padding: 4px 0;
				}

				a {
					transition: color 500ms;
					color: var(--primary);

					&:hover {
						transition: color 500ms;
						color: var(--secondary);
					}
				}
			}

			.socials {
				display: flex;
				gap: 16px;

				> a {
					transition: opacity 500ms;
					height: fit-content;
					font-size: 36px;
					color: var(--text);
					opacity: 1;

					i {
						transition: transform 500ms;
					}
				}

				&:has(a:hover) a:not(:hover) {
					transition: opacity 500ms;
					opacity: 0.5;

					i {
						transform: scale(0.8);

						transition: transform 500ms;
					}
				}

				a:hover {
					transition: transform 500ms;

					transition:
						color 500ms,
						opacity 500ms;
					color: var(--secondary);
					opacity: 1;

					i {
						transition: transform 500ms;
						transform: scale(1.1);
					}
				}
			}
		}
	}
</style>
