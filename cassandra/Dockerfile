FROM cassandra:4

COPY /data/*.cql /docker-entrypoint-initdb.d/

COPY init.sh /

RUN ["chmod", "+x", "/init.sh"]

ENTRYPOINT ["/init.sh"]