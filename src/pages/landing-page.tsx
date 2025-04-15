import { useIsMobile } from '@/app/hooks/use-mobile';
import Iphone15Pro from '@/components/magicui/iphone-15-pro';
import { Ripple } from '@/components/magicui/ripple';
import { Safari } from '@/components/magicui/safari';
import { Link } from 'react-router';

export default function LandingPage() {
	const isMobile = useIsMobile();

	return (
		<main className='relative flex flex-col items-center justify-center w-full h-screen overflow-hidden rounded-lg md:overflow-y-auto dark:bg-zinc-950'>
			<span className='flex items-center self-center gap-2 text-3xl font-medium'>
				<div className='flex items-center justify-center w-10 h-10 rounded-md text-primary-foreground'>
					<img src='/logo.svg' alt='' />
				</div>
				quartz
			</span>
			<p className='z-10 text-4xl font-medium tracking-tighter text-center whitespace-pre-wrap dark:text-white'>
				Дайте волю своим мыслям
			</p>
			<div className='flex gap-4'>
				<Link to='/signup' className='underline underline-offset-4'>
					Попробовать
				</Link>
				<Link to='/login' className='underline underline-offset-4'>
					Войти
				</Link>
			</div>
			<Ripple />
			<div className='absolute md:bottom-[-60%] bottom-[-40%] p-10'>
				{isMobile ? (
					<Iphone15Pro className='size-full' src='/workspace-m.png' />
				) : (
					<Safari
						url='https://quartz-notes.github.io/'
						mode='simple'
						className='size-full'
						imageSrc='/workspace.jpeg'
					/>
				)}
			</div>
		</main>
	);
}
