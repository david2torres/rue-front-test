# Prueba Técnica - Integración de Productos e Inventario

## Descripción del Problema

Se requiere desarrollar una solución técnica que integre información de productos con su inventario correspondiente. Esto implica procesar dos conjuntos de datos proporcionados (productos e inventario) para calcular y mostrar los resultados en un formato visual utilizando un `DataGrid` de Material-UI (MUI).

### Objetivos:

 1. Aprender a trabajar con datos simulados mediante JSON.

2. Implementar componentes avanzados de MUI para crear una interfaz profesional y funcional.

3. Demostrar el flujo de trabajo completo desde la simulación de una API hasta la presentación de datos procesados en una aplicación React.

4. Aplicar principios de SOLID y Clean Code para mantener un código estructurado, legible y escalable.

5. Utilizar TypeScript para mejorar la calidad del código y reducir errores.

6. Buena práctica de desarrollo: separación de responsabilidades, componentización, uso de hooks, etc.

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
    - **Total Value:** Multiplicar el **Total Quantity** por el `price` del producto.
    - **Promedio Rating:** Promediar los valores de `rating`.

### 4. Creación del DataGrid y Rating

- Los datos procesados deben ser organizados con los siguientes encabezados:
  - `Product Name`: Nombre del producto.
  - `Description`: Descripción del producto.
  - `Total Quantity`: Cantidad total en inventario.
  - `Total Value`: Valor total calculado.
  - `Average Rating`: Promedio del rating.

- Usar la librería de Material-UI para crear un componente que renderice la información en un `DataGrid` y usar el componente `Rating` para mostrar el `Average Rating`.

 - La tabla debe estar estilizada con los siguientes parámetros:
  - El encabezado (header) debe tener el color #F1FBFF, El texto de los encabezados con color #63686D, `font-weight: 600`, y todo con `font-family: Roboto`.
  - Cada una de las filas debe tener el color de texto #37393D, `font-weight: 400``, y usar también `font-family: Roboto`.

---

## Entregables

1. Código funcional con la implementación completa.
2. Instrucciones claras para ejecutar el proyecto.
3. Archivo README con los detalles del problema, solución y pasos para correr el entorno.

---

## Ejecución del Proyecto

### Instalación de Dependencias

1. Clona este repositorio: `git clone <URL-del-repositorio>`
2. Instala las dependencias: `npm install`

### Ejecución

1. Inicia el servidor de desarrollo: `npm run dev`
2. Navega a `http://localhost:5173` para ver el proyecto en tu navegador.

---

## Notas

Si necesitas más información o tienes dudas, no dudes en preguntar.

