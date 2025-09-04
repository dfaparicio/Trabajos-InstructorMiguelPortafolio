import 'dart:math';

class Persona{
  String nombre;
  int edad; 
  
  Persona(this.nombre, this.edad);
}

class Heroe extends Persona{
  String poder;
  int fuerza;
  int resistencia;
  
  Heroe(String nombre, int edad, this.poder, this.fuerza, this.resistencia) : super(nombre, edad);
  
  bool get estaVivo => resistencia > 0;  
  
  
  void atacarOponente(Heroe oponente){
    
    int danio = fuerza;
    
    if (Random().nextDouble() < 0.2){
      danio *= 2;
      print("${nombre} Hizo un golpe CRITICO !!!");
    }
    
    print('$nombre ataca a ${oponente.nombre} causando $danio de daño.');
      oponente.amortizarDanio(danio);
    
  }
  
  void amortizarDanio(int danio){
    
    int resistenciaAntes = resistencia;
    
    resistencia -= danio;
    
    if(resistencia < 0) resistencia = 0;
    
    int danioAmortizado = resistenciaAntes - resistencia;
    
    print('$nombre amortizo $danioAmortizado de daño');
    print('$nombre ahora tiene $resistencia de vida');
    
  }
  
}



void combatirPersonajes(Heroe h1, Heroe h2){
    
    print('\n 🔥🔥🔥 ¡Comienza el combate entre ${h1.nombre} y ${h2.nombre}! 🔥🔥🔥\n');
    
    int turno = 1;
    
    Random random = Random();
    
    while(h1.estaVivo && h2.estaVivo){
      
      print('----- TURNO $turno-----');
      
    if(random.nextBool()){
      h1.atacarOponente(h2);
      if(!h2.estaVivo){
        print('${h2.nombre} HA SIDO DERROTADO!!!!');
        print('¡${h1.nombre} HA GANADO EL COMBATEEEE!!!!');
        break;
      }
    }
      
      else{
      h2.atacarOponente(h1);
      if(!h1.estaVivo){
        print('${h1.nombre} HA SIDO DERROTADO!!!!');
        print('¡${h2.nombre} HA GANADO EL COMBATEEEE!!!!');
        break;
      }
    }
      
      turno++;
      
      print('----------------------------------------------------------');
 
    }
  }







void main(){
  
 var heroe1 = Heroe('Jackie Chan', 50, 'Patada', 30, 100);
  print('El nombre del heroe es: ${heroe1.nombre}, su edad es: ${heroe1.edad}');
  print('Poder: ${heroe1.poder}');
  print('Fuerza: ${heroe1.fuerza}');
  print('Resistencia: ${heroe1.resistencia}');
  
  print('----------------------------------------------------------');
  
  var heroe2 = Heroe('Thor', 25, 'Martillazo', 30, 100);
  print('El nombre del heroe es: ${heroe2.nombre}, su edad es: ${heroe2.edad}');
  print('Poder: ${heroe2.poder}');
  print('Fuerza: ${heroe2.fuerza}');
  print('Resistencia: ${heroe2.resistencia}');
  
  print('----------------------------------------------------------');
 
  heroe1.atacarOponente(heroe2);
  if (!heroe2.estaVivo) return print('\n¡${heroe1.nombre} HA GANADO EL COMBATEEEE!!!!');
  print('----------------------------------------------------------');
  heroe2.atacarOponente(heroe1);
  if (!heroe2.estaVivo) return print('\n¡${heroe1.nombre} HA GANADO EL COMBATEEEE!!!!');
  print('----------------------------------------------------------');
  heroe1.atacarOponente(heroe2);
  if (!heroe2.estaVivo) return print('\n¡${heroe1.nombre} HA GANADO EL COMBATEEEE!!!!');
  print('----------------------------------------------------------');
  heroe2.atacarOponente(heroe1);
  if (!heroe2.estaVivo) return print('\n¡${heroe1.nombre} HA GANADO EL COMBATEEEE!!!!');
  print('----------------------------------------------------------');
  heroe1.atacarOponente(heroe2);
  if (!heroe2.estaVivo) return print('\n¡${heroe1.nombre} HA GANADO EL COMBATEEEE!!!!');
  print('----------------------------------------------------------');
  heroe2.atacarOponente(heroe1);
  if (!heroe2.estaVivo) return print('\n¡${heroe1.nombre} HA GANADO EL COMBATEEEE!!!!');
    print('----------------------------------------------------------');
  heroe1.atacarOponente(heroe2);
  if (!heroe2.estaVivo) return print('\n¡${heroe1.nombre} HA GANADO EL COMBATEEEE!!!!');
  print('----------------------------------------------------------');
  heroe2.atacarOponente(heroe1);
  if (!heroe2.estaVivo) return print('\n¡${heroe1.nombre} HA GANADO EL COMBATEEEE!!!!');
    print('----------------------------------------------------------');
  heroe1.atacarOponente(heroe2);
  if (!heroe2.estaVivo) return print('\n¡${heroe1.nombre} HA GANADO EL COMBATEEEE!!!!');
  print('----------------------------------------------------------');
  heroe2.atacarOponente(heroe1);
  if (!heroe2.estaVivo) return print('\n¡${heroe1.nombre} HA GANADO EL COMBATEEEE!!!!');
    print('----------------------------------------------------------');
  heroe1.atacarOponente(heroe2);
  if (!heroe2.estaVivo) return print('\n¡${heroe1.nombre} HA GANADO EL COMBATEEEE!!!!');
  print('----------------------------------------------------------');
  heroe2.atacarOponente(heroe1);
  if (!heroe2.estaVivo) return print('\n¡${heroe1.nombre} HA GANADO EL COMBATEEEE!!!!');
  
  
  print('----------------------------------------------------------');

  
 combatirPersonajes(heroe1, heroe2);
  
  print('----------------------------------------------------------');
  
  
}