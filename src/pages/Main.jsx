import { Header } from '../components/header/Header';
import { Container } from '../components/container/Container';
import { Content } from '../components/content/Content';
import { SideNav } from '../components/sideNav/SideNav';
import { UserContent } from '../components/userContent/UserContent';
import { GalleryContent } from '../components/galleryContent/galleryContent';

export function Main() {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <SideNav />
          <UserContent />
          <GalleryContent />
        </Content>
      </Container>
    </>
  );
}
