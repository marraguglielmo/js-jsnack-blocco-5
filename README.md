# JSnack

### **JSnack 1**

Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.

#### Svolgimento 1

1. creo l'array con 10 oggetti
2. con una funzione ciclo l'array e aggiungo alla somma il peso di ogni zucchina
3. richiamo la funzione in una costante
4. stampo la costante

<hr>

### **JSnack 2**

Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.

#### Svolgimento 2

1. con un ciclo creo 10 oggetti, assegno alle proprietà `peso` e `lunghezza` numeri casuali da 300 a 800 grammi per il peso, da 8 a 30 cm per la lunghezza.
2. creo l'oggetto zucchina
3. creo due array vuoti
4. con una condizione verifico se le zucchine hanno lunghezza maggiore di 15
   - vero--> pusho nell `zucchineLunghe`
   - falso--> pusho nell `zucchineCorte`
5. con una funzione ciclo i due array e aggiungo alla somma il peso di ogni zucchina, come nell esercizio precedente

<hr>

### **JSnack 3**

Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

#### Svolgimento 3

1. con una funzione che accetta la parola come argomento restituisco la parola con i metodi:

- `.split('')` in modo da suddividere la stringa in sottostringhe
- `.reverse()` in modo da capovolgere le sottostringhe
- `.join('')` in modo da concatenare le sottostringhe capovolte

2. assegno ad una costante il risultato della funzione e stampo la costante in pagina
<hr>

### **JSnack 4**

Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

<hr>

### **JSnack 5**

Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
