class CuentaBancaria(
    val titular: String,
    var saldo: Double
) {
    fun depositar(monto: Double) {
        if (monto > 0) {
            saldo += monto
        }
    }

    fun retirar(monto: Double): Boolean {
        if (monto > saldo) {
            return false
        }
        saldo -= monto
        return true
    }
}