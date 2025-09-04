class Persona{

    String _nombre;
    int _edad;
    String _nacionalidad;

    Persona(this._nombre, this._edad, this._nacionalidad);
  
  
  void saludar(){
    print("Hola $_nombre, tu nacionalidad es $_nacionalidad");

  }
  
  void esMayorDeEdad(){
    if(_edad >= 18){
      print("$_nombre, es mayor de edad");
    }else{
      print("$_nombre, Es menor de edad");
    }
    
  }

}

void main() {
  
  var Persona1 = Persona("Diego Aparicio", 23, "Colombiana");
  var Persona2 = Persona("Fernando Castro", 15, "Brasileña");
  
  Persona1.saludar();
  Persona2.saludar();
  
  
  Persona1.esMayorDeEdad();
  Persona2.esMayorDeEdad();
  
}
