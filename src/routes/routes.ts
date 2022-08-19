import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../pages';

// Generamos un nuevo tipo personalizado para que el tipo Component pueda recibir un Compoenente Lazy o un compoenente JSX.Element
type JSXComponent = () => JSX.Element;

// Definimos tipos de datos para las rutas
interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

// Implementación de LazyLoad - debemos exportar los componentes por defecto
const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../pages/ProyectosBasicos/Layout/ProyectosBasicosLayout'));


// Definimos las rutas
export const routes: Route[] = [
  {
    path: '/proyectos-basicos/*',
    to: '/proyectos-basicos/',
    Component: LazyLayout,
    name: 'Proyectos Basicos - React',
  },

  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy'
  },

]
