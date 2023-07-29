CREATE DATABASE sisdoc;


CREATE TABLE perfil (
    id SERIAL,
    CONSTRAINT pk_perfil PRIMARY KEY (id),
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL
);

CREATE TABLE usuarios (
    cpf CHAR(11),
    CONSTRAINT pk_usuarios PRIMARY KEY (cpf),
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha CHAR(60) NOT NULL,
    termos_uso_aceito BOOLEAN DEFAULT TRUE,
    ativacao BOOLEAN DEFAULT FALSE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ultimo_login TIMESTAMP,
    perfil_id INTEGER,
    CONSTRAINT fk_perfil_usuario FOREIGN KEY (perfil_id) REFERENCES perfil(id)
);

CREATE TABLE telefones (
    id SERIAL,
    CONSTRAINT pk_telefone PRIMARY KEY (id),
    tipo VARCHAR(20),
    numero VARCHAR(20) NOT NULL,
    usuario_cpf CHAR(11),
    CONSTRAINT fk_telefone_usuario FOREIGN KEY (usuario_cpf) REFERENCES usuarios(cpf)    
);

CREATE TABLE verificacao_email (
    id SERIAL,
    CONSTRAINT pk_verif_email PRIMARY KEY (id),
    email_verificado VARCHAR(255),
    token TEXT,
    data_hora_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_hora_verificacao TIMESTAMP,
    data_hora_expiracao_token TIMESTAMP,
    usuario_cpf CHAR(11),
    CONSTRAINT fk_verificacao_usuario FOREIGN KEY (usuario_cpf) REFERENCES usuarios(cpf)
);

CREATE TABLE termos_de_uso (
    id SERIAL,
    CONSTRAINT pk_termos_de_uso PRIMARY KEY (id),
    versao VARCHAR(20) NOT NULL,
    url VARCHAR(120) NOT NULL,
    data_hora_publicacao TIMESTAMP NOT NULL,
    data_hora_expiracao TIMESTAMP
);

CREATE TABLE aceite_termos (
    id SERIAL,
    data_aceite TIMESTAMP NOT NULL,
    usuario_cpf CHAR(11),
    termos_de_uso_id INTEGER,
    CONSTRAINT fk_aceite_termos_usuario FOREIGN KEY (usuario_cpf) REFERENCES usuarios(cpf),
    CONSTRAINT fk_aceite_termos FOREIGN KEY (termos_de_uso_id) REFERENCES termos_de_uso(id)
);
CREATE TABLE categorias (
    id serial,
    CONSTRAINT pk_categorias PRIMARY KEY (id),
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL
);

CREATE TABLE documentos (
    id SERIAL,
    CONSTRAINT pk_documentos PRIMARY KEY (id),
    nome_documento VARCHAR(120) NOT NULL,
    descricao VARCHAR(255),
    nome_interno VARCHAR(255),
    url TEXT,
    path TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado_em TIMESTAMP,
    usuario_cpf CHAR(11),
    CONSTRAINT fk_documentos_usuario FOREIGN KEY (usuario_cpf) REFERENCES usuarios(cpf)
);

CREATE TYPE perm AS ENUM ('Leitura', 'Gravacao');

CREATE TABLE compartilhamentos (
    id INTEGER,
    CONSTRAINT pk_compartilhamentos PRIMARY KEY (id),
    data_compartilhamento TIMESTAMP,
    permissao perm,
    usuario_cpf CHAR(11),
    documento_id INTEGER,
    CONSTRAINT fk_compartilhamento_usuario FOREIGN KEY (usuario_cpf) REFERENCES usuarios(cpf),
    CONSTRAINT fk_compartilhamento_documento FOREIGN KEY (documento_id) REFERENCES documentos(id)
);
