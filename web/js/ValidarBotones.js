$(function() {

    var emailreg = /[a-zA-Z0-9._-]+@[a-zA-Z0-9]+.+[a-zA-Z0-9]/;
   
   var datosEstu = false;
    var datosAcudi = false;



    $("#ValidEstu").click( function() {
        $(".error").fadeOut().remove();

        /*       if ($("#TipoSolicitud").val() == "" ) {
         $("#TipoSolicitud").focus().after('<span class="error">Campo Obligatorio</span>');  
         return false; 
         }*/

        /*      if ($("#Nacionalidad").val() == "" ) {
         $("#Nacionalidad").focus().after('<span class="error">Campo Obligatorio</span>');  
         return false;   
         }*/

        if ($("#sLugarNac").val() == "") {
            $("#sLugarNac").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }



        /*     if ($("#TipoIdentificacion").val() == "") {  
         $("#TipoIdentificacion").focus().after('<span class="error">Campo Obligatorio</span>');  
         return false;  
         
         }  */
        if ($("#sLugarExped").val() == "") {
            $("#sLugarExped").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }


        if ($("#sPrimerNombre").val() == "") {
            $("#sPrimerNombre").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }


        if ($("#sPrimerApellido").val() == "") {
            $("#sPrimerApellido").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }



        /* if ($("#Genero").val() == "") {  
         $("#Genero").focus().after('<span class="error">Campo Obligatorio</span>');   
         return false;  
         }*/


        /* if ($("#paisRes").val() == "") {  
         $("#paisRes").focus().after('<span class="error">Campo Obligatorio</span>');   
         return false;  
         }  */

        /* if ($("#CiudadRes").val() == "") {  
         $("#CiudadRes").focus().after('<span class="error">Campo Obligatorio</span>');   
         return false;  
         }     */

        if ($("#sBarrioResidencia").val() == "") {
            $("#sBarrioResidencia").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }



        if ($("#sNumeroLibretaMilitar").val() == "") {
            $("#sNumeroLibretaMilitar").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }


        if ($("#sTelefonoFijo").val() == "") {
            $("#sTelefonoFijo").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }



        if ($("#sEmail").val() == "" || !emailreg.test($("#sEmail").val())) {
            $("#sEmail").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }



        /* if ($("#NivelEduc").val() == "") {  
         $("#NivelEduc").focus().after('<span class="error">Campo Obligatorio</span>');   
         return false;  
         } */

        if ($("#sCiudadNacimiento").val() == "") {
            $("#sCiudadNacimiento").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }



        if ($("#sFechaNacimiento").val() == "") {
            $("#sFechaNacimiento").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }

        if ($("#sFechaNacimiento").val().length > 10) {
            $("#sFechaNacimiento").focus().after('<span class="error">Excede el Tamaño</span>');
            return false;

        }

        if ($("#sFechaNacimiento").val().length < 10) {
            $("#sFechaNacimiento").focus().after('<span class="error">Fecha Incorrecta</span>');
            return false;

        }

        if (calcular() < 0 || calcular() > 80) {
            $("#sFechaNacimiento").focus().after('<span class="error">Fecha Incorrecta</span>');
            return false;

        }


        if ($("#sNumeroIdentificacion").val() == "") {
            $("#sNumeroIdentificacion").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }



        if ($("#sFechaExpedicionEst").val() == "") {
            $("#sFechaExpedicionEst").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }

        if ($("#sFechaExpedicionEst").val().length > 10) {
            $("#sFechaExpedicionEst").focus().after('<span class="error">Excede el Tamaño</span>');
            return false;

        }

        if ($("#sFechaExpedicionEst").val().length < 10) {
            $("#sFechaExpedicionEst").focus().after('<span class="error">Fecha Incorrecta</span>');
            return false;

        }

        if (calcular() < 0 || calcular() > 80) {
            $("#sFechaExpedicionEst").focus().after('<span class="error">Fecha Incorrecta</span>');
            return false;

        }

        if ($("#sSegundoNombre").val() == "") {
            $("#sSegundoNombre").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }


        if ($("#sSegundoApellido").val() == "") {
            $("#sSegundoApellido").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }


        /*if ($("#CategoriaSisben").val() == "") {  
         $("#CategoriaSisben").focus().after('<span class="error">Campo Obligatorio</span>');   
         return false;  
         }   */

        /*if ($("#DepartamentoRes").val() == "") {  
         $("#DepartamentoRes").focus().after('<span class="error">Campo Obligatorio</span>');   
         return false;  
         }*/

        if ($("#sLocalidadResidencia").val() == "") {
            $("#sLocalidadResidencia").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }



        if ($("#sDireccionResidencia").val() == "") {
            $("#sDireccionResidencia").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }



        if ($("#EstadoCivil").val() == "") {
            $("#EstadoCivil").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }

        if ($("#sTelefonoMovil").val() == "") {
            $("#sTelefonoMovil").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }

        if ($("#sTelefonoMovil").val().length > 15) {
            $("#sTelefonoMovil").focus().after('<span class="error">Excede el Tamaño</span>');
            return false;

        }

        /* if ($("#GrupoSanguineo").val() == "") {  
         $("#GrupoSanguineo").focus().after('<span class="error">Campo Obligatorio</span>');   
         return false; 
         
         } */

         datosEstu = true;
        
         if (calcular() >= 18) {
       
        $("#FormularioAcudiente").css("visibility", "hidden");
        $("#FormularioAcudiente").css("height", "2px");
        $("#ValidAcu").click();
        
        $("#enviar").removeAttr('disabled');
         
         
        
        
    }
    else {
        if (calcular() < 18 && calcular() > 0) {
            $("#FormularioAcudiente").css("visibility", "visible");
            $("#FormularioAcudiente").css("height", "100%");
            
            ////////////////////datos acudiente///////////////////////
            
                
    $("#ValidAcu").click ( function() {

        $(".error").fadeOut().remove();

        /*if ($("#TipoIdAcu").val() == "") {  
         $("#TipoIdAcu").focus().after('<span class="error">Campo Obligatorio</span>');   
         return false;  
         }*/

        /*if ($("#sFechaExpedicionAcu").val() == "") {  
         $("#sFechaExpedicionAcu").focus().after('<span class="error">Campo Obligatorio</span>');   
         return false;  
         }*/

        if ($("#sPrimerNombreA").val() == "") {
            $("#sPrimerNombreA").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;
        }

        if ($("#sPrimerApellidoA").val() == "") {
            $("#sPrimerApellidoA").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;
        }

        /*if ($("#PaisResidenciaA").val() == "") {  
         $("#PaisResidenciaA").focus().after('<span class="error">Campo Obligatorio</span>');   
         return false;  
         }*/

        /*if ($("#CiudadA").val() == "") {  
         $("#CiudadA").focus().after('<span class="error">Campo Obligatorio</span>');   
         return false;  
         }*/

        if ($("#sTelefonoFijoA").val() == "") {
            $("#sTelefonoFijoA").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;
        }

        if ($("#sEmailA").val() == "" || !emailreg.test($("#sEmailA").val())) {
            $("#sEmailA").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;
        }

        if ($("#sNumeroIdentificacionA").val() == "") {
            $("#sNumeroIdentificacionA").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;
        }

        /* if ($("#generoA").val() == "") {  
         $("#generoA").focus().after('<span class="error">Campo Obligatorio</span>');   
         return false;  
         }*/

        if ($("#sSegundoNombreA").val() == "") {
            $("#sSegundoNombreA").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;
        }

        if ($("#sSegundoApellidoA").val() == "") {
            $("#sSegundoApellidoA").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;
        }

        /*if ($("#DepartamentoResiAc").val() == "") {  
         $("#DepartamentoResiAc").focus().after('<span class="error">Campo Obligatorio</span>');   
         return false;  
         }*/

        if ($("#sDireccionResidenciaA").val() == "") {
            $("#sDireccionResidenciaA").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;
        }

        if ($("#sTelefonoMovilA").val() == "") {
            $("#sTelefonoMovilA").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;
        }

        ////////informacion adicional/////////

        if (!$("input[name='sTrabajaActual']").is(':checked')) {
            $("#sTrabajaActual").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;
        }



        if ($("#sTiempoContrato").val() == "") {
            $("#sTiempoContrato").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;
        }

        if ($("#sTipoContrato").val() == "") {
            $("#sTipoContrato").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;
        }

        /* if ($("#TipoVivienda").val() == "") {  
         $("#TipoVivienda").focus().after('<span class="error">Campo Obligatorio</span>');   
         return false;  
         }*/

        if (!$("input[name='sVehiculo']").is(':checked')) {
            $("#sVehiculo").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }

        if (!$("input[name='sIngresoArrendamiento']").is(':checked')) {
            $("#sIngresoArrendamiento").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }

        if (!$("input[name='sIngresoPension']").is(':checked')) {
            $("#sIngresoPension").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }

        if (!$("input[name='sOtrosIngresos']").is(':checked')) {
            $("#sOtrosIngresos").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }

        if (!$("input[name='sTargetaCredito']").is(':checked')) {
            $("#sTargetaCredito").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }

        if (!$("input[name='sCreditoActual']").is(':checked')) {
            $("#sCreditoActual").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }

        if ($("#sTipoContrato").val() == "") {
            $("#sTipoContrato").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;
        }

        if (!$("input[name='sEmpleado']").is(':checked')) {
            $("#sEmpleado").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;

        }

        if ($("#sNombreEmp").val() == "") {
            $("#sNombreEmp").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;
        }

        if ($("#sOcupacion").val() == "") {
            $("#sOcupacion").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;
        }

        if ($("#sSalario").val() == "") {
            $("#sSalario").focus().after('<span class="error">Campo Obligatorio</span>');
            return false;
        }

        /* if ($("#ConocimientoEdupol").val() == "") {  
         $("#ConocimientoEdupol").focus().after('<span class="error">Campo Obligatorio</span>');   
         return false;  
         }*/

         datosAcudi = true;

         if (datosEstu == true && datosAcudi == true) {
        $("#enviar").removeAttr('disabled');
        
    }
  

    

    });
    
            
            
            
        }
    }


        


        $(".DatosAcud,sFechaExpedicionAcu").keyup(function() {
            if ($(this).val() != "") {
                $(".error").fadeOut();
                return false;
            }
        });

   
    });

    $(".DatosAlum,#sFechaNacimiento,#sFechaExpedicionEst").keyup(function() {
        if ($(this).val() != "") {
            $(".error").fadeOut();
            return false;
        }
    });






    /////////////////////Datos academicos/////////////////////////////




});

