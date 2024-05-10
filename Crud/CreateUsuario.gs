function agregarUsuario(form) {
  const id = crearNuevoId();
  const stateUser = form.stateUser;
  const fechIngre = form.fechIngre;
  const primNomBene = form.primNomBene;
  const segNomBene = form.segNomBene;
  const primApeBene = form.primApeBene;
  const segApeBene = form.segApeBene;
  const tipoDocBene = form.tipoDocBene;
  const numDocBene = form.numDocBene;
  const fechNacBene = form.fechNacBene;
  const dptoNaciBene = form.dptoNaciBene;
  const muniNaciBene = form.muniNaciBene;
  const sexBene = form.sexBene;
  const metsSoc = form.metsSoc;
  const primNomAcu = form.primNomAcu;
  const segNomAcu = form.segNomAcu;
  const primApeAcu = form.primApeAcu;
  const segApeAcu = form.segApeAcu;
  const tipoDocAcu = form.tipoDocAcu;
  const numDocAcu = form.numDocAcu;
  const sexAcu = form.sexAcu;
  const fechNacAcu = form.fechNacAcu;
  const dptoNaciAcu = form.dptoNaciAcu;
  const muniNaciAcu = form.muniNaciAcu;
  const telAcu = form.telAcu;
  const dirResi = form.dirResi;
  const unidadDeServicio = form.unidadDeServicio;
  const grupoDeUds = form.grupoDeUds;
  const fechEgres = form.fechEgres;
  const motivoEgre = form.motivoEgre;
  const kindUser = form.kindUser;
  const codeUDS = form.codeUDS;
  const rhUser = form.rhUser;
  const epsUser = form.epsUser;
  const pesoUno = form.pesoUno;
  const pesoDos = form.pesoDos;
  const pesoTres = form.pesoTres;
  const tallaUno = form.tallaUno;
  const tallaDos = form.tallaDos;
  const tallaTres = form.tallaTres;
  const correoAcudiente = form.correoAcudiente;
  const epsAcudiente = form.epsAcudiente;
  const primNomMama = form.primNomMama;
  const segNomMama = form.segNomMama;
  const primApeMama = form.primApeMama;
  const segApeMama = form.segApeMama;
  const tipoDocMama = form.tipoDocMama;
  const numDocMama = form.numDocMama;
  const sexMama = form.sexMama;
  const fechNacMama = form.fechNacMama;
  const dptoNaciMama = form.dptoNaciMama;
  const muniNaciMama = form.muniNaciMama;
  const epsMama = form.epsMama;
  const correoMama = form.correoMama;
  const telefonoMama = form.telefonoMama;
  const primNomPapa = form.primNomPapa;
  const segNomPapa = form.segNomPapa;
  const primApePapa = form.primApePapa;
  const segApePapa = form.segApePapa;
  const tipoDocPapa = form.tipoDocPapa;
  const numDocPapa = form.numDocPapa;
  const sexPapa = form.sexPapa;
  const fechNacPapa = form.fechNacPapa;
  const dptoNaciPapa = form.dptoNaciPapa;
  const muniNaciPapa = form.muniNaciPapa;
  const epsPapa = form.epsPapa;
  const correoPapa = form.correoPapa;
  const telefonoPapa = form.telefonoPapa;
  const sistemaSaludBene = form.sistemaSaludBene;
  const ptjSisben = form.ptjSisben;
  const fechaPesoUno = form.fechaPesoUno;
  const fechaPesoDos = form.fechaPesoDos;
  const fechaPesoTres = form.fechaPesoTres;
  const perimetroBraquial = form.perimetroBraquial;
  const fechaNovedadPsicosocial = form.fechaNovedadPsicosocial;
  const novedadPsicoSocial = form.novedadPsicoSocial;
  const accionesPsicosociales = form.accionesPsicosociales;
  const sistemaSaludAcudiente = form.sistemaSaludAcudiente;
  const sistemaSaludMama = form.sistemaSaludMama;
  const sistemaSaludPapa = form.sistemaSaludPapa;
  const dirResiMama = form.dirResiMama;
  const dirResiPapa = form.dirResiPapa;
  const acuRelacBene = form.acuRelacBene;
  const ocupaMama = form.ocupaMama;
  const ocupaPapa = form.ocupaPapa;
  const relacionAcudienteConBeneficiario =
    form.relacionAcudienteConBeneficiario;
  const paisNacimientoBeneficiario = form.paisNacimientoBeneficiario;
  const paisNacimientoAcu = form.paisNacimientoAcu;
  const paisNacimientoMama = form.paisNacimientoMama;
  const paisNacimientoPapa = form.paisNacimientoPapa;
  const zonaUbicacionResidencia = form.zonaUbicacionResidencia;
  const nombreDeLaZonaResto = form.nombreDeLaZonaResto;
  const nombreBarrioResidencia = form.nombreBarrioResidencia;
  const sibenDicotomico = form.sibenDicotomico;
  const jefeGrupoFamiliar = form.jefeGrupoFamiliar;
  const geoGrados = form.geoGrados;
  const geoMinutos = form.geoMinutos;
  const geoSegundos = form.geoSegundos;
  const carnetVacunas = form.carnetVacunas;
  const numeroVacunas = form.numeroVacunas;
  const controlCrecimientoYDllo = form.controlCrecimientoYDllo;
  const numeroControles = form.numeroControles;
  const estadoPrematurez = form.estadoPrematurez;
  const semanasDeGestacion = form.semanasDeGestacion;
  const carnetVacunasAlDia = form.carnetVacunasAlDia;
  const siDesnutricionCanalizadoAEntidadSalud =
    form.siDesnutricionCanalizadoAEntidadSalud;
  const fechaVerificacionCarnetVacunas = form.fechaVerificacionCarnetVacunas;
  const ftltSiDesnutricion = form.ftltSiDesnutricion;
  const hijoMgdeICBF = form.hijoMgdeICBF;
  const lactanciaExclusiva = form.lactanciaExclusiva;
  const siNoLactanciaExclusivaCual = form.siNoLactanciaExclusivaCual;
  const lactMaternaExcluMes = form.lactMaternaExcluMes;
  const totalLactMaternaMes = form.totalLactMaternaMes;
  const geoFecha = form.geoFecha;
  const geoHora = form.geoHora;
  const recoEtnico = form.recoEtnico;
  const puebloIndigena = form.puebloIndigena;
  const resguardoIndigena = form.resguardoIndigena;
  const territorioDpto = form.territorioDpto;
  const territorioMcpio = form.territorioMcpio;
  const romGitano = form.romGitano;
  const tieneDiscapacidad = form.tieneDiscapacidad;
  const entidadDiscapacidad = form.entidadDiscapacidad;
  const rlcpcdRegistro = form.rlcpcdRegistro;
  const ayudaDeOtraPersona = form.ayudaDeOtraPersona;
  const ayudaTecnica = form.ayudaTecnica;
  const cuentaConLaAyuda = form.cuentaConLaAyuda;
  const requiereRehabilitacion = form.requiereRehabilitacion;
  const recibeTerapiaRehabilitacion = form.recibeTerapiaRehabilitacion;
  const interdiccionSiNo = form.interdiccionSiNo;
  const categoriaDiscapacidad = form.categoriaDiscapacidad;
  const nivelDificultadDesempeno = form.nivelDificultadDesempeno;
  const descripcionDiscapacidad = form.descripcionDiscapacidad;
  const dxNutriUno = form.dxNutriUno;
  const dxNutriDos = form.dxNutriDos;
  const dxNutriTres = form.dxNutriTres;
  const criterioFocalizacion = form.criterioFocalizacion;
  const geoGradosDos = form.geoGradosDos;
  const geoMinutosDos = form.geoMinutosDos;
  const geoSegundosDos = form.geoSegundosDos;
  const primNomJefe = form.primNomJefe;
  const segNomJefe = form.segNomJefe;
  const primApeJefe = form.primApeJefe;
  const segApeJefe = form.segApeJefe;
  const tipoDocJefe = form.tipoDocJefe;
  const numDocJefe = form.numDocJefe;
  const fechNacJefe = form.fechNacJefe;
  const paisNacimientoJefe = form.paisNacimientoJefe;
  const dptoNaciJefe = form.dptoNaciJefe;
  const muniNaciJefe = form.muniNaciJefe;
  const sexJefe = form.sexJefe;
  const telefonoJefe = form.telefonoJefe;
  const dirResiJefe = form.dirResiJefe;
  const sistemaSaludJefe = form.sistemaSaludJefe;
  const epsJefe = form.epsJefe;
  const correoJefe = form.correoJefe;
  const ocupaJefe = form.ocupaJefe;
  const acuRelacBeneJefe = form.acuRelacBeneJefe;


  sheetsUsers.appendRow([
    id,
    stateUser,
    fechIngre,
    primNomBene,
    segNomBene,
    primApeBene,
    segApeBene,
    tipoDocBene,
    numDocBene,
    fechNacBene,
    dptoNaciBene,
    muniNaciBene,
    sexBene,
    metsSoc,
    primNomAcu,
    segNomAcu,
    primApeAcu,
    segApeAcu,
    tipoDocAcu,
    numDocAcu,
    sexAcu,
    fechNacAcu,
    dptoNaciAcu,
    muniNaciAcu,
    telAcu,
    dirResi,
    unidadDeServicio,
    grupoDeUds,
    fechEgres,
    motivoEgre,
    kindUser,
    codeUDS,
    rhUser,
    epsUser,
    pesoUno,
    pesoDos,
    pesoTres,
    tallaUno,
    tallaDos,
    tallaTres,
    correoAcudiente,
    epsAcudiente,
    primNomMama,
    segNomMama,
    primApeMama,
    segApeMama,
    tipoDocMama,
    numDocMama,
    sexMama,
    fechNacMama,
    dptoNaciMama,
    muniNaciMama,
    epsMama,
    correoMama,
    telefonoMama,
    primNomPapa,
    segNomPapa,
    primApePapa,
    segApePapa,
    tipoDocPapa,
    numDocPapa,
    sexPapa,
    fechNacPapa,
    dptoNaciPapa,
    muniNaciPapa,
    epsPapa,
    correoPapa,
    telefonoPapa,
    sistemaSaludBene,
    ptjSisben,
    fechaPesoUno,
    fechaPesoDos,
    fechaPesoTres,
    perimetroBraquial,
    fechaNovedadPsicosocial,
    novedadPsicoSocial,
    accionesPsicosociales,
    sistemaSaludAcudiente,
    sistemaSaludMama,
    sistemaSaludPapa,
    dirResiMama,
    dirResiPapa,
    acuRelacBene,
    ocupaMama,
    ocupaPapa,
    relacionAcudienteConBeneficiario,
    paisNacimientoBeneficiario,
    paisNacimientoAcu,
    paisNacimientoMama,
    paisNacimientoPapa,
    zonaUbicacionResidencia,
    nombreDeLaZonaResto,
    nombreBarrioResidencia,
    sibenDicotomico,
    jefeGrupoFamiliar,
    geoGrados,
    geoMinutos,
    geoSegundos,
    carnetVacunas,
    numeroVacunas,
    controlCrecimientoYDllo,
    numeroControles,
    estadoPrematurez,
    semanasDeGestacion,
    carnetVacunasAlDia,
    fechaVerificacionCarnetVacunas,
    siDesnutricionCanalizadoAEntidadSalud,
    ftltSiDesnutricion,
    hijoMgdeICBF,
    lactanciaExclusiva,
    siNoLactanciaExclusivaCual,
    lactMaternaExcluMes,
    totalLactMaternaMes,
    geoFecha,
    geoHora,
    recoEtnico,
    puebloIndigena,
    resguardoIndigena,
    territorioDpto,
    territorioMcpio,
    romGitano,
    tieneDiscapacidad,
    entidadDiscapacidad,
    rlcpcdRegistro,
    ayudaDeOtraPersona,
    ayudaTecnica,
    cuentaConLaAyuda,
    requiereRehabilitacion,
    recibeTerapiaRehabilitacion,
    interdiccionSiNo,
    categoriaDiscapacidad,
    nivelDificultadDesempeno,
    descripcionDiscapacidad,
    dxNutriUno,
    dxNutriDos,
    dxNutriTres,
    criterioFocalizacion,
    geoGradosDos, 
    geoMinutosDos, 
    geoSegundosDos,
    primNomJefe,
    segNomJefe,
    primApeJefe,
    segApeJefe,
    tipoDocJefe,
    numDocJefe,
    fechNacJefe,
    paisNacimientoJefe,
    dptoNaciJefe,
    muniNaciJefe,
    sexJefe,
    telefonoJefe,
    dirResiJefe,
    sistemaSaludJefe,
    epsJefe,
    correoJefe,
    ocupaJefe,
    acuRelacBeneJefe,
  ]);
  return "Usuario agregado";
}

function crearNuevoId() {
  // Genera un ID aleatorio de 6 cifras
  const nuevoId = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");

  return nuevoId;
}

function test() {
  Logger.log(crearNuevoId());
}
