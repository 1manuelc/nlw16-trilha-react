import { Plus } from 'lucide-react';
import Button from '../../../components/button';
import LinkItem from './link-item';
import { ILink } from '../../../interfaces/link';

interface ImportantLinksProps {
	linksData: ILink[];
	openCreateLinkModal: () => void;
}

const ImportantLinks: React.FC<ImportantLinksProps> = ({
	linksData,
	openCreateLinkModal,
}) => {
	return (
		<div className='space-y-6'>
			<h2 className='font-semibold text-xl'>Links importantes</h2>

			<div className='space-y-5'>
				{linksData.length > 0 ? (
					linksData.map((link) => {
						return <LinkItem key={link.id} title={link.title} url={link.url} />;
					})
				) : (
					<p className='text-zinc-500 text-sm'>
						Não há links para mostrar, que tal adicionar o primeiro?
					</p>
				)}
			</div>

			<Button onClick={openCreateLinkModal} variant='secondary' size='full'>
				<Plus className='size-5' />
				Cadastrar novo link
			</Button>
		</div>
	);
};

export default ImportantLinks;
