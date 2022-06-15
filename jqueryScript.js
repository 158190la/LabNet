

    const fechaNacimiento= document.getElementById("fechaNacimiento");
    const edad = document.getElementById("edad");
    const inputs = document.querySelectorAll('#formulario input');
    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }
    
    const calcularEdad=(fechaNacimiento)=>{
        const fechaActual = new Date();
        const anoActual = parseInt(fechaActual.getFullYear());
        const mesActual = parseInt(fechaActual.getMonth());
        const diaActual = parseInt(fechaActual.getDate());
        
        const anoNacimiento = parseInt(String(fechaNacimiento.substring(0,4)));
        const mesNacimiento = parseInt(String(fechaNacimiento.substring(5,7)));
        const diaNacimiento = parseInt(String(fechaNacimiento.substring(8,10)));
        let edad = anoActual - anoNacimiento;
        console.log(anoActual)
        console.log(anoNacimiento)
        if(anoActual<anoNacimiento){
            edad=0;
        }else{
        if(mesActual<mesNacimiento){
            edad--;
        }else if(mesActual==mesNacimiento){
            
            if(diaActual<diaNacimiento){
                edad--;
            }
        }
    }
        return edad;
    }

    window.addEventListener('load', function(){
        fechaNacimiento.addEventListener('change', function(){
           if(this.value){
               
                edad.value = calcularEdad(this.value);
                document.getElementById('edad').innerHTML = edad.value
           }
            
        });

    });

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("formulario").addEventListener('submit', validarFormulario); 
      });

      function validarFormulario(evento) {
        evento.preventDefault();
        var usuario = document.getElementById('nombres').value;
        if(usuario.length < 2) {
            document.getElementById('nombres').style.borderColor = 'red';
            alert('El nombre debe tener al menos 2 caracteres');
          return;
        }else{document.getElementById('nombres').style.borderColor = 'green';}

        if(expresiones.nombre.test(usuario)==false){ 
            document.getElementById('nombres').style.borderColor = 'red';
            alert("El nombre no puede contener caracteres especiales o numeros");
           
            return;
        }else{document.getElementById('nombres').style.borderColor = 'green';}
    
        evento.preventDefault();
        var apellido = document.getElementById('apellidos').value;
        if(apellido.length == 0) {
        document.getElementById('apellidos').style.borderColor = 'red'; 
          alert('No has escrito nada en el apellido');
          return;
        }else{document.getElementById('apellidos').style.borderColor = 'green';}

        if(expresiones.nombre.test(apellido)==false){ 
            document.getElementById('apellidos').style.borderColor = 'red';
            alert("El apellido no puede contener caracteres especiales o numeros");
           
            return;
        }else{document.getElementById('apellidos').style.borderColor = 'green';}
    
        evento.preventDefault();
        var usuario = document.getElementById('empresas').value;
        if(usuario.length == 0) {
            document.getElementById('empresas').style.borderColor = 'red';
          alert('No has escrito nada en el empresa');
          return;
        }else{document.getElementById('empresas').style.borderColor = 'green';}

        evento.preventDefault();
        
        if(!document.querySelector('input[name="Sexo"]:checked')) {
            document.getElementById('sexo').style.borderColor = 'red';
          alert('No has seleccionado un sexo');
          return;
        }else{document.getElementById('sexo').style.borderColor = 'green';}
      
        
        evento.preventDefault();
        var fechanac = document.getElementById('fechaNacimiento').value;
        if(fechanac == 0) {            
          alert('No has cargado tu fecha de nacimiento');
          return;
        }else{document.getElementById('fechaNacimiento').style.borderColor = 'green';}
        this.submit();
      }

    //   const validarFormulario = (e) => {
    //       switch (e.target.name){
    //           case "nombres":
    //             if(expresiones.nombre.test(e.target.value)){

    //             }else{
    //                 document.getElementById("nombres").classList.add('.formlario .nombres');
    //             }
    //           break;
    //           case "apellidos":

    //           break;
    //           case "empresas":

    //           break;
    //           case "fechaNacimiento":

    //           break;
    //       }
      
    //     }


    //   inputs.forEach((input) => {
    //     input.addEventListener('keyup', validarFormulario); 
    //     input.addEventListener('blur', validarFormulario); 
    //   });

    
