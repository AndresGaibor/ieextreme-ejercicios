function dfs(adj, visitados, v, padre) {
    visitados.add(v);
   
    const vecinos = adj[v] || [];

    for (const u of vecinos) {
        if (!visitados.has(u)) {
            if (dfs(adj, visitados, u, v)) return true;
        } 
        
        else if (u !== padre) {
            return true;
        }
    }
    return false;
}

function main() {
    // write your code here.
    // call functions `nextString`, `nextFloat` and `nextInt` 
    // to read the next token of input (ignoring whitespace)
    // Alternatively, you can create your own input parser functions
    // use console.log() to write to stdout
    
    

    // var i = nextInt();
    const numberOfTest = nextInt();
    
    for(let i = 0; i < numberOfTest; i++) {
        let matriz = {};
        
        const n = nextInt(); // nro de vertices
        const m = nextInt(); // numero de aristas
        
        for(let j = 0; j < m; j++) {
            const a = nextInt();
            const b = nextInt();
            
            if(Array.isArray(matriz[a])) {
                matriz[+a].push(b);
            } else {
                matriz[+a] = [b];
            }
            
            if(Array.isArray(matriz[b])) {
                matriz[+b].push(+a);
            } else {
                matriz[+b] = [+a];
            }
        }
        
        const visitados = new Set();
        //console.log(matriz);
        let tieneCiclo = false;

        // intento arrancar DFS en *cada* vértice 0..n-1
        for (let v = 0; v < n; v++) {
            if (!visitados.has(v)) {
                if (dfs(matriz, visitados, v, -1)) {
                    tieneCiclo = true;
                    break;
                }
            }
        }

        console.log(tieneCiclo ? 1 : 0);
        
    }
    
}

// default parsers for JS.
function nextInt() {
    return parseInt(nextString());
}

function nextFloat() {
    return parseFloat(nextString());
}

function nextString() {
    var next_string = "";
    clearWhitespaces();
    while (input_cursor < input_stdin.length && !isWhitespace(input_stdin[input_cursor])) {
        next_string += input_stdin[input_cursor];
        input_cursor += 1;
    }
    return next_string;
}

function nextChar() {
    clearWhitespaces();
    if (input_cursor < input_stdin.length) {
        return input_stdin[input_cursor++];
    } else {
        return '\0';
    }
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_cursor = 0;
process.stdin.on('data', function (data) { input_stdin += data; });
process.stdin.on('end', function () { main(); });

function isWhitespace(character) {
    return ' \t\n\r\v'.indexOf(character) > -1;
}

function clearWhitespaces() {
    while (input_cursor < input_stdin.length && isWhitespace(input_stdin[input_cursor])) {
        // ignore the next whitespace character
        input_cursor += 1;
    }  
}