#!/bin/bash

sleep 5

# Ensure apache running
service apache2 restart

cron -f
