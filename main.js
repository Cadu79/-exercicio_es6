    // Criando um array vazio
    const alunos = [];

    // Adicionando alunos ao array
    alunos.push({ nome: "Maria Eduarda", nota: 9.5});
    alunos.push({ nome: "Duarte", nota: 8.2});
    alunos.push({ nome: "Paulo", nota: 7.8});
    

    // Acessando as informações dos alunos
    console.log(alunos[0].nome);
    console.log(alunos[1].nota);

    // Percorrendo o array para exibir todos os alunos e suas notas
    for (const aluno of alunos) {
        console.log(`Nome: ${aluno.nome}, Nota: ${aluno.nota}`);
    }

    // Função para filtrar alunos por nota
    function filtraAlunosPorNota(alunos, notaMinima) {
        const alunosAprovados = alunos.filter(aluno => aluno.nota >= notaMinima);
        return alunosAprovados;
    }

    // Aqui estava com conflitos, pois eu deixei alunos então alterei para novosAlunos.

        const novosAlunos = [
            { nome: "Ana", nota: 9.5 },
            { nome: "João", nota: 8.2 },
            { nome: "Pedro", nota: 7.8 },
            { nome: "Maria", nota: 5.5 },
            { nome: "Carlos", nota: 6.0 },
            { nome: "Cecilia", nota: 4.5 },
            { nome: "Dandhara", nota: 8.0 },
        ];

    const notaMinima = 6;
    const alunosAprovados = filtraAlunosPorNota(novosAlunos, notaMinima);
    console.log(alunosAprovados);