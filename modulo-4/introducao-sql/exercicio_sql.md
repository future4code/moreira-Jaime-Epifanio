## Exercício 1
## a)
* VARCHAR(255) > Varchar é igual a string e o 255 é o limitador de caracteres.
* PRIMARY KEY > Representa um ID único na tabela.
* FLOAT > Representa números não inteiros.
* DATE > Representa uma data (YYYY-MM-DD).
* NOT NULL > Não aceita valores nulos.
## b)
* SHOW DATABASES > Me lista minha base de Dados.
* SHOW TABLES > Me lista e me mostra as tabelas que eu tenho.
## c)
* DESCRIBE ACTOR > Me traz todas as informações da tabela que estão os atores, contendo os tipos das informações, se é string, number, etc....

----------

## Exercício 2
## a)
* INSERT INTO Actor (id, name, salary, birth_date, gender)
* VALUES(
* "002", 
* "Glória Pires",
* 1200000,
* "1963-08-23", 
* "female"
);
## b)
* Deu erro duplicado pra chave Primaria.
## c)
* A contagem de colunas não corresponde à contagem de valores na linha 1. O erro aconteceu porque faltou os valores de data de nascimento e gênero logo depois do INSER INTO Actor.
## d)
* Código do erro: 1364. Campo 'nome' não tem um valor.
O erro ocorreu pois faltou o campo do nome que é NOT NULL.
## e)
* Código do erro: 1292. Valor de data incorreto.
Ocorreu pois está sem aspas a data.
## f)
* "007", 
* "Paulo Beti",
* 125333.33,
* "1949-07-20", 
* "male"
* );
* 
* 
------

## Exercício 3
## a)
* SELECT id, salary, birth_date, name from Actor WHERE gender = "female"
## b)
* SELECT salary, name from Actor WHERE name = "Tony Ramos"
## c)
* SELECT * from Actor WHERE gender = "invalid"
## d)
* SELECT id, name, salary FROM Actor WHERE salary <= 500000;
## e)
* Erro código: 1054. 'nome' não foi encontrado no campo da lista.
Deu erro pois 'nome' não existe na tabela, está como "name".
* SELECT id, name from Actor 
  WHERE id = "002";

## Exercício 4
## a) 
* A query serve para rastrear os atores que começam com a letra A e a letra J e que ganhem mais que 300 k.
## b)
* SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary >350000;
## c)
* 
## d)
* SELECT * FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;

## Exercício 5
## a)
* CREATE TABLE Movie (
	* id VARCHAR(255) PRIMARY KEY,
	* name VARCHAR(255) NOT NULL, 
	* synopsis TEXT NOT NULL, 
	* release_date DATE NOT NULL,
	* rating INT NOT NULL
* );
## b)
* SELECT salary, name from Actor WHERE name = "Tony Ramos"
## c)
* SELECT * from Actor WHERE gender = "invalid"
## d)
* SELECT id, name, salary FROM Actor WHERE salary <= 500000;
## e)
* Erro código: 1054. 'nome' não foi encontrado no campo da lista.
Deu erro pois 'nome' não existe na tabela, está como "name".
* SELECT id, name from Actor 
  WHERE id = "002";

