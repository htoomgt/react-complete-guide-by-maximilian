import { Route, Routes } from 'react-router';
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FooterPage from "./pages/Favorites";
import MainNavigation from './components/layouts/MainNavigation';

function App() {
    return (
        <div>
            <MainNavigation />
            <Routes>
                <Route path="/" element={<AllMeetupsPage />}  exact/>
                    
                

                <Route path="/new-meetup" element={<NewMeetupPage />} />
                    
                

                <Route path="/favorites" element={<FooterPage />} />
                    
                
            </Routes>
                
            
        </div>
    );
}

export default App;
