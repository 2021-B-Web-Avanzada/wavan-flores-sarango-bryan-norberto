/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     14/2/2022 23:53:18                           */
/*==============================================================*/

CREATE DATABASE constructora;
USE constructora;

drop table if exists IMAGEN;

drop table if exists MENSAJE;

drop table if exists PROPIEDAD;

drop table if exists PROYECTO;

drop table if exists USUARIO;

/*==============================================================*/
/* Table: IMAGEN                                                */
/*==============================================================*/
create table IMAGEN
(
   ID_IMAGEN            int not null AUTO_INCREMENT,
   ID_PROYECTO          int,
   ID_PROPIEDAD         int,
   TITULO_IMG           varchar(1024) not null,
   ALT_IMG              varchar(1024),
   DIMENSION_IMG        varchar(1024) not null,
   URL_IMG              varchar(1024) not null,
   IMAGEN_IMG           longblob not null,
   primary key (ID_IMAGEN)
);

/*==============================================================*/
/* Table: MENSAJE                                               */
/*==============================================================*/
create table MENSAJE
(
   ID_MENSAJE           int not null AUTO_INCREMENT,
   ID_PROYECTO          int,
   ID_PROPIEDAD         int,
   ID_USUARIO           int,
   CONTENIDO_MENSAJE    varchar(1024) not null,
   primary key (ID_MENSAJE)
);

/*==============================================================*/
/* Table: PROPIEDAD                                             */
/*==============================================================*/
create table PROPIEDAD
(
   ID_PROPIEDAD         int not null AUTO_INCREMENT,
   ID_PROYECTO          int,
   NOMBRE_PROP          varchar(1024) not null,
   PLANO_PROP           longblob not null,
   PRECIO_PROP          float(8,2) not null,
   DIMENSION_TOTAL_PRO  varchar(1024) not null,
   NUMERO_HABITACIONES_PROP int not null,
   NUMERO_BANOS_PROP    int not null,
   NUMERO_ESTACIONAMIENTOS_PROP int not null,
   TIPO_PROP            varchar(1024) not null,
   primary key (ID_PROPIEDAD)
);

/*==============================================================*/
/* Table: PROYECTO                                              */
/*==============================================================*/
create table PROYECTO
(
   ID_PROYECTO          int not null AUTO_INCREMENT,
   ID_USUARIO           int,
   NOMBRE_PROY          varchar(1024) not null,
   PLANO_PROY           longblob not null,
   UBICACION_PROY       varchar(1024) not null,
   NUMERO_PROP_PROY     int not null,
   DIMENSION_PROY       varchar(1024) not null,
   NUMERO_PROP_DISPONIBLE_PRO int not null,
   SERVICIOS_PROY       varchar(1024) not null,
   primary key (ID_PROYECTO)
);

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO
(
   ID_USUARIO           int not null AUTO_INCREMENT,
   NOMBRE_USUARIO       varchar(1024) not null,
   EMAIL_USUARIO        varchar(1024) not null,
   CONTRASENA_USUARIO   varchar(1024) not null,
   CELULAR_USUARIO      varchar(1024) not null,
   TIPO_USUARIO         varchar(1024) not null,
   primary key (ID_USUARIO)
);

alter table IMAGEN add constraint FK_RELATIONSHIP_5 foreign key (ID_PROPIEDAD)
      references PROPIEDAD (ID_PROPIEDAD) on delete restrict on update restrict;

alter table IMAGEN add constraint FK_RELATIONSHIP_8 foreign key (ID_PROYECTO)
      references PROYECTO (ID_PROYECTO) on delete restrict on update restrict;

alter table MENSAJE add constraint FK_RELATIONSHIP_4 foreign key (ID_USUARIO)
      references USUARIO (ID_USUARIO) on delete restrict on update restrict;

alter table MENSAJE add constraint FK_RELATIONSHIP_7 foreign key (ID_PROPIEDAD)
      references PROPIEDAD (ID_PROPIEDAD) on delete restrict on update restrict;

alter table MENSAJE add constraint FK_RELATIONSHIP_9 foreign key (ID_PROYECTO)
      references PROYECTO (ID_PROYECTO) on delete restrict on update restrict;

alter table PROPIEDAD add constraint FK_RELATIONSHIP_6 foreign key (ID_PROYECTO)
      references PROYECTO (ID_PROYECTO) on delete restrict on update restrict;

alter table PROYECTO add constraint FK_RELATIONSHIP_10 foreign key (ID_USUARIO)
      references USUARIO (ID_USUARIO) on delete restrict on update restrict;

