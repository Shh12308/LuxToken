#!/bin/bash

# Initialize chain
geth --datadir ./data init genesis.json

# Start node
geth --datadir ./data \
     --networkid 56789 \
     --http \
     --http.addr 0.0.0.0 \
     --http.port 8545 \
     --http.api personal,eth,net,web3,txpool,miner \
     --ws \
     --ws.addr 0.0.0.0 \
     --ws.port 8546 \
     --ws.api personal,eth,net,web3,txpool \
     --allow-insecure-unlock \
     --unlock 0xYOUR_WALLET_ADDRESS \
     --mine \
     --nodiscover \
     --verbosity 3
