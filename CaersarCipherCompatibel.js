
function encrypt() {
    const text = document.getElementById('input').value;
    const shift = parseInt(document.getElementById('shift').value) || 0;
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let c = text[i];
        if (c.match(/[a-z]/i)) {
            const code = text.charCodeAt(i);
            let shiftedCode;
            if (code >= 65 && code <= 90) {
                shiftedCode = ((code - 65 + shift) % 26) + 65;
            } else if (code >= 97 && code <= 122) {
                shiftedCode = ((code - 97 + shift) % 26) + 97;
            } else {
                shiftedCode = code;
            }
            result += String.fromCharCode(shiftedCode);
        } else {
            result += c;
        }
    }

    document.getElementById('output').value = result;
}


