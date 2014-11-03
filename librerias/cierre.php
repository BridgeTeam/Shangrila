<?php
$informacion["mensajeCierre"]="Cierre del dia";
$informacion["fechaCierre"]="08-08-1988";

$informacion["valoresCierre"][0]["title"]="Total efectivo";
$informacion["valoresCierre"][0]["valor"]=8000;
$informacion["valoresCierre"][0]["imagen"]="moneda";
$informacion["valoresCierre"][1]["title"]="Total tarjeta";
$informacion["valoresCierre"][1]["valor"]=86;
$informacion["valoresCierre"][1]["imagen"]="tarjeta";

$informacion["tablaCierre"][0]["empleado"]="Nombre Emp1";
$informacion["tablaCierre"][0]["cliente"]="Cliente1";
$informacion["tablaCierre"][0]["tratamiento"]="Tratamiento manos";
$informacion["tablaCierre"][0]["precio"]=76.43;
$informacion["tablaCierre"][0]["imagen"]="tarjeta";
$informacion["tablaCierre"][1]["empleado"]="Nombre Emp2";
$informacion["tablaCierre"][1]["cliente"]="Cliente2";
$informacion["tablaCierre"][1]["tratamiento"]="Tratamiento pies";
$informacion["tablaCierre"][1]["precio"]=828.83;
$informacion["tablaCierre"][1]["imagen"]="tarjeta";
$informacion["tablaCierre"][2]["empleado"]="Nombre Emp3";
$informacion["tablaCierre"][2]["cliente"]="Cliente3";
$informacion["tablaCierre"][2]["tratamiento"]="Tratamiento pestanas";
$informacion["tablaCierre"][2]["precio"]=58.00;
$informacion["tablaCierre"][2]["imagen"]="moneda";

echo(json_encode($informacion));

?>