CREATE TABLE aceite_termos (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  usuario_cpf CHAR(11) NOT NULL,
  data_aceite TIMESTAMP NULL,
  PRIMARY KEY(id, usuario_cpf),
  INDEX aceite_termos_FKIndex1(usuario_cpf)
);

CREATE TABLE enderecos (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  rua VARCHAR(255) NULL,
  numero VARCHAR(20) NULL,
  complemento VARCHAR(255) NULL,
  bairro VARCHAR(255) NULL,
  cidade VARCHAR(255) NULL,
  uf CHAR(2) NULL,
  cep CHAR(8) NULL,
  usuario_cpf CHAR(11) NOT NULL,
  PRIMARY KEY(id),
  INDEX enderecos_FKIndex1(usuario_cpf)
);

CREATE TABLE perfil (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NULL,
  descricao VARCHAR(255) NULL,
  PRIMARY KEY(id)
);

CREATE TABLE telefones (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  tipo VARCHAR(20) NULL,
  numero VARCHAR(20) NULL,
  usuario_cpf CHAR(11) NOT NULL,
  PRIMARY KEY(id, usuario_cpf)
);

CREATE TABLE termos_de_uso (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  aceite_termos_usuario_cpf CHAR(11) NOT NULL,
  aceite_termos_id INTEGER UNSIGNED NOT NULL,
  versao VARCHAR(20) NULL,
  url_modelo VARCHAR(120) NULL,
  data_publicacao TIMESTAMP NULL,
  data_expiracao TIMESTAMP NULL,
  PRIMARY KEY(id),
  INDEX termos_de_uso_FKIndex1(aceite_termos_id, aceite_termos_usuario_cpf)
);

CREATE TABLE usuario (
  cpf CHAR(11) NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NULL,
  email VARCHAR(255) NULL,
  senha CHAR(60) NULL,
  termos_uso_aceito BOOL NULL,
  criado_em TIMESTAMP NULL,
  ultimo_login TIMESTAMP NULL,
  email_verificado BOOL NULL,
  perfil_id INTEGER UNSIGNED NULL,
  PRIMARY KEY(cpf),
  INDEX usuario_FKIndex1(perfil_id)
);

CREATE TABLE verificacao_email (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  usuario_cpf CHAR(11) NOT NULL,
  token TEXT NULL,
  data_envio TIMESTAMP NULL,
  data_verificacao TIMESTAMP NULL,
  data_expiracao_token TIMESTAMP NULL,
  PRIMARY KEY(id, usuario_cpf),
  INDEX verificacao_email_FKIndex1(usuario_cpf)
);


