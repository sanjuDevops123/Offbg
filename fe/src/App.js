import './App.css';
import { useRoutes } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { Suspense, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Toast } from 'primereact/toast';

export let socket;

function App() {

  const actions = useSelector(state =>  state?.user?.actions || []);
  console.log(actions)
  const toast = useRef(null);

  const showSuccess = (value) => {
    toast.current.show({ severity: 'success', summary: value.detail, detail: value.message });
  }

  return (
    <>
      <Toast ref={toast} />
      <Suspense fallback={<div>Loading ...</div>}>
        {
          useRoutes(routes({ actions, showSuccess }))
        }
      </Suspense>
    </>
  )
}

export default App;
