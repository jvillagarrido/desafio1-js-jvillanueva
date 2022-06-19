
       function calcularValores() {
         const formatNumberES = (n, d=0) => {
          n=new Intl.NumberFormat("es-ES").format(parseFloat(n).toFixed(d))
          if (d>0) {
              // Obtenemos la cantidad de decimales que tiene el numero
              const decimals=n.indexOf(",")>-1 ? n.length-1-n.indexOf(",") : 0;
       
              // añadimos los ceros necesios al numero
              n = (decimals==0) ? n+","+"0".repeat(d) : n+"0".repeat(d-decimals);
          }
          return n;
      }

        let valor = 400000;
        let cantSel = document.getElementById("cantidad").value;
        let colorSel = document.getElementById("color").value;
        resultadoTotal =  valor *  cantSel;
 
        document.getElementById('resultadoTotal').innerHTML =      "Total: $ " +  formatNumberES(resultadoTotal);
        document.getElementById('resultadoCantidad').innerHTML =   "Cantidad: " + formatNumberES(cantSel);
        document.getElementById('circulo').style.backgroundColor =   colorSel;
      }
 