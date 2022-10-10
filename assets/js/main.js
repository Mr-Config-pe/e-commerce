
/* INICIO DEL DomContentLoader */
document.addEventListener("DOMContentLoaded", () => {
  
  
/* ----------INICIO MODO DARK BY IMMER ---------- */

      /* Inicio Variables */
      const themeIcon = document.getElementById("btn-moon-nav")
      const body = document.querySelector("body")
      /* Fin Variables */

      themeIcon.addEventListener("click", () => {
        body.classList.toggle("dark")

        if (themeIcon.classList.contains("bx-moon")){
            themeIcon.classList.replace("bx-moon", "bx-sun")
        } else{
          themeIcon.classList.replace("bx-sun", "bx-moon")
        }

      })
      
/* ----------INICIO MODO DARK BY IMMER ---------- */
  
  
    })
/* FIN DEL DomContentLoader */


/* ---------- INICIO DE LOS PRODUCTOS ----------*/


const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]



 