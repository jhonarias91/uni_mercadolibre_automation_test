# Mercado Libre automate Test

# Test Plan
1. Contexto

Alcance: Evaluar las funcionalidades principales de la plataforma de Mercado Libre enfocadas en la búsqueda y gestión de productos, sin involucrar transacciones financieras.

Objetivos:

Verificar la funcionalidad y precisión de la búsqueda de productos.
Asegurar la experiencia de usuario en la navegación y filtrado de productos.
Confirmar la eficiencia del sistema de gestión de productos en el carrito de compras.
Evaluar la robustez del sistema de creación y administración de cuentas de usuario.
Inspeccionar la efectividad del sistema de seguimiento de pedidos sin realizar compras.
Restricciones:

Exclusión de pruebas que involucren integraciones de pago.
Dependencia de la estabilidad y velocidad de la plataforma durante las pruebas.
Limitación a pruebas de simulación sin transacciones financieras reales.
2. Pruebas Básicas

Escenario 1: Verificación de filtros de categoría y marcas en productos.
Escenario 2: Pruebas de funcionalidad de búsqueda para productos específicos como "Samsung Galaxy S24".
Escenario 3: Verificación de la experiencia de usuario en procesos de autenticación, incluyendo CAPTCHAs.
Escenario 4: Evaluación de la navegación dentro de las categorías de productos y visualización correcta de listados.
Escenario 5: Pruebas de funcionalidad en la adición y gestión de productos en el carrito de compras.
3. Supuestos y Restricciones del Proyecto

Se asume que el entorno de pruebas está adecuadamente aislado del entorno de producción.
Se utilizará Playwright para la automatización total de las pruebas, lo que supone un conocimiento previo en el manejo de esta herramienta por parte del equipo de QA.
4. Partes Interesadas

Roles y Responsabilidades:
Product Owner: Define requisitos y prioridades.
Equipo de QA: Diseña, desarrolla y ejecuta las pruebas automatizadas.
Desarrolladores: Resuelven incidencias basadas en los resultados de las pruebas.
5. Estrategia de Pruebas

Incorporar los Escenarios de Prueba específicos descritos anteriormente en la rutina de pruebas diarias.
Utilizar técnicas de pruebas de regresión para asegurar que nuevas actualizaciones no afecten funcionalidades existentes.
Aprovechar las capacidades de generación de datos de prueba de Playwright para simular diversas condiciones de uso.
6. Monitoreo y Control

Revisiones regulares de los resultados de las pruebas.
Actualizaciones continuas a los stakeholders mediante reportes automáticos y reuniones de seguimiento semanal.
7. Estimación y Priorización

Duración Estimada: 3 días para implementación y validación inicial.
Prioridad Alta: Escenarios relacionados con la funcionalidad de búsqueda y gestión de carrito para garantizar operaciones críticas antes de avanzar con pruebas más detalladas.
8. Riesgos y Manejo

Posibilidad de cambios en la interfaz de usuario que requieran ajustes urgentes en los scripts de pruebas.
Riesgos de desempeño bajo condiciones de carga pesada.
9. Completitud

Se considerará completa la fase de pruebas cuando todos los escenarios clave funcionen sin errores y los reportes de regresión sean satisfactorios.


# **Diseño de casos de pruebas**

**Escenarios de prueba para Mercado Libre:**

1. **Escenario 1: Filtro de categoría de vehículos**
    
    **Descripción**: Verificar que el filtro de categoría funcione correctamente para "Carros Usados".
    
    - **Pasos**:
        1. Navegar a la página de inicio.
        2. Hacer clic en el botón "Categorías".
        3. Seleccionar "Vehículos".
        4. Elegir "Carros Usados Usados".
        5. Validar que el filtro "Usado" esté presente en los resultados.
    - **Automatizable con**: Playwright.
2. **Escenario 2: Filtro de marca para Samsung**
    
    **Descripción**: Verificar que se pueda aplicar el filtro de la marca "Samsung" correctamente en los resultados de búsqueda.
    
    - **Pasos**:
        1. Navegar a la página de inicio.
        2. Buscar el producto "televisor".
        3. Aplicar el filtro de envío "Full te da envío gratis".
        4. Seleccionar el filtro de la marca "Samsung".
        5. Validar que el filtro seleccionado muestre productos de Samsung.
    - **Automatizable con**: Playwright.
3. **Escenario 3: Inicio de sesión con validación de CAPTCHA**
    
    **Descripción**: Verificar que el proceso de inicio de sesión cargue el CAPTCHA y que sea visible.
    
    - **Pasos**:
        1. Navegar a la página de inicio.
        2. Hacer clic en el botón "Ingresa".
        3. Introducir el correo "jhonfredy-arias@hotmail.com".
        4. Verificar la visibilidad del CAPTCHA después de hacer clic en "Continuar".
    - **Automatizable con**: Playwright.
4. **Escenario 4: Validación de búsqueda del producto Samsung Galaxy S24**
    
    **Descripción**: Verificar que la búsqueda del Samsung Galaxy S24 funcione correctamente.
    
    - **Pasos**:
        1. Navegar a la página de inicio.
        2. Ingresar "Samsung S24" en la barra de búsqueda.
        3. Verificar que los resultados incluyan el "Samsung Galaxy S24".
        4. Validar que el nombre del producto en la página del detalle coincida con "Samsung Galaxy S24".
    - **Automatizable con**: Playwright.