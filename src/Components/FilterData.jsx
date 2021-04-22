import { useContext } from "react";
import InputData from "./ContextInputData.jsx";

const FilterData = (props) => {
    const [data, setData] = useContext(InputData);
    
    // Basic and detailed features are obtained from input data
    // They will be used to create dropdown's filters.
    
    let b = {};
    function obtener_caract_bas(sampleElement) {
        Object.keys(sampleElement["caract_bas"]).map((elem) => {
            if (!Object.keys(b).includes(elem)) {
                b[elem] = [];
            }
            if (!b[elem].includes(sampleElement["caract_bas"][elem])) {
                console.log("No incluye: " + elem)
                b[elem].push(sampleElement["caract_bas"][elem]);
            }
        })

    }
    data.map(obtener_caract_bas)

    c = {};
    function obtener_caract_det(sampleElement) {
        Object.keys(sampleElement["caract_det"]).map((elem) => {
            if (!Object.keys(c).includes(elem)) {
                c[elem] = {};
            }
            Object.keys(sampleElement["caract_det"][elem]).map((caract) => {
                if (!Object.keys(c[elem]).includes(caract)) {
                    c[elem][caract] = [];
                }
                if (!c[elem][caract].includes(sampleElement["caract_det"][elem][caract])) {
                    console.log("No incluye: " + elem)
                    c[elem][caract].push(sampleElement["caract_det"][elem][caract]);
                }
            })
        })
    }
}
/*
-POSIBLE SOLUCIÓN:
	- filter brinda dos parámetros: el objeto a filtrar y un objeto que se nombra *this*.
	- El objeto this tiene que tener los filtros esos que le queremos meter.
	- El elemento -1 (el último) será la condición.
	- Los n-1 elementos del array serán las columnas en las que buscar dicha condición.
		- Para esto será necesario establecer switch-cases para formar la condición:
			- switch this.len == 2: return a[this[0]] == this[1]
			- switch this.len == 3: return a[this[0]][this[1]] == this[1]
			- switch this.len == 4: return a[this[0]][this[1]][this[2]] == this[3] //Este creo que no se usa nunca
			- switch this.len == 5: return a[this[0]][this[1]][this[2]][this[3]] == this[4]
			//Recordar que el largo incluye al valor comparado. 
*/
