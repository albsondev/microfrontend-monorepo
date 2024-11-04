import { Menu } from '../../../../packages/shared-ui';

export default function Home() {
  return (
    <main>
      <Menu
        items={[
          { label: 'Item 1', onClick: () => alert('Item 1 clicado!') },
          { label: 'Item 2', onClick: () => alert('Item 2 clicado!') },
        ]}
      />
    </main>
  );
}
