select warehouse_id
     , warehouse_name
     , address
     , nvl(freezer_yn,'N') as freezer_yn
from   food_warehouse
where  1=1
and    address like '경기도%'
order by warehouse_id