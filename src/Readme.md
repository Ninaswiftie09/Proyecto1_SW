# Proyecto 1 Calculadora React

Este proyecto es una calculadora sencilla implementada en React, que cumple con los requerimientos de calidad, pruebas y buenas prácticas.

---

## Funcionalidades

- Operaciones básicas: suma, resta, multiplicación, división y módulo.
- Manejo de punto decimal, considerando el límite máximo de 9 caracteres.
- Función "+/-" para cambiar el signo del número en pantalla.
- Límite de caracteres para evitar overflow en el display.
- Manejo de errores (por ejemplo, número muy grande o negativo fuera de rango).
- Implementación de hooks personalizados.
- Componentes React concisos y legibles (menos de 20 líneas cada uno).

---

## Pruebas

- Se implementaron 4 tests no triviales para validar la funcionalidad principal:
  - Mostrar número al hacer clic.
  - Sumar dos números correctamente.
  - Mostrar error cuando el número es negativo fuera de rango.
  - Mostrar error si hay más de 9 caracteres.

Ejecutar pruebas con:

```bash
npm test

## Storybook
    Se implementaron historias para todos los componentes principales (Calculator, Display, Keyboard) que permiten visualizar distintos estados y probar la UI interactivamente.

    Para correr Storybook:

    npm run storybook

## Puntos acumulados (según rúbrica)
    Diseño interesante -->	20
    Tests implementados (4 tests x 5 pts) --->	20
    Historias Storybook (4 historias x 5 pts) --> 20
    Operación división -->	10
    Operación módulo -->	5
    Función "+/-"--> 5
    Uso de hook personalizado --> 5
    Componentes con menos de 20 líneas -->	20

    Total: 115