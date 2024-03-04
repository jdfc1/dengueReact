TAG=$(shell date +%d.%m.%Y-%A)

name:
	git config --global user.name "jdfc1"
email:	name
	git config --global user.email "jdfc1@aluno.ifal.edu.br"
add:	email
	git add .
commit: add
	git commit -m "Enviado no dia $(TAG)."
push: 	commit
	git push

custom_commit:	add
	git commit -m "$M em $(TAG)"
custom_push:	custom_commit
	git push

.PHONY: add commit push custom_commit custom_push

# você pode chamar ( make custom_push M='sua mensagem aqui' ) 
# para realizar um commit com a mensagem personalizada.

# O uso de .PHONY é importante para garantir que o Makefile 
# entenda que add, commit, push, e custom_commit são phony 
# targets, ou seja, não são nomes de arquivos e sempre serão 
# executados, mesmo que existam arquivos com esses nomes no diretório.