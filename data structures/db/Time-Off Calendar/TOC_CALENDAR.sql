DROP TABLE SSES.TOC_CALENDAR CASCADE CONSTRAINTS;

CREATE TABLE SSES.TOC_CALENDAR
(
  USERID               VARCHAR2(5 CHAR)         NOT NULL,
  ORG_ID               VARCHAR2(5 CHAR)         NOT NULL,
  EVENT_START          DATE                     NOT NULL,
  EVENT_STOP           DATE                     NOT NULL,
  LINKID               VARCHAR2(255 BYTE)       DEFAULT NULL,
  EMAILED_SUPER        INTEGER                  DEFAULT 0,
  APPROVAL_LEAD        INTEGER                  DEFAULT 0,
  APPROVAL_SUPERVISOR  INTEGER                  DEFAULT 0,
  LEAD_ID              VARCHAR2(5 CHAR),
  ID                   NUMBER GENERATED ALWAYS AS IDENTITY ( START WITH 924 MAXVALUE 9999999999999999999999999999 MINVALUE 1 NOCYCLE CACHE 2 NOORDER NOKEEP NOSCALE) NOT NULL,
  EVENT_TITLE          VARCHAR2(50 CHAR)        NOT NULL,
  REASON               VARCHAR2(1000 CHAR)      DEFAULT ON NULL 'PTO'         NOT NULL,
  SUPERVISOR_ID        VARCHAR2(5 CHAR)
)
TABLESPACE SSES_TAB
PCTUSED    0
PCTFREE    10
INITRANS   1
MAXTRANS   255
STORAGE    (
            INITIAL          64K
            NEXT             1M
            MINEXTENTS       1
            MAXEXTENTS       UNLIMITED
            PCTINCREASE      0
            BUFFER_POOL      DEFAULT
           )
LOGGING
NOCOMPRESS
NOCACHE;


CREATE UNIQUE INDEX SSES.TOC_CALENDAR_PK ON SSES.TOC_CALENDAR
(ID)
LOGGING
TABLESPACE SSES_TAB
PCTFREE    10
INITRANS   2
MAXTRANS   255
STORAGE    (
            INITIAL          64K
            NEXT             1M
            MINEXTENTS       1
            MAXEXTENTS       UNLIMITED
            PCTINCREASE      0
            BUFFER_POOL      DEFAULT
           );

ALTER TABLE SSES.TOC_CALENDAR ADD (
  CONSTRAINT TOC_CALENDAR_PK
  PRIMARY KEY
  (ID)
  USING INDEX SSES.TOC_CALENDAR_PK
  ENABLE VALIDATE);


DROP SEQUENCE SSES.ISEQ$$_2780984;

-- Sequence ISEQ$$_2780984 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_2780986;

-- Sequence ISEQ$$_2780986 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_2780988;

-- Sequence ISEQ$$_2780988 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_2780990;

-- Sequence ISEQ$$_2780990 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_3763542;

-- Sequence ISEQ$$_3763542 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4126494;

-- Sequence ISEQ$$_4126494 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4126498;

-- Sequence ISEQ$$_4126498 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4126500;

-- Sequence ISEQ$$_4126500 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4126502;

-- Sequence ISEQ$$_4126502 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4331919;

-- Sequence ISEQ$$_4331919 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4331922;

-- Sequence ISEQ$$_4331922 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4331924;

-- Sequence ISEQ$$_4331924 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4331927;

-- Sequence ISEQ$$_4331927 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4331929;

-- Sequence ISEQ$$_4331929 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4331936;

-- Sequence ISEQ$$_4331936 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4331939;

-- Sequence ISEQ$$_4331939 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4331942;

-- Sequence ISEQ$$_4331942 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4475121;

-- Sequence ISEQ$$_4475121 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4643219;

-- Sequence ISEQ$$_4643219 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4643221;

-- Sequence ISEQ$$_4643221 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4985837;

-- Sequence ISEQ$$_4985837 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4985840;

-- Sequence ISEQ$$_4985840 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4985847;

-- Sequence ISEQ$$_4985847 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4985852;

