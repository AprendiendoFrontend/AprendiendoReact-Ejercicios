## 01 Ejercicio Props
En este ejercicio importaremos los datos contenidos en un archivo externo en formato `JSON`, los pasaremos como prop a un componente llamado `PokemonList` y mostraremos un listado de pokemons con sus nombres, imágenes y propiedades.

#### Paso 1 - Preparando el componente App
- Crea una carpeta llamada `01.props` y dentro crea un archivo JavaScript llamado `pokemonList.js`.
- Crea otra llamada `data` que contendrá el archivo de datos que utilizaremos en este ejercicio. Copia el archivo `pokemons.json` del repositorio y pégalo en tu proyecto.
- En el archivo `App.js` situado en la raiz importamos el componente `PokemonList` y el archivo de datos json:

```javascript
  import PokemonList from "./01-props/pokemonList";
  import data from "./data/pokemons.json";
```
En este mismo archivo `App.js` es donde indicaremos al componente `App` que queremos que nos renderice el componente `PokemonList` que acabamos de importar pasándole el archivo de datos `pokemons.json`.
De esta forma estamos pasando por una **prop** llamada `pokemons` la variable `data` que contiene el objeto JSON que hemos importado previamente.

```javascript
class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonList pokemons={data} />
      </div>
    );
  }
}
```

#### Paso 2 - Editando el componente PokemonList:
- En este paso editaremos el archivo `pokemonList.js` que hemos creado en el ejercicio anterior y crearemos el componente que se encargará de mostrar tantas tarjetas pokemon con su imagen, nombre y características como nodos disponga el archivo de datos `pokemons.json`.
- Primero importamos React:
```javascript
import React, { Component } from "react"
```
- Creamos una clase llamada `PokemonList` que extienda de Component. Como necesita un método render, de momento haremos que nos renderice un `Hola Mundo!`:

```javascript
export default class PokemonList extends Component {
  render() {
    return (
      <h1>Hola Mundo!</h1>
    )
  }
}
```

