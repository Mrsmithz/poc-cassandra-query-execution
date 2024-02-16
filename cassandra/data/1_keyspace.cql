CREATE KEYSPACE IF NOT EXISTS test
    with replication = {'class': 'SimpleStrategy', 'replication_factor': 1};