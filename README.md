# Prueba Técnica - Integración de Productos e Inventario

## Descripción del Problema

Se requiere desarrollar una solución técnica que integre información de productos con su inventario correspondiente. Esto implica procesar dos conjuntos de datos proporcionados (productos e inventario) para calcular y mostrar los resultados en un formato visual utilizando un `DataGrid` de Material-UI (MUI).

### Objetivos:

1. Implementar componentes avanzados de MUI para crear una interfaz profesional y funcional.

2. Demostrar el flujo de trabajo completo desde la simulación de una API hasta la presentación de datos procesados en una aplicación React.

3. Aplicar principios de SOLID y Clean Code para mantener un código estructurado, legible y escalable.

4. Utilizar TypeScript para mejorar la calidad del código y reducir errores.

5. Buena práctica de desarrollo: separación de responsabilidades, componentización, uso de hooks, etc.

---

## Pasos para la Implementación

### 1. Simulación de una API Interna

- Crear una API interna que consuma datos desde dos archivos JSON separados ubicados en `src/database`.
- Cada archivo JSON representará una fuente de datos distinta y deberá ser leído mediante funciones específicas que simulen una llamada a una API externa.
- La respuesta de estas funciones tendrá una demora de 1.5 segundos para simular el tiempo de espera de una solicitud real.

### 2. Componente de Carga (Progress)

- Durante el tiempo de carga de los datos desde la API interna, se mostrará un componente `Circular Progress` de Material-UI para informar al usuario que los datos están siendo cargados.

### 3. Procesamiento de Datos

- **Agrupación de inventario por producto:**
  - Filtrar los registros del inventario para cada `product_id`.
  - Calcular:
    - **Total Quantity:** Sumar los valores de `quantity`.
    - **Total Price:** Multiplicar el **Total Quantity** por el `price` del producto.
    - **Average Rating:** Promediar los valores de `rating`.

### 4. Creación del DataGrid y Rating

- Los datos procesados deben ser organizados con los siguientes encabezados antes de ser mostrados en un `DataGrid`:
  - `ProductName`: Nombre del producto.
  - `Description`: Descripción del producto.
  - `Price`: Precio del producto.
  - `TotalQuantity`: Cantidad total en inventario.
  - `TotalPrice`: Valor total calculado.
  - `AverageRating`: Promedio del rating.

- Usar la librería de Material-UI para crear un componente que renderice la información en un `DataGrid` y usar el componente `Rating` para mostrar el `Average Rating`.

 - La tabla debe estar estilizada con los siguientes parámetros:
  - El encabezado (header) debe tener el color #F1FBFF, El texto de los encabezados con color #63686D, `font-weight: 600`, y todo con `font-family: Roboto`.
  - Cada una de las filas debe tener el color de texto #37393D, `font-weight: 400``, y usar también `font-family: Roboto`.

---

## Ejecución del Proyecto

### Instalación de Dependencias

1. Clona este repositorio: `git clone https://github.com/Ruedata/rue-front-test.git`
2. Instala las dependencias: `npm install`

### Ejecución

1. Inicia el servidor de desarrollo: `npm run dev`
2. Navega a `http://localhost:5173` para ver el proyecto en tu navegador.

---

## Notas

Si necesitas más información o tienes dudas, no dudes en preguntar.

# Solucion David Yomayusa
Dentro de la solucion inicial se agregaron unos ajustes adicionales:
- main.tsx: Se agrega Inventory como punto de partida de la aplicacion, por lo que se llama en el StrincMode para que la aplicacion arranque en ese punto
- Se separa e independizan interfaces para tenerlas centralizadas y escalables en el folder types
- En el componente de partida Inventory, se segrega la responsabilidad un poco mas, separando la logica del procesamiento de datos frente al llamado y render haciendo la funcion mas escalable y mantenible. Se mantiene el principio de del promise.All para garantizar la carga de la informacion que necesitamos en su totalidad para procesar la data. Una vez este el render completo del aplicativo  y la data cargada se realizan los llamados correspondientes y el renderizado de la vista.
- ProcessData.ts es el service centralizado encargado de procesar la informacion. A modo de mantener el principio de responsabilidad Unica y manejar funciones puras, los reducer se dejan independientes con su proceso unico y se llaman una vez el processProduct os requiera.
- Api.ts mantiene su principio de simulacion de llamados y usamos typeof a modo de mantener la simplicidad  y heredar la estructura ya existente de loss archivos .json
- Loader sigue siendo un componente centralizado con su respectivo return.
- el dataGrid usa la interface creada en ProcessedData para trabajar con la data ya ajustada. Se pinta la tabla de acuerdo a la libreria dada y se usa valueFormatter para dar formato a los campos de valores, los estilos implementados corresponden directamente a ayudas visuales encontradas que implementan el mismo componente.