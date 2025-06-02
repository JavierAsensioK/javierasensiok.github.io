#!/bin/bash
# Encrypts index.html using staticrypt
PASSWORD="yourpassword"
staticrypt index.html $PASSWORD -o index.html
echo "🔐 index.html encrypted with Staticrypt"
