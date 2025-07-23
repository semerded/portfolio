<script lang="ts">
	import Container from '$lib/components/container/container.svelte';
	import MessageForm from '$lib/components/form/MessageForm.svelte';
	import { t } from 'svelte-i18n';
</script>

<Container minHeight="100svh">
	<main id="contact">
		<div id="contact-container">
			<div class="glossy-tile" id="social-container">
				<h2>{$t('social-title')}</h2>
				<img src="/images/contact/me.jpg" alt="me" />
				<div class="socials">
					<a href="https://github.com/dotsem" target="_blank" aria-label="Github"
						><i class="fa-brands fa-github"></i></a
					>
					<a
						href="https://www.linkedin.com/in/sem-van-broekhoven/"
						target="_blank"
						aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a
					>
					<a
						href="https://www.instagram.com/sem_van_broekhoven/"
						target="_blank"
						aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a
					>
					<a
						href="https://www.facebook.com/profile.php?id=100089528472654"
						target="_blank"
						aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a
					>
				</div>
			</div>
			<div class="glossy-tile">
				<h2>{$t('form-title')}</h2>

				<MessageForm />
                <p>{$t('form.info')}</p>
			</div>
		</div>
	</main>
</Container>

<style>
	#contact {
		padding-top: var(--navbar-height);
		display: flex;
		align-items: center;
		justify-content: center;

		#contact-container {
			display: flex;
			width: 100%;
			div {

                h2 {
                    padding: 16px 0;
                }
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
                justify-content: space-between;

				&#social-container {
					img {
						width: 50%;
						border-radius: 50%;
					}

					.socials {
                        padding: 16px 0;
						display: flex;
						flex-direction: row;
                        justify-content: center;

						gap: 2rem;
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
		}
	}

	@media screen and (max-width: 1023px) {
		#contact {
			#contact-container {
				flex-wrap: wrap;
			}
		}
    }

	@media screen and (max-width: 480px) {
		#contact {
			.glossy-tile {
				margin: 16px 0;
				padding: 8px;
			}
		}
	}
</style>
