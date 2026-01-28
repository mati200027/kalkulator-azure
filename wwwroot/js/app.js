window.calculate = function (operation) {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const resultField = document.getElementById("result");

    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        alert("Podaj poprawne liczby w polach A i B.");
        return;
    }

    let result;
    switch (operation) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/":
            if (b === 0) { alert("Nie można dzielić przez zero!"); return; }
            result = a / b;
            break;
        default:
            alert("Nieznana operacja: " + operation);
            return;
    }

    resultField.value = String(Math.round(result * 1e10) / 1e10);
};
