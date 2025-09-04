void main() {

print("Ingrese el primer número:");
int num1 = int.parse(stdin.readLineSync()!);

print("Ingrese el segundo número:");
int num2 = int.parse(stdin.readLineSync()!);

print("Seleccione una operación (+, -, *, /):");
String operacion = stdin.readLineSync()!;

double resultado;
if (operacion == '+') {
resultado = num1 + num2;
} else if (operacion == '-') {
resultado = num1 - num2;
} else if (operacion == '*') {
resultado = num1 * num2;
} else if (operacion == '/') {
resultado = num1 / num2;
} else {
print("Operación no válida.");
return;
}

print("El resultado es: $resultado");

}