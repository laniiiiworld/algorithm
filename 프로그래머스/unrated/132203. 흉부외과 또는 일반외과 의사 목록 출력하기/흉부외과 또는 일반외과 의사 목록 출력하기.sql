select dr_name
     , dr_id
     , mcdp_cd
     , to_char(hire_ymd,'yyyy-mm-dd') as hire_ymd
from   doctor
where  1=1
and    mcdp_cd in ('CS', 'GS')
order by hire_ymd desc, dr_name