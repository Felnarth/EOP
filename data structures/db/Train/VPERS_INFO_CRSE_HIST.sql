DROP VIEW TRAIN.VPERS_INFO_CRSE_HIST;

/* Formatted on 2/2/2021 1:18:31 PM (QP5 v5.318) */
CREATE OR REPLACE FORCE VIEW TRAIN.VPERS_INFO_CRSE_HIST
(
    CMP_ALT_ID,
    COURSE_CODE,
    REQUAL_INTVL_MTH,
    COURSE_TITLE,
    INSTR_TYPE_CODE,
    COURSE_REV_NUM,
    STATUS_CODE,
    COMPLETE_DATE
)
BEQUEATH DEFINER
AS
      SELECT /*
       --------------------------------------------------------------------------
                -- 09/26/2013 KAS (2013-06418) View created
                -- 6/09/2015 KAS (2015-05426) removed failures from view
                */
 ------------------------------------------------------------------------------
             e.cmp_alt_id,
             c.course_code,
             c.requal_intvl_mth,
             c.course_title,
             c.instr_type_code,
             c.course_rev_num,
             DECODE (ca.class_attend_status_code,
                     'C', 'COMPLETE',
                     'I', 'INCOMPLETE',
                     'G', 'GRANTED EXCEPTION')
                 status_code,
             ca.complete_date
        FROM employee  e,
             class_attend ca,
             course    c,
             class     cl
       WHERE     ca.emp_ssn_num = e.emp_ssn_num
             AND ca.class_code = cl.class_code
             AND cl.course_code = c.course_code
             AND cl.instr_type_code = c.instr_type_code
             AND cl.course_rev_num = c.course_rev_num
             AND ca.class_attend_status_code IN ('C', 'I', 'G')
    ORDER BY ca.complete_date DESC, c.course_code;


CREATE OR REPLACE PUBLIC SYNONYM VPERS_INFO_CRSE_HIST FOR TRAIN.VPERS_INFO_CRSE_HIST;


GRANT SELECT ON TRAIN.VPERS_INFO_CRSE_HIST TO PUBLIC;

GRANT SELECT ON TRAIN.VPERS_INFO_CRSE_HIST TO TRAIN_DEV_READ;

GRANT SELECT ON TRAIN.VPERS_INFO_CRSE_HIST TO TRAIN_MAINTAINER;

GRANT SELECT ON TRAIN.VPERS_INFO_CRSE_HIST TO TRAIN_MAINTAINER_READ;

GRANT SELECT ON TRAIN.VPERS_INFO_CRSE_HIST TO TRAIN_SSO_ROLE;