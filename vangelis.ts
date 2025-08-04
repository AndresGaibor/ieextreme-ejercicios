const visitados = new Set();
type MatrizAdyacente = { [v: number]: number[] };
function dfs(adj: MatrizAdyacente, v: number, padre: number | null, ) {
	console.log(`Vertice ${v}`)

	visitados.add(v);
	const vecinos = adj[v] || [];

	for (const u of vecinos) {
		// console.log(`El vertice u '${u}' viene de v '${v}'`)
		if(!visitados.has(u)) {
			if (dfs(adj, u, v)) return true;
		} else if(u !== padre) {
			console.log(`El vertice ${u} ha sido visitado y no por su padre '${padre}' sino por ${v}`)
			return true;
		}
		// console.log('Vertice ', u, '->')
	}

	return false;
}

// matriz de adjacencia
// const adj: MatrizAdyacente = {
//   0: [3,2,1],
//   1: [0,2],
//   2: [0,3,1],
//   3: [0,2]
// };
const adj: MatrizAdyacente = {
  0: [3,1],
  1: [0,2, 5],
  2: [1],
  3: [0, 4],
  4: [3],
  5: [1]
};

const ciclos = dfs(adj, 0, null);
console.log(`El grafo${ciclos ? '' : ' no'} tiene ciclos`);