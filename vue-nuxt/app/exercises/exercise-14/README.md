# Ejercicio 14 - Soluciona los errores

## 1. Composable

El composable creaba `count` e `increment`, pero no los retornaba.  
Sin `return`, el componente que usa el composable no puede acceder a esos valores.

## 2. v-for

Usar el índice como `key` puede provocar problemas cuando la lista cambia de orden o elimina elementos.  
Es mejor utilizar un valor único y estable, como el propio `item` en este caso.

## 3. Script y comparación

Se cambia a ref(0) para que el contador sea reactivo y pueda cambiar durante la ejecución. 
También se usa <script setup> para Composition API y === para hacer una comparación estricta.