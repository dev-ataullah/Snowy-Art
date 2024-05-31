import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Root from '../root/Root';
import AllArtCraftItems from '../pages/AllArtCraftItems/AllArtCraftItems';
import AddCraftItems from '../pages/AddCraftItems/AddCraftItems';
import MyArtCraftList from '../pages/MyArtCraftList/MyArtCraftList';
import ErrorNotFound from '../pages/ErrorNotFound/ErrorNotFound';
import ArtAndCraftDetails from '../pages/ViewDetailsPage/ArtAndCraftDetails';
import PrivetRoute from './PrivetRoute';
import ItemUpdate from '../pages/ItemUpdate/ItemUpdate';
import ArtCraftCategoriesCard from '../pages/ArtCraftCategoriesCard/ArtCraftCategoriesCard';
import About from '../pages/About/About';
import ContactPage from '../pages/Contact/ContactPage';
import Profile from '../pages/Profile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorNotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/all-art-craft-items',
        element: <AllArtCraftItems />,
      },
      {
        path: '/categorie/:id',
        element: <ArtCraftCategoriesCard />,
      },
      {
        path: '/item-details/:id',
        element: (
          <PrivetRoute>
            <ArtAndCraftDetails />
          </PrivetRoute>
        ),
      },
      {
        path: '/add-craft-item',
        element: (
          <PrivetRoute>
            <AddCraftItems />
          </PrivetRoute>
        ),
      },
      {
        path: '/my-art-craft-list',
        element: (
          <PrivetRoute>
            <MyArtCraftList />
          </PrivetRoute>
        ),
      },
      {
        path: '/item-updating/:id',
        element: (
          <PrivetRoute>
            <ItemUpdate />
          </PrivetRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);
export default router;
