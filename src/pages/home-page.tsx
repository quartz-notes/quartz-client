import { AppSidebar } from '@/components/app-sidebar/app-sidebar';
import Editor from '@/components/editor/editor';
import NoteBreadcrumb from '@/components/note-breadcrumb/note-breadcrumb';
import { Separator } from '@/shared/ui/separator';
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/shared/ui/sidebar';

export default function HomePage() {
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	if (!getRefreshToken()) {
	// 		navigate('/login');
	// 	}
	// 	if (!getAccessToken()) {
	// 		updateTokens().then(() => {
	// 			console.log('tokens updated');
	// 		});
	// 	}
	// });

	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className='flex items-center justify-between w-full h-16 gap-2 shrink-0'>
					<div className='flex items-center gap-2 px-4'>
						<SidebarTrigger className='-ml-1' />
						<Separator
							orientation='vertical'
							className='h-4 mr-2'
						/>
						<NoteBreadcrumb />
					</div>
				</header>

				<main>
					<Editor />
				</main>
			</SidebarInset>
		</SidebarProvider>
	);
}
