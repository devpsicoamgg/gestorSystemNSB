function editarUsuario(form) {
  const fila = buscarFila(form.usuarioId);

  // Obtener el rango de la fila completa
  const rangoFila = sheetsUsers.getRange(
    fila,
    2,
    1,
    sheetsUsers.getLastColumn()
  );

  // Obtener los valores actuales en la fila
  const valoresActuales = rangoFila.getValues()[0];
  console.log("Valores actuales antes de la actualización:", valoresActuales);

  // Actualizar los valores con los datos del formulario
  valoresActuales[0] = form.stateUser;
  valoresActuales[1] = form.fechIngre;
  valoresActuales[2] = form.primNomBene;
  valoresActuales[3] = form.segNomBene;
  valoresActuales[4] = form.primApeBene;
  valoresActuales[5] = form.segApeBene;
  valoresActuales[6] = form.tipoDocBene;
  valoresActuales[7] = form.numDocBene;
  valoresActuales[8] = form.fechNacBene;
  valoresActuales[9] = form.dptoNaciBene;
  valoresActuales[10] = form.muniNaciBene;
  valoresActuales[11] = form.sexBene;
  valoresActuales[12] = form.metsSoc;
  valoresActuales[13] = form.primNomAcu;
  valoresActuales[14] = form.segNomAcu;
  valoresActuales[15] = form.primApeAcu;
  valoresActuales[16] = form.segApeAcu;
  valoresActuales[17] = form.tipoDocAcu;
  valoresActuales[18] = form.numDocAcu;
  valoresActuales[19] = form.sexAcu;
  valoresActuales[20] = form.fechNacAcu;
  valoresActuales[21] = form.dptoNaciAcu;
  valoresActuales[22] = form.muniNaciAcu;
  valoresActuales[23] = form.telAcu;
  valoresActuales[24] = form.dirResi;
  valoresActuales[25] = form.unidadDeServicio;
  valoresActuales[26] = form.grupoDeUds;
  valoresActuales[27] = form.fechEgres;
  valoresActuales[28] = form.motivoEgre;
  valoresActuales[29] = form.kindUser;
  valoresActuales[30] = form.codeUDS;
  valoresActuales[31] = form.rhUser;
  valoresActuales[32] = form.epsUser;
  valoresActuales[33] = form.pesoUno;
  valoresActuales[34] = form.pesoDos;
  valoresActuales[35] = form.pesoTres;
  valoresActuales[36] = form.tallaUno;
  valoresActuales[37] = form.tallaDos;
  valoresActuales[38] = form.tallaTres;
  valoresActuales[39] = form.correoAcudiente;
  valoresActuales[40] = form.epsAcudiente;
  valoresActuales[41] = form.primNomMama;
  valoresActuales[42] = form.segNomMama;
  valoresActuales[43] = form.primApeMama;
  valoresActuales[44] = form.segApeMama;
  valoresActuales[45] = form.tipoDocMama;
  valoresActuales[46] = form.numDocMama;
  valoresActuales[47] = form.sexMama;
  valoresActuales[48] = form.fechNacMama;
  valoresActuales[49] = form.dptoNaciMama;
  valoresActuales[50] = form.muniNaciMama;
  valoresActuales[51] = form.epsMama;
  valoresActuales[52] = form.correoMama;
  valoresActuales[53] = form.telefonoMama;
  valoresActuales[54] = form.primNomPapa;
  valoresActuales[55] = form.segNomPapa;
  valoresActuales[56] = form.primApePapa;
  valoresActuales[57] = form.segApePapa;
  valoresActuales[58] = form.tipoDocPapa;
  valoresActuales[59] = form.numDocPapa;
  valoresActuales[60] = form.sexPapa;
  valoresActuales[61] = form.fechNacPapa;
  valoresActuales[62] = form.dptoNaciPapa;
  valoresActuales[63] = form.muniNaciPapa;
  valoresActuales[64] = form.epsPapa;
  valoresActuales[65] = form.correoPapa;
  valoresActuales[66] = form.telefonoPapa;
  valoresActuales[67] = form.sistemaSaludBene;
  valoresActuales[68] = form.ptjSisben;
  valoresActuales[69] = form.fechaPesoUno;
  valoresActuales[70] = form.fechaPesoDos;
  valoresActuales[71] = form.fechaPesoTres;
  valoresActuales[72] = form.perimetroBraquial;
  valoresActuales[73] = form.fechaNovedadPsicosocial;
  valoresActuales[74] = form.novedadPsicoSocial;
  valoresActuales[75] = form.accionesPsicosociales;
  valoresActuales[76] = form.sistemaSaludAcudiente;
  valoresActuales[77] = form.sistemaSaludMama;
  valoresActuales[78] = form.sistemaSaludPapa;
  valoresActuales[79] = form.dirResiMama;
  valoresActuales[80] = form.dirResiPapa;
  valoresActuales[81] = form.acuRelacBene;
  valoresActuales[82] = form.ocupaMama;
  valoresActuales[83] = form.ocupaPapa;
  valoresActuales[84] = form.relacionAcudienteConBeneficiario;
  valoresActuales[85] = form.paisNacimientoBeneficiario;
  valoresActuales[86] = form.paisNacimientoAcu;
  valoresActuales[87] = form.paisNacimientoMama;
  valoresActuales[88] = form.paisNacimientoPapa;
  valoresActuales[89] = form.zonaUbicacionResidencia;
  valoresActuales[90] = form.nombreDeLaZonaResto;
  valoresActuales[91] = form.nombreBarrioResidencia;
  valoresActuales[92] = form.sibenDicotomico;
  valoresActuales[93] = form.jefeGrupoFamiliar;
  valoresActuales[94] = form.geoGrados;
  valoresActuales[95] = form.geoMinutos;
  valoresActuales[96] = form.geoSegundos;
  valoresActuales[97] = form.carnetVacunas;
  valoresActuales[98] = form.numeroVacunas;
  valoresActuales[99] = form.controlCrecimientoYDllo;
  valoresActuales[100] = form.numeroControles;
  valoresActuales[101] = form.estadoPrematurez;
  valoresActuales[102] = form.semanasDeGestacion;
  valoresActuales[103] = form.carnetVacunasAlDia;
  valoresActuales[104] = form.fechaVerificacionCarnetVacunas;
  valoresActuales[105] = form.siDesnutricionCanalizadoAEntidadSalud;
  valoresActuales[106] = form.ftltSiDesnutricion;
  valoresActuales[107] = form.hijoMgdeICBF;
  valoresActuales[108] = form.lactanciaExclusiva;
  valoresActuales[109] = form.siNoLactanciaExclusivaCual;
  valoresActuales[110] = form.lactMaternaExcluMes;
  valoresActuales[111] = form.totalLactMaternaMes;
  valoresActuales[112] = form.geoFecha;
  valoresActuales[113] = form.geoHora;
  valoresActuales[114] = form.recoEtnico;
  valoresActuales[115] = form.puebloIndigena;
  valoresActuales[116] = form.resguardoIndigena;
  valoresActuales[117] = form.territorioDpto;
  valoresActuales[118] = form.territorioMcpio;
  valoresActuales[119] = form.romGitano;
  valoresActuales[120] = form.tieneDiscapacidad;
  valoresActuales[121] = form.entidadDiscapacidad;
  valoresActuales[122] = form.rlcpcdRegistro;
  valoresActuales[123] = form.ayudaDeOtraPersona;
  valoresActuales[124] = form.ayudaTecnica;
  valoresActuales[125] = form.cuentaConLaAyuda;
  valoresActuales[126] = form.requiereRehabilitacion;
  valoresActuales[127] = form.recibeTerapiaRehabilitacion;
  valoresActuales[128] = form.interdiccionSiNo;
  valoresActuales[129] = form.categoriaDiscapacidad;
  valoresActuales[130] = form.nivelDificultadDesempeno;
  valoresActuales[131] = form.descripcionDiscapacidad;
  valoresActuales[132] = form.dxNutriUno;
  valoresActuales[133] = form.dxNutriDos;
  valoresActuales[134] = form.dxNutriTres;
  valoresActuales[135] = form.criterioFocalizacion;
  valoresActuales[136] = form.geoGradosDos;
  valoresActuales[137] = form.geoMinutosDos;
  valoresActuales[138] = form.geoSegundosDos;
  valoresActuales[139] = form.primNomJefe;
  valoresActuales[140] = form.segNomJefe;
  valoresActuales[141] = form.primApeJefe;
  valoresActuales[142] = form.segApeJefe;
  valoresActuales[143] = form.tipoDocJefe;
  valoresActuales[144] = form.numDocJefe;
  valoresActuales[145] = form.fechNacJefe;
  valoresActuales[146] = form.paisNacimientoJefe;
  valoresActuales[147] = form.dptoNaciJefe;
  valoresActuales[148] = form.muniNaciJefe;
  valoresActuales[149] = form.sexJefe;
  valoresActuales[150] = form.telefonoJefe;
  valoresActuales[151] = form.dirResiJefe;
  valoresActuales[152] = form.sistemaSaludJefe;
  valoresActuales[153] = form.epsJefe;
  valoresActuales[154] = form.correoJefe;
  valoresActuales[155] = form.ocupaJefe;
  valoresActuales[156] = form.acuRelacBeneJefe;

  
  // Establecer los nuevos valores en la hoja de cálculo
  rangoFila.setValues([valoresActuales]);
  console.log("Valores actuales despues de la actualización:", valoresActuales);

  return "El usuario ha sido editado exitosamente";
}

function buscarFila(id = form.usuarioId) {
  const ids = sheetsUsers
    .getRange(2, 1, sheetsUsers.getLastRow() - 1, 1)
    .getValues()
    .map((id) => id[0]);
  console.log("ID a buscar:", id);
  console.log("IDs en la hoja:", ids);
  const index = ids.indexOf(Number(id));
  console.log("Índice encontrado:", index);
  const row = index + 2;
  return row;
}
