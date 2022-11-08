select id, name, host_id
from places 
where host_id in (
                    select host_id
                    from   places
                    where  1=1
                    group by host_id
                    having count(*) >= 2
                  )
order by id