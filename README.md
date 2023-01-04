# Expense Manager

---

Api rest para gerenciar as finanças do usuário, fazendo cálculos de métricas de gasto e ajudando a controlar os gastos do usuário, comparando o gasto de mês com o salário informado.

---

## v0.1

Criação básica dos módulos de usuário e debitos, implementeação do crud e polimento do código

## v0.2

Esperado: Criação de mais métodos para listar e gerar métricas dos débitos.

- [X] Criar método de soma dos débitos
- [X] Criação de débitos recorrentes
- [X] Listagem por mês
- [X] Débitos ativos
  - [ ] Poder fechar esses débitos automaticamente
- [ ] Paginação
  - [ ] listDebtById: simples
  - [ ] listDebts: cursor
## v0.3

- Independência de meses
  - Meses que podem ter valores diferentes
  - Registro de cada mês como uma nova linha ou objeto
> Criação de uma tabela de pagamentos, contendo o valor total do pagamento mensal e o valor que o usuário recebeu naquele mes, assim registrando os valores e métricas
- Melhorias das métricas
