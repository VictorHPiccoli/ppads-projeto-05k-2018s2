# Casos de uso

## CDU001 - Criar Nova Lista de Tarefas
Fluxo Principal
  1. usuario pressiona o botão "criar nova lista" em seu perfil
  2. sistema solicita o nome que o usuario deseja dar a lista e o tempo de duração.
  3. sistema cria a lista, e apresenta para o usuario.
  4. usuario insere uma tarefa por vez, e apos inserir cada tarefa define um tempo limite para finaliza-la.
  5. o usuario seleciona uma categoria
  6. apos o usuario inserir todas as tarefas, ele deve confirmar a lista.
  7. apos a confirmação do usuario, o sistema exibe a lista com todas as tarefas registradas pelo usuario e o tempo de cada tarefa começa a ser decrementado.
  
Fluxo Alternativo 3b

  1. usuario clica no botão 'cancelar criação de lista'
  2. sistema exibe janela para confirmação do cancelamento
  3. usuario confirma a opção 'cancelar'
  4. sistema exibe tela inicial
  
Fluxo Alternativo 5b

  1. usuario insere uma tarefa por vez, e inativa a opção de definição de tempo limite para finaliza-la
  2. apos o usuario inserir todas as tarefas, ele deve confirmar a lista.
  3. retorna ao passo 6 do fluxo principal. 
  
## CDU002 - Alterar Lista
Fluxo Principal
  1. apos a criação da lista (CDU002), o sistema apresentara a lista com a opção de "editar lista"
  2. usario pressiona o botão "editar lista".
  3. sistema mostra a lista para ser editada como por exemplo, alteração de tarefas ou tempo, e adição de novas tarefas.
  4. usuario realiza todas as alterações que deseja e pressiona o botão "confirmar".
  5. sistema valida as informações e apresenta a nova lista.


## CDU003 - Remover Lista

Fluxo Principal

  1.	apos o termino da lista (todas as tarefas concluidas/ tempo da lista esgotado), o sistema finaliza a lista.
  2.	depois de finalizar a lista, o sistema manda o usuario para a pagina inicial (perfil do usuario), e la estara a lista que ja foi finalizada pelo usuario, com a mensagem "a lista foi finalizada as (horario e data)".
  3.	o usuario tera a opção de remover a lista 
  4.	o usuário escolhe a opção 'remover' e o sistema apaga a lista do perfil 
  5.	sistema exibe um botão '+ criar nova lista' (CDU001)

Fluxo Alternativo 4b

  1. usuário seleciona opção ‘salvar’ para salvar a lista.
  2. sistema apresenta campo para alterar nome da lista a ser salva
  3. sistema apresenta opções ‘Cancelar’e ‘OK’
  4. usuário preenche campo de nome e seleciona ‘OK’
  5. retorna ao passo 5 do fluxo principal

Fluxo Alternativo 4c

  1. usuário seleciona opção ‘salvar’ para salvar a lista.
  2. sistema apresenta campo para alterar nome da lista a ser salva
  3. sistema apresenta opções ‘Cancelar’ e ‘OK’
  4. usuário seleciona cancelar
  5. sistema confirma desistência de armazenamento da lista
  6. usuário confirma cancelamento
  7. retorna ao passo 5 do fluxo principal
  
  
  ## CDU004 - Gerenciar categorias de tarefas
  
Fluxo Principal
  1. usuario pressiona o botão "Gerenciar tarefas" em seu perfil
  2. sistema apresenta todas as listas de tarefas.
  3. usuário seleciona lista na qual a tarefa a ser categorizada está inserida.
  4. sistema apresenta tarefas da lista escolhida
  5. usuário seleciona tarefa a ser categorizada
  6. sistema apresenta lista de categorias disponíveis
  7. usuário seleciona categoria para a tarefa
  8. sistema apresenta tela de confirmação
  9. usuário confirma categorização
  10. sistema apresenta "Categorizar mais tarefas ?" , "Sim" , "Não"
  11. usuário seleciona "Não"
  12. sistema retorna ao menu inicial

Fluxo Alternativo 8b  

  8. sistema apresenta tela de confirmação
  9. usuário declina confirmacao
  10. sistema exibe lista de categorias disponíveis

Fluxo Alternativo 10b

  10. sistema apresenta "Categorizar mais tarefas ?" , "Sim" , "Não"
  11. usuário seleciona "Sim"
  12. sistema apresenta lista de tarefas

  
  
