#!/usr/bin/env zsh

psql -U postgres -c "drop database twice_fanpage" 
psql -U Brandeau -d postgres -f src/app/lib/data/createDatabase.sql
psql -U Brandeau -d twice_fanpage -f src/app/lib/data/createSchema.sql