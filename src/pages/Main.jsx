import { Header } from '../components/header/Header';
import { Container } from '../components/container/Container';
import { Content } from '../components/content/Content';
import { SideNav } from '../components/sideNav/SideNav';
import { UserContent } from '../components/userContent/UserContent';
import { GalleryContent } from '../components/galleryContent/galleryContent';
import { useState } from 'react';

export function Main() {
  const [album, setAlbum] = useState(1);

  return (
    <>
      <Container>
        <Header setAlbum={setAlbum} />
        <Content>
          <SideNav />
          <UserContent />
          <GalleryContent album={album} />
        </Content>
      </Container>
    </>
  );
}
