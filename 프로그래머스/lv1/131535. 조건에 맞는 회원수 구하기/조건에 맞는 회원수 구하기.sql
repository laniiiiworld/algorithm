select count(*) as users
from   user_info
where  1=1
and    to_char(joined, 'yyyy') = '2021'
and    age between 20 and 29