import { Route, Routes } from 'react-router';
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FooterPage from "./pages/Favorites";
import Layout from './components/layouts/Layout';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<AllMeetupsPage />}  exact/>
                    
                

                <Route path="/new-meetup" element={<NewMeetupPage />} />
                    
                

                <Route path="/favorites" element={<FooterPage />} />
                    
                
            </Routes>
                
            
          </Layout>
    );
}

export default App;
