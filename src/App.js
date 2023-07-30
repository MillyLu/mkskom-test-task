import './App.scss';
import  Header  from './components/header/Header';
import { Container } from './components/container/Container';
import { Content } from './components/content/Content';
import { SideNav } from './components/sideNav/SideNav';
import { UserContent } from './components/userContent/UserContent';
import { GalleryContent } from './components/galleryContent/galleryContent';


function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Content>
          <SideNav />
          <UserContent />
          <GalleryContent />


        </Content>
      </Container>
      


    </div>
  );
}

export default App;
