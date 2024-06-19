import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchPage from './components/SearchPage';


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body />,
    children:[
      {
        path:"/",
        element:<MainContainer />,
      },
      {
        path:"/watch",
        element:<WatchPage />,
      },
      {
        path:"/search",
        element:<SearchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
    {/* <div>
      <Head />
      <RouterProvider router={appRouter}/>
    </div> */}
    <RouterProvider router={appRouter} />
        {/* <div>
          <Head />
          <Body />
        </div>
      </RouterProvider> */}
    </Provider>
  );
}

export default App;
