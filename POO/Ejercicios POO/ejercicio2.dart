class Auto{
  String _marca;
  String _modelo;
  int _ano;
  int _kilometraje;
  String _estado;
  
  
  Auto(this._marca, this._modelo,this._ano,this._kilometraje, this._estado);
  
  
  void mostrarInfo(){
    print("La marca del carro es $_marca, el modelo es $_modelo, el año es $_ano, el kilometraje actual es $_kilometraje, y el estado del auto es $_estado");
  }
  
  void esNuevo (){
    if(_ano >= 2022 && _kilometraje < 20000){
      print("El auto $_marca es NUEVO");
    }
    else{
      print("El auto $_marca no es NUEVO");
    }
  }  
  
  
  set kilometraje(int nuevoKilometraje){
    
    if(nuevoKilometraje > _kilometraje){
      _kilometraje = nuevoKilometraje;
      print("El nuevo kilometraje es $_kilometraje");
    }else{
      print("El kilometraje debe ser mayor que el actual");
    }
  }
  
  
  
  
   void asignarEstado(){
    if(_ano > 2022 && _kilometraje < 30000){
      _estado = "Excelente";
      print("El auto $_marca su estado es $_estado");
    }
    else if(_ano > 2000 && _ano < 2022 && _kilometraje > 30000 && _kilometraje <= 80000){
      _estado = "Bueno";
      print("El auto $_marca su estado es $_estado");
    }
    else if(_ano < 2000 && _kilometraje > 81000){
      _estado = "Regular";
      print("El auto $_marca su estado es $_estado");
    }
  }
  
  
  
  
  
  void verificarAuto(){
    if(_ano > 2022 && _kilometraje < 30000){
      print("El auto $_marca su estado es EXCELENTE");
    }
    else if(_ano > 2000 && _ano < 2022 && _kilometraje > 30000 && _kilometraje <= 80000){
      print("El auto $_marca su estado es BUENO");
    }
    else if(_ano < 2000 && _kilometraje > 81000){
      print("El auto $_marca su estado es REGULAR");
    }
  }
  
  
  
  
}



void main(){
  
  var auto1 = Auto("Honda", "Civic", 2024, 15000,"Nuevo");
  var auto2 = Auto("Toyota", "Supra", 2018, 1000,"Descontinuado");
  var auto3 = Auto("Mazda", "Sedan", 1998, 130000,"Usado");
  
  
  auto1.mostrarInfo();
  auto2.mostrarInfo();
  auto3.mostrarInfo();
  
  
  auto1.esNuevo();
  auto2.esNuevo();
  auto3.esNuevo();
  
  
  auto1.kilometraje = 10000;
  auto2.kilometraje = 50000;
  
  
  auto1.asignarEstado();
  auto2.asignarEstado();
  auto3.asignarEstado();
  
  
  auto1.verificarAuto();
  auto2.verificarAuto();
  auto3.verificarAuto();
   
  
  auto1.mostrarInfo();
  auto2.mostrarInfo();
  auto3.mostrarInfo();

}