-- Sequence ISEQ$$_4985852 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_4985855;

-- Sequence ISEQ$$_4985855 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_5145314;

-- Sequence ISEQ$$_5145314 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_5438258;

-- Sequence ISEQ$$_5438258 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7712663;

-- Sequence ISEQ$$_7712663 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7712676;

-- Sequence ISEQ$$_7712676 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7712679;

-- Sequence ISEQ$$_7712679 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7712694;

-- Sequence ISEQ$$_7712694 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7712701;

-- Sequence ISEQ$$_7712701 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7712708;

-- Sequence ISEQ$$_7712708 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7712711;

-- Sequence ISEQ$$_7712711 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7712714;

-- Sequence ISEQ$$_7712714 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7724506;

-- Sequence ISEQ$$_7724506 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7796402;

-- Sequence ISEQ$$_7796402 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7933967;

-- Sequence ISEQ$$_7933967 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7933971;

-- Sequence ISEQ$$_7933971 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7933978;

-- Sequence ISEQ$$_7933978 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7933985;

-- Sequence ISEQ$$_7933985 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7933989;

-- Sequence ISEQ$$_7933989 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7933993;

-- Sequence ISEQ$$_7933993 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7933997;

-- Sequence ISEQ$$_7933997 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7934000;

-- Sequence ISEQ$$_7934000 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7934005;

-- Sequence ISEQ$$_7934005 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7934009;

-- Sequence ISEQ$$_7934009 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7934012;

-- Sequence ISEQ$$_7934012 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7934017;

-- Sequence ISEQ$$_7934017 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7934023;

-- Sequence ISEQ$$_7934023 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7934027;

-- Sequence ISEQ$$_7934027 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7934032;

-- Sequence ISEQ$$_7934032 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7934040;

-- Sequence ISEQ$$_7934040 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7934043;

-- Sequence ISEQ$$_7934043 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7934049;

-- Sequence ISEQ$$_7934049 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7934057;

-- Sequence ISEQ$$_7934057 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7934062;

-- Sequence ISEQ$$_7934062 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7934065;

-- Sequence ISEQ$$_7934065 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7934069;

-- Sequence ISEQ$$_7934069 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7934073;

-- Sequence ISEQ$$_7934073 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7934077;

-- Sequence ISEQ$$_7934077 is created automatically by Oracle for use with an Identity column


DROP SEQUENCE SSES.ISEQ$$_7934089;

-- Sequence ISEQ$$_7934089 is created automatically by Oracle for use with an Identity column


CREATE OR REPLACE TRIGGER SSES.TOC_CALENDAR_ON_INSERT_FIND_LINKID
BEFORE INSERT
ON SSES.TOC_CALENDAR
REFERENCING NEW AS NEW OLD AS OLD
FOR EACH ROW
DECLARE
tmpVar VARCHAR2(255);
/******************************************************************************
   NAME:
   PURPOSE:

   REVISIONS:
   Ver        Date        Author           Description
   ---------  ----------  ---------------  ------------------------------------
   1.0        6/4/2019      j4968       1. Created this trigger.

   NOTES:

   Automatically available Auto Replace Keywords:
      Object Name:
      Sysdate:         6/4/2019
      Date and Time:   6/4/2019, 5:30:53 PM, and 6/4/2019 5:30:53 PM
      Username:        j4968 (set in TOAD Options, Proc Templates)
      Table Name:      TOC_CALENDAR (set in the "New PL/SQL Object" dialog)
      Trigger Options:  (set in the "New PL/SQL Object" dialog)
******************************************************************************/
BEGIN
   SELECT
   LINKID INTO tmpVar
   FROM TOC_USERS
   WHERE USERID=:NEW.USERID;
   :NEW.LINKID := tmpVar;


   EXCEPTION
     WHEN NO_DATA_FOUND THEN
        SELECT
           LINKID INTO tmpVar
           FROM TOC_LEADS
           WHERE USERID=:NEW.USERID;
           :NEW.LINKID := tmpVar;
     WHEN OTHERS THEN

       RAISE;


END ;
/
