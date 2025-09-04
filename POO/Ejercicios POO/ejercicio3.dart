class CuentaBancaria {
  String _titular;
  double _saldo;
  int _numeroCuenta;
  static int _contadorCuentas = 1000;
  static double _tasaInteres = 0.05;

  CuentaBancaria(this._titular, this._saldo)
      : _numeroCuenta = _contadorCuentas++;

  CuentaBancaria.conSaldoInicial(this._titular)
      : _saldo = 100.0,
        _numeroCuenta = _contadorCuentas++;

  void mostrarInfo() {
    print("Titular: $_titular | Nº Cuenta: $_numeroCuenta | Saldo: \$$_saldo");
  }

  void depositar(double monto) {
    if (monto > 0) {
      _saldo += monto;
      print("Depósito exitoso de \$${monto.toStringAsFixed(2)}. Nuevo saldo: \$${_saldo.toStringAsFixed(2)}");
    } else {
      print("El monto a depositar debe ser mayor a 0.");
    }
  }

  void retirar(double monto) {
    if (monto <= _saldo && monto > 0) {
      _saldo -= monto;
      print("Retiro exitoso de \$${monto.toStringAsFixed(2)}. Saldo restante: \$${_saldo.toStringAsFixed(2)}");
    } else if (monto <= 0) {
      print("El monto debe ser mayor a 0.");
    } else {
      print("Saldo insuficiente para retirar \$${monto.toStringAsFixed(2)}.");
    }
  }

  void calcularInteres() {
    double interes = _saldo * _tasaInteres;
    print("Interés ganado en 1 año: \$${interes.toStringAsFixed(2)} a una tasa del ${(_tasaInteres * 100).toStringAsFixed(1)}%");
  }
}




void main() {
  var cuenta1 = CuentaBancaria("Carlos Pérez", 500.0);
  var cuenta2 = CuentaBancaria.conSaldoInicial("Ana Torres");

  cuenta1.mostrarInfo();
  cuenta2.mostrarInfo();

  cuenta1.depositar(200);
  cuenta2.depositar(-50); 

  cuenta1.retirar(100);
  cuenta2.retirar(200); 

  cuenta1.calcularInteres();
  cuenta2.calcularInteres();

  cuenta1.mostrarInfo();
  cuenta2.mostrarInfo();
}
