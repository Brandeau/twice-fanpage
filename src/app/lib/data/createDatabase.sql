SELECT 'CREATE DATABASE twice_fanpage'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'twice_fanpage')\gexec
