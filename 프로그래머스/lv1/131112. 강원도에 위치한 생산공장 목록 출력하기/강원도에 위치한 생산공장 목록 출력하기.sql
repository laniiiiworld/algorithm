select factory_id
     , factory_name
     , address
from   food_factory
where  1=1
and    address like '강원도%'
order by factory_id