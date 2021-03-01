[← volver](../README.md)

# Guía Magnífica Para Traducir Elegantemente

Esta guía es el Santo Grial para traducir. Está en constante evolución, así que debes estar atento.

## Reglas del español

### ¿"Teneis", "tenés"...?

Para mantener un orden, se utilizará el **español neutro**. Principalmente, evitar utilizar palabras específicas de una región para utilzar algo más "global".

Además, cuando se hable en segunda persona, se prefiere congujar los verbos al tú en vez vos y al usted en vez de al vosotros. Por ejemplo: "tener". "Tener" sería traducido a "tienes" en vez de a "tenés" y a "tienen" en vez de a "teneis". La razón detrás de esta decisión es que la 2ª persona singular "vos" solamente es utilizada en el español rioplantense y la 2ª persona plural "vosotros" en el español ibérico.

### USB, USBs o USB's

Para indicar el plural de una sigla en el español, esta **no debe llevar "s"**. De tal modo, la opción correcta del título sería "USB" (ej: "compré varios USB"). [Referencia](https://www.rae.es/espanol-al-dia/plural-de-las-siglas-las-ong-unos-dvd).

### Él/Ella

Dentro de todo, evita utilizar palabras que indiquen un género en específico (por ejemplo, utilizar "personas" en vez de "hombres o mujeres"). Más información sobre ello en [¿Qué es lenguaje incluyente?](https://www.youtube.com/watch?v=sBMTVtVoybg).

## Heading IDs

Los Heading IDs (o los ID de los títulos) deben estar en todos lo títulos de nivel 2 o 3 (osea, todos los que tengan `##` o `###`):

```md
## Getting Started {#getting-started}
```

¡**No** traduzcas estos ID! Son usados para la navegación, y cambiarlos podría romper enlaces! Por ejemplo:

```md
Échale un vistazo a [`thisFunction()`](/feature#this-function) para más información.
```

✅ Correcto:

```md
## Primeros Pasos {#getting-started}
```

❌ Incorrecto:

```md
## Primeros Pasos {#primeros-pasos}
```

## Texto en el código

Todos los bloques de código deben permanecer en inglés, excepto por los comentarios. Algunos textos pueden ser traducidos, ¡pero ten cuidado de que ese texto no rompa el código!

Ejemplo:

```js
// Example
try {
  const product = await updateProjectMutation({ name: "Cool Shoes" })
  setQueryData(product)
} catch (error) {
  alert("Error saving product")
}
```

✅ Correcto:

```js
// Ejemplo
try {
  const product = await updateProductMutation({ name: "Cool Shoes" })
  setQueryData(product)
} catch (error) {
  alert("Error saving product")
}
```

✅ Aceptable:

```js
// Ejemplo
try {
  const product = await updateProductMutation({ name: "Zapatazos" })
  setQueryData(product)
} catch (error) {
  alert("Error al guardar el producto")
}
```

❌ Incorrecto:

```js
// Ejemplo
try {
  const producto = await updateProductoMutation({ name: "Zapatazos" })
  setQueryData(producto)
} catch (error) {
  alert("rror al guardar el producto")
}
```

❌ POR FAVOR, NO:

```js
// Ejemplo
try {
  const producto = await mutacionActualizarProducto({ nombre: "Zapatazos" })
  actualizarDatosDeLaPeticion(product)
} catch (error) {
  alerta("Error al guardar el producto")
}
```

## Enlaces externos

Si hay una referencia externa, como a [MDN] o la [Wikipedia] y existe una versión decente en español, considera enlazar a la versión en español.

[mdn]: https://developer.mozilla.org/en-US/
[wikipedia]: https://en.wikipedia.org/wiki/Main_Page

Ejemplo:

```md
Some elements are [immutable](https://en.wikipedia.org/wiki/Immutable_object).
```

✅ OK:

```md
Algunos elementos son [inmutables](https://es.wikipedia.org/wiki/Objeto_inmutable).
```

Para los enlaces que no tengan un equivalente (Stack Overflow, videos de YouTube, etc.), deja el link en inglés.
