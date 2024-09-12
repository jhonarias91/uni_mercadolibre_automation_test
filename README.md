# Mercado Libre automate Test

## **Test Plan**

### **1. Contexto**

- **Alcance**: Probar cuatro escenarios clave en la plataforma de Mercado Libre que no involucren pagos, asegurando que las funcionalidades principales relacionadas con la búsqueda, gestión de productos y procesos de compra sin pago operen correctamente. Los escenarios incluyen la validación de filtros de categoría y marca, así como la funcionalidad del inicio de sesión con CAPTCHA.
    
- **Objetivos**:
    
    - Verificar la funcionalidad del filtro de categoría para "Carros Usados".
    - Validar el filtro de marca para productos de la marca "Samsung".
    - Comprobar la funcionalidad de inicio de sesión con la validación de CAPTCHA.
    - Verificar la funcionalidad del sistema de gestión de productos en el carrito de compras.
- **Restricciones**:
    
    - No se realizarán pruebas relacionadas con pasarelas de pago.
    - Dependencia en la velocidad de carga del sistema.
    - No se realizarán pruebas de compra reales.
- **Pruebas básicas**:
    
    - Funcionalidad del filtro de categoría para "Carros Usados".
    - Aplicación del filtro de marca para productos de la marca "Samsung".
    - Validación de la visibilidad del CAPTCHA en el proceso de inicio de sesión.
    - Verificación del sistema de gestión de productos en el carrito de compras.

### **2. Supuestos y Restricciones del Proyecto**

- Se asume que las integraciones de pago no serán necesarias para estas pruebas.
- Las pruebas serán completamente automatizables utilizando Playwright.
- Restricciones en la capacidad de simular grandes volúmenes de tráfico.

### **3. Partes Interesadas**

- **Roles**:
    - **Product Owner**: Define los requerimientos de negocio no relacionados con pagos.
    - **Equipo de QA**: Responsable de diseñar y ejecutar las pruebas automatizadas.
    - **Desarrollo**: Responsable de corregir los bugs identificados.
- **Responsabilidades**:
    - El equipo de QA automatizará las pruebas utilizando Playwright.
    - El equipo de desarrollo ajustará cualquier fallo basado en los resultados.
    - **Entrenamiento**: Capacitación básica en el uso de herramientas de automatización (Playwright).

### **4. Comunicación**

- **Forma**: Reportes automáticos de ejecución de pruebas enviados por correo.
- **Frecuencia**: Reuniones semanales para revisar el progreso de las pruebas automatizadas.
- **Plantillas**: Reportes automáticos generados por las herramientas de testing.

### **5. Riesgos**

- **Del producto**:
    - Posibles problemas de navegación entre categorías de productos.
    - Problemas de rendimiento en la carga de páginas con muchas imágenes.
- **De pruebas**:
    - Dependencia en la estabilidad del entorno de pruebas.
    - Posibles fallos en la automatización debido a cambios en la interfaz de usuario.

### **6. Enfoque**

- **Niveles de Testing**:
    - **Funcional**: Verificar las funcionalidades de búsqueda, gestión de productos en el carrito y gestión de usuarios.
    - **Automatización**: Todas las pruebas serán automatizables usando Playwright.
- **Tipos de pruebas**:
    - Pruebas funcionales automatizadas de la interfaz de usuario.
    - Pruebas de regresión para validar que las nuevas funcionalidades no afecten las existentes.
- **Técnicas**: Testing automatizado utilizando Playwright.
- **Entregables**: Reporte detallado de las pruebas enviado al correo.
- **Criterios de entrada y salida**:
    - **Entrada**: Ambientes de pruebas configurados, casos de uso definidos.
    - **Salida**: Todos los casos de prueba automatizados ejecutados correctamente.
- **Dependencias**: Estabilidad del ambiente de pruebas.
- **Métricas**: Tasa de éxito de las pruebas automatizadas, tiempo de ejecución.
- **Requerimientos**: Scripts de prueba listos para su ejecución en Playwright.
- **Estrategia**: Testing automatizado incremental con ejecución continua de scripts.

### **7. Contribución en Iteraciones y Releases**

- Las pruebas automatizadas se ejecutarán en cada release, asegurando que las funcionalidades críticas estén operativas antes de pasar a producción.

### **8. Manejo de riesgos**

- La automatización de la mayoría de los escenarios reducirá los riesgos de errores manuales.
- Las pruebas de regresión automatizadas garantizarán que las nuevas funcionalidades no afecten las ya existentes.

### **9. Monitoreo, Control y Completitud**

- Monitoreo continuo de las pruebas.
- Reportes automáticos enviados por correo al equipo de interesados.

### **10. Estimación**

- Se estima que las pruebas automatizadas para estos escenarios se completarán en un plazo de 2 semanas, considerando la configuración inicial y la ejecución de pruebas.

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