## front-end: projeto-tasklist
# back-end: tasklist

Java + Angular + Bootstrap + Spring Boot + JPA + Mysql
API: GET / PUT / PATCH / DELETE

BD: Porta8080 | tasklist_db (variaveis de ambiente application.yml)
Colocar nas variaveis de ambiente do computado:

GET e  SET: Precisa rodar o lombok (http://projectlombok.org/download)
Collection postman: Tasklist.postman_collection.json
DB_USERNAME: <username>
DB_PASSWORD: <senha>

/*
* Data de Criação: Data da criação
* Data de Edição: Data da edição
* Data de Exclusão: Data que foi excluído (soft delete)
* Data de Conclusão: Data de quando o Status foi setado para FEITO (PUT ou PATH)
* Data null: Evento não ocorreu.
*/


Se não tiver o javax, colocar dependencia no pom.xml
Verificar se tem javax (C:\Users\<username>\.m2\repository\javax)
<!-- https://mvnrepository.com/artifact/javax.validation/validation-api -->
		<dependency>
		    <groupId>javax.validation</groupId>
		    <artifactId>validation-api</artifactId>
		    <version>2.0.1.Final</version>
		</dependency>

Problema de Configuração Maven:
Definir Window > Prefences > Workspace > Text file encoding para "Other > UTF-8"